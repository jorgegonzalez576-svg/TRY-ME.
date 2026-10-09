// Try Me · Connect engine v2.5
// Misma API que v2.3 (reemplazo directo de connect/engine.js). Se conserva todo lo de v2.3 y se añade:
//  1. Curva de profundidad: cada puesto del plan tiene una profundidad objetivo (calentar, subir, pico, bajar, cerrar).
//  2. Desire nunca antes de ~35% del plan ni antes de jugar una tarjeta D2.
//  3. Las tarjetas de regulación (D01, D13, D14, D15) solo salen cuando hace falta regular (o tras 3 pases), no como relleno de DO.
//  4. forceLight compara con la última tarjeta mostrada (jugada o pasada), no con la última jugada.
//  5. Más variedad: PICK y GUESS entran en más recetas, y el relleno de tiempo evita repetir familias recientes.
//  6. "Una más ligera" (tras 3 pases) prefiere juegos compartidos y ligeros: WHO, FINISH, DO o US.
//  7. El respaldo de regulación respeta semantic_key cuando puede (no repite el mismo tema).
(function(scope){
'use strict';
const family=c=>({'GUESS ME':'GUESS','WHO OF US':'WHO','FINISH IT':'FINISH','LISTEN AND REFLECT':'LISTEN','US · CLOSING':'US'}[c.family]||c.family);
const depth=c=>Number(c.depth.slice(1));
const closing=c=>c.theme==='Closing';
const writing=c=>['GUESS','REVEAL'].includes(family(c));
const privateCard=c=>['PICK','GUESS','REVEAL'].includes(family(c));
const round=c=>['WHO','FINISH'].includes(family(c));
const desire=c=>c.safety==='Desire opt in';
const regulationIds=['D01','D13','D14','D15'];
const recipes={
 5:[['WHO','DO'],['OPEN'],['DO'],['CLOSE']],
 10:[['WHO','OPEN'],['GUESS','PICK'],['OPEN'],['REVEAL','PICK'],['DO'],['CLOSE']],
 15:[['WHO','DO'],['GUESS','PICK'],['OPEN'],['REVEAL','PICK'],['LISTEN'],['DO'],['OPEN','US'],['CLOSE']],
 20:[['WHO','OPEN'],['PICK','GUESS'],['FINISH'],['REVEAL','GUESS'],['OPEN'],['LISTEN'],['DO'],['OPEN'],['US'],['CLOSE']],
 30:[['WHO'],['GUESS','PICK'],['OPEN'],['DO'],['REVEAL'],['OPEN'],['LISTEN'],['DO'],['FINISH'],['PICK','DO'],['OPEN'],['REVEAL','PICK'],['US'],['OPEN'],['CLOSE']]};
// Profundidad objetivo por puesto (misma longitud que la receta). x.5 = acepta por igual las dos profundidades vecinas.
const arcs={
 5:[1,2,1,1],
 10:[1,2,2,3,1,1],
 15:[1,2,2,2,3.5,1.5,2,1],
 20:[1,2,2,2,3,3.5,1.5,3,2,1],
 30:[1,2,2,1,2,2,3,1.5,2,2,3.5,2,2,1.5,1]};
// Desire nunca antes de este número de tarjetas jugadas (~35% del plan).
const desireMin=m=>Math.max(2,Math.ceil(recipes[m].length*.35));
const desireLimit=m=>({5:0,10:1,15:2,20:2,30:3}[m]);
const deepLimit=m=>m>=30?2:m>=15?1:0;
const DESIRE_GUARANTEE_MIN=15;
function seedRandom(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let n=Math.imul(seed^seed>>>15,1|seed);n=n+Math.imul(n^n>>>7,61|n)^n;return((n^n>>>14)>>>0)/4294967296;};}
// h = tarjetas JUGADAS (completas), en orden. keysUsed = claves ya vistas (incluye pasadas).
function sequenceOK(c,h,minutes,keysUsed){
 const prev=h.at(-1),before=h.at(-2),f=family(c);
 if(keysUsed?keysUsed.has(c.semantic_key):h.some(x=>x.semantic_key===c.semantic_key))return false;
 if(closing(c))return true; // el cierre siempre puede salir
 if(!prev&&privateCard(c))return false;
 if(prev&&before&&family(prev)===f&&family(before)===f)return false;
 if(prev&&f==='LISTEN'&&family(prev)==='LISTEN')return false;
 if(prev&&privateCard(prev)&&privateCard(c))return false;
 if(prev&&round(prev)&&round(c))return false;
 if(prev&&depth(prev)===4&&!regulationIds.includes(c.id))return false;
 if(prev&&before&&[prev,before].every(x=>depth(x)===3&&x.energy==='Emotional')&&!(depth(c)===1&&family(c)==='DO'))return false;
 if(depth(c)===4&&(!prev||![2,3].includes(depth(prev))||h.filter(x=>depth(x)===4).length>=deepLimit(minutes)))return false;
 if(desire(c)&&(h.length<desireMin(minutes)||!h.some(x=>depth(x)===2)||prev&&desire(prev)||h.some(x=>depth(x)===4)||h.filter(desire).length>=desireLimit(minutes)))return false;
 if(c.sensitive==='origin'&&(minutes===5||h.length<3||!h.some(x=>depth(x)===2)||h.some(x=>x.sensitive==='origin')||prev&&(depth(prev)===4||desire(prev))))return false;
 return true;
}
function createPlan(cards,minutes,seed=Date.now(),recent=[]){
 const random=seedRandom(seed),slots=recipes[minutes],maxDepth=minutes===5?2:minutes===10?3:4,limit=Math.floor(slots.length/3);
 const wantDesire=minutes>=DESIRE_GUARANTEE_MIN;
 const recentIds=new Set(recent.flat()),goalRecent={};for(const c of cards)if(recentIds.has(c.id))goalRecent[c.hidden_goal]=(goalRecent[c.hidden_goal]||0)+1;
 const order=cards.map(c=>({c,w:random()+(recentIds.has(c.id)?-2:0)-(goalRecent[c.hidden_goal]||0)*.08})).sort((a,b)=>b.w-a.w).map(x=>x.c);
 let nodes=0;
 function visit(plan,needDesire){
  if(++nodes>35000)return null;
  const i=plan.length;
  if(i===slots.length){
   if(needDesire&&!plan.some(desire))return null;
   return minutes<10||new Set(plan.map(c=>c.hidden_goal)).size>=3?plan:null;
  }
  const prev=plan.at(-1),needsReg=prev&&depth(prev)===4||plan.length>=2&&plan.slice(-2).every(c=>depth(c)===3&&c.energy==='Emotional');
  const keys=new Set(plan.map(c=>c.semantic_key));
  let pool=order.filter(c=>c.min_minutes<=minutes&&depth(c)<=maxDepth&&(!i?depth(c)===1:true)&&((slots[i].includes('CLOSE')&&closing(c))||(!slots[i].includes('CLOSE')&&!closing(c)&&(needsReg?regulationIds.includes(c.id):slots[i].includes(family(c))&&!regulationIds.includes(c.id))))&&(!(i<3)||depth(c)<=2)&&(!(i>=slots.length-2)||depth(c)<4));
  // curva de profundidad: primero las tarjetas más cercanas a la profundidad objetivo (el orden aleatorio se mantiene dentro de cada grupo)
  const target=arcs[minutes][i];pool.sort((a,b)=>Math.round(Math.abs(depth(a)-target)*2)-Math.round(Math.abs(depth(b)-target)*2));
  // si todavía falta la tarjeta Desire, probar primero las Desire en cuanto estén permitidas
  if(needDesire&&!plan.some(desire)&&i>=desireMin(minutes))pool=[...pool.filter(desire),...pool.filter(c=>!desire(c))];
  for(const c of pool){if(!sequenceOK(c,plan,minutes,keys))continue;if(minutes>=10&&!closing(c)&&plan.filter(x=>x.hidden_goal===c.hidden_goal).length>=limit)continue;const done=visit([...plan,c],needDesire);if(done)return done;}
  return null;
 }
 let plan=wantDesire?visit([],true):null;
 if(!plan){nodes=0;plan=visit([],false);}
 return plan||[];
}
function completedCards(s){return s.history.filter(x=>x.status==='complete').map(x=>s.byId[x.id]).filter(Boolean);}
function eligible(c,s,{isClosing=false}={}){
 const h=completedCards(s),lastShown=s.byId[s.history.at(-1)?.id],max=s.minutes===5?2:s.minutes===10?3:4;
 if(s.used.has(c.id)||s.keys.has(c.semantic_key)||c.min_minutes>s.minutes||depth(c)>Math.min(max,s.depthCeiling))return false;
 if(closing(c)!==isClosing)return false;
 if(isClosing)return true;
 if(s.minutes>=10&&h.filter(x=>x.hidden_goal===c.hidden_goal).length>=Math.floor(recipes[s.minutes].length/3))return false;
 if(!sequenceOK(c,h,s.minutes,s.keys))return false;
 if(desire(c)&&(s.permissions.desire===false||s.desireOff||s.desireCount>=desireLimit(s.minutes)||s.d4Seen||s.elapsedRatio>=.85))return false;
 if(depth(c)===4&&s.history.at(-1)?.status!=='complete')return false;
 if(c.safety==='Deep opt in'&&(s.permissions.deep===false||s.d4Count>=deepLimit(s.minutes)||s.elapsedRatio>=.85))return false;
 if(c.sensitive==='origin'&&(s.originOff||s.originCount>=1||!h.some(x=>depth(x)===2)))return false;
 if(s.elapsedRatio>=.85)return false;
 if(s.forceLight&&!(depth(c)<=2&&family(c)!==family(lastShown||{family:''})))return false;
 if(s.regulate&&!regulationIds.includes(c.id))return false;
 if(!s.regulate&&!s.forceLight&&regulationIds.includes(c.id))return false; // regulación solo cuando hace falta
 return true;
}
function pick(cards,s,preferred,isClosing=false,random=Math.random){
 let pool=cards.filter(c=>eligible(c,s,{isClosing}));
 if(!pool.length&&s.regulate){const reg=cards.filter(c=>regulationIds.includes(c.id)&&!s.used.has(c.id));pool=reg.filter(c=>!s.keys.has(c.semantic_key));if(!pool.length)pool=reg;}
 if(!pool.length&&isClosing)return lastResortClosing(cards,s);
 if(!pool.length)return null;
 const fav=pool.find(c=>c.id===preferred);if(fav)return fav;
 const recent=new Set(s.recent.flat()),goals={},fams={};s.history.forEach(x=>{const c=s.byId[x.id];goals[c.hidden_goal]=(goals[c.hidden_goal]||0)+1;fams[family(c)]=(fams[family(c)]||0)+1;});
 const last3=s.history.slice(-3).map(x=>family(s.byId[x.id]));
 const f=s.byId[preferred]&&family(s.byId[preferred]);
 // sin plan (relleno de tiempo): evitar familias recientes y favorecer las poco usadas
 const fill=!f;
 return pool.map(c=>({c,rank:random()+(f===family(c)?2:0)-(recent.has(c.id)?3:0)-(goals[c.hidden_goal]||0)*.65-(c.sensitive==='origin'&&s.originRecent?2:0)
  -(fill?last3.filter(x=>x===family(c)).length*.9+(fams[family(c)]||0)*.25:0)
  +(s.forceLight&&['WHO','FINISH','DO','US'].includes(family(c))?1.5:0)})).sort((a,b)=>b.rank-a.rank)[0].c;
}
// Cierre de emergencia: cualquier cierre que no se haya usado, ignorando todas las demás reglas.
function lastResortClosing(cards,s){return cards.find(c=>closing(c)&&!s.used.has(c.id))||null;}
const api={family,depth,closing,writing,privateCard,round,regulationIds,recipes,arcs,desireMin,desireLimit,deepLimit,createPlan,eligible,pick,sequenceOK,lastResortClosing,completedCards};scope.TryMeConnectEngine=api;if(typeof module!=='undefined')module.exports=api;
})(typeof window==='undefined'?globalThis:window);
