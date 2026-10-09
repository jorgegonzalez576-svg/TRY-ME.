(function(){
'use strict';
const C=window.TryMeRollCatalog,R=C.rules,catalog=C.cards;
const actions=[...Object.keys(C.categories),'anhelo'],styles=Object.keys(C.styles),filters=C.filters.map(f=>f.key);
const phases=['ready','choose','covered','revealed','playing','progress','exhausted','end'];
const allFilters=()=>C.filters.map(f=>f.defaultOn);
const anatomyValues=R.anatomy.values;
function random(n){if(!Number.isInteger(n)||n<1)throw new Error('Invalid random range');if(!globalThis.crypto?.getRandomValues)return Math.floor(Math.random()*n);const max=Math.floor(4294967296/n)*n,a=new Uint32Array(1);do{globalThis.crypto.getRandomValues(a);}while(a[0]>=max);return a[0]%n;}
function create(names,level,mode,total,preferences={}){return {
 version:4,names:names.map(n=>String(n).trim().slice(0,24)),level,mode,total,initialTotal:total,
 block:total?R.progressive[String(total)][0]:R.progressive.freeOfferEveryTurns,extension:false,
 turn:1,phase:'ready',action:null,style:null,chosen:null,cardId:null,used:[],rejected:[],seconds:0,paused:false,consent:[false,false],
 filters:(preferences.filters||[allFilters(),allFilters()]).map(f=>f.slice()),anatomy:(preferences.anatomy||[R.anatomy.default,R.anatomy.default]).slice(),rerolls:[0,0],receivers:[0,0]
};}
function roles(s,style=s.style){const roller=(s.turn-1)%2,reverse=style==='reves';return {roller,giver:reverse?roller:1-roller,receiver:reverse?1-roller:roller};}
function card(s){return catalog.find(c=>c.id===s.cardId);}
function cardSeconds(c,style){if(c?.seconds==null)return null;const rule=R.slowStyle;return style==='lento'?Math.round(c.seconds*rule.timeMultiplier/rule.roundToSeconds)*rule.roundToSeconds:c.seconds;}
function duration(s){return cardSeconds(card(s),s.style)||0;}
function cardText(s,lang){const c=card(s);if(!c)return '';return (c.variants?.[s.anatomy[roles(s).receiver]]||c.text)[lang];}
function styleLine(s,lang){if(!s.style||s.style==='reves')return '';return (C.styleOverrides[(s.chosen||s.action)+'.'+s.style]||C.styles[s.style].line)[lang];}
function blocked(action,style){return R.blockedCombos.some(([a,b])=>a===action&&b===style);}
function filterOK(s,c){return c.filters.every(f=>s.filters.every(p=>p[filters.indexOf(f)]===true));}
function compatible(s,c,style=s.style){return !c.avoidStyles.includes(style)&&filterOK(s,c)&&(!c.anatomy||c.anatomy.includes(s.anatomy[roles(s,style).receiver]))&&!blocked(c.category,style);}
function pool(s,action,style){if(blocked(action,style))return [];const compatibleCard=c=>c.category===action&&!s.rejected.includes(c.id)&&compatible(s,c,style),eligible=c=>!s.used.includes(c.id)&&compatibleCard(c);let list=catalog.filter(c=>c.level===s.level&&eligible(c));
 // In free play only, recycle the current category and level before falling back.
 // Queries stay pure; pickCard commits the new cycle when a card is selected.
 if(!s.initialTotal&&!list.length)list=catalog.filter(c=>c.level===s.level&&compatibleCard(c));
 for(let level=s.level-1;list.length<R.fallbackToLowerLevelIfFewerThan&&level>=0;level--)list.push(...catalog.filter(c=>c.level===level&&eligible(c)));return list;}
function reverseOK(s){const balance=R.roleBalance;if(!balance.applyToLengths.includes(s.initialTotal?String(s.initialTotal):'free'))return true;const r=roles(s,'reves');return s.receivers[r.receiver]-s.receivers[r.giver]<balance.maxDifference;}
function options(s,style=s.style){return actions.slice(0,-1).filter(a=>pool(s,a,style).length);}
function allowedStyles(s,action){return styles.filter(style=>(style!=='reves'||reverseOK(s))&&(action==='anhelo'?options(s,style).length:pool(s,action,style).length));}
function pickCard(s){const action=s.chosen||s.action,list=pool(s,action,s.style);if(!list.length){s.cardId=null;s.phase='exhausted';return null;}const c=list[random(list.length)];
 if(!s.initialTotal&&c.level===s.level&&s.used.includes(c.id))s.used=s.used.filter(id=>{const used=catalog.find(x=>x.id===id);return s.rejected.includes(id)||used.category!==action||used.level!==s.level;});
 s.cardId=c.id;if(!s.used.includes(c.id))s.used.push(c.id);s.seconds=duration(s);s.phase='covered';return c;}
function select(s){const available=actions.filter(a=>allowedStyles(s,a).length);s.paused=false;s.chosen=null;s.cardId=null;s.seconds=0;if(!available.length){s.action=null;s.style=null;s.phase='exhausted';return true;}s.action=available[random(available.length)];const possible=allowedStyles(s,s.action);s.style=possible[random(possible.length)];if(s.action==='anhelo')s.phase='choose';else pickCard(s);return true;}
function roll(s){return s.phase==='ready'&&select(s);}
function choose(s,action){if(s.phase!=='choose'||!options(s).includes(action))return false;s.chosen=action;pickCard(s);return true;}
function remaining(s,person=roles(s).roller){const a=R.rerolls.allowance;const allowance=s.initialTotal?a[String(s.initialTotal)]:a.free.amount*(1+Math.floor((s.turn-1)/a.free.every));return Math.max(0,allowance-s.rerolls[person]);}
function totalRemaining(s){return remaining(s,0)+remaining(s,1);}
function reroll(s,person){if(s.phase!=='revealed'||![0,1].includes(person)||remaining(s,person)<1)return false;if(s.cardId&&!s.rejected.includes(s.cardId))s.rejected.push(s.cardId);s.rerolls[person]++;return select(s);}
function canEnd(s){return s.phase==='playing'&&(!duration(s)||duration(s)-s.seconds>=duration(s)*R.endTurn.timedCardsShowAfterFraction);}
function reset(s){s.action=null;s.style=null;s.chosen=null;s.cardId=null;s.seconds=0;s.paused=false;s.consent=[false,false];}
function next(s){if(!canEnd(s))return false;s.receivers[roles(s).receiver]++;s.turn++;reset(s);if(s.total&&s.turn>s.total)s.phase='end';else if(!s.extension&&s.mode==='progressive'&&s.level<2&&(s.turn-1)%s.block===0)s.phase='progress';else s.phase='ready';return true;}
function lower(s){if(s.level<1||s.phase==='end')return false;s.level--;reset(s);s.phase='ready';return true;}
function extend(s){if(s.phase!=='end'||!s.total)return false;s.total+=R.continuePlayingAddsTurns;s.extension=true;s.phase='ready';return true;}
function valid(s){if(!s||s.version!==4||!Array.isArray(s.names)||s.names.length!==2||!s.names.every(n=>typeof n==='string'&&n.trim()&&n.length<=24))return false;
 if(!Number.isInteger(s.level)||s.level<0||s.level>2||!['fixed','progressive'].includes(s.mode)||![0,6,12].includes(s.initialTotal)||!Number.isInteger(s.total)||s.total<0||s.total>10000||!Number.isInteger(s.turn)||s.turn<1||s.turn>10000||s.total&&s.turn>s.total+1)return false;
 if(s.block!==(s.initialTotal?R.progressive[String(s.initialTotal)][0]:R.progressive.freeOfferEveryTurns)||typeof s.extension!=='boolean'||!phases.includes(s.phase)||typeof s.paused!=='boolean')return false;
 if(!Array.isArray(s.filters)||s.filters.length!==2||!s.filters.every(f=>Array.isArray(f)&&f.length===filters.length&&f.every(v=>typeof v==='boolean'))||!Array.isArray(s.anatomy)||s.anatomy.length!==2||!s.anatomy.every(a=>anatomyValues.includes(a)))return false;
 if(!['rerolls','receivers'].every(k=>Array.isArray(s[k])&&s[k].length===2&&s[k].every(n=>Number.isInteger(n)&&n>=0&&n<=10000)))return false;
 if(!Array.isArray(s.used)||s.used.length>catalog.length||new Set(s.used).size!==s.used.length||!s.used.every(id=>catalog.some(c=>c.id===id))||!Number.isFinite(s.seconds)||s.seconds<0||s.seconds>Math.max(...catalog.map(c=>cardSeconds(c,'lento')||0)))return false;
 if(!Array.isArray(s.rejected)||s.rejected.length>catalog.length||new Set(s.rejected).size!==s.rejected.length||!s.rejected.every(id=>s.used.includes(id)))return false;
 if(!Array.isArray(s.consent)||s.consent.length!==2||!s.consent.every(v=>typeof v==='boolean')||!(s.action===null||actions.includes(s.action))||!(s.style===null||styles.includes(s.style))||!(s.chosen===null||actions.slice(0,-1).includes(s.chosen)))return false;
 if(['covered','revealed','playing'].includes(s.phase)){const c=card(s);if(!c||c.category!==(s.chosen||s.action)||c.level>s.level||!styles.includes(s.style)||!compatible(s,c)||!s.used.includes(c.id)||s.seconds>duration(s))return false;}return s.phase!=='choose'||s.action==='anhelo'&&styles.includes(s.style)&&options(s).length>0;
}
// Keep valid v2 paused sessions: map labels to stable keys, add defaults for body and anal.
function migrate(old){if(!old||![2,3].includes(old.version))return null;try{
 if(old.version===3){const s={...old,version:4,rejected:[]};return valid(s)?s:null;}
 const s={...old,version:4,rejected:[],anatomy:[R.anatomy.default,R.anatomy.default],filters:old.filters.map(f=>[...f,false])};
 const as=['Saborear','Provocar','Acariciar','Delinear','Esculpir','Anhelo'],ss=['Lento','Sutil','A ciegas','En silencio','En oleadas','Al revés'];
 s.action=old.action===null?null:actions[as.indexOf(old.action)];s.chosen=old.chosen===null?null:actions[as.indexOf(old.chosen)];s.style=old.style===null?null:styles[ss.indexOf(old.style)];
 if(['covered','revealed','playing'].includes(s.phase))s.seconds=Math.min(s.seconds,duration(s));return valid(s)?s:null;
 }catch{return null;}}
window.TryMeRollEngine=Object.freeze({actions,styles,filters,allFilters,anatomyValues,random,create,roles,roll,choose,next,lower,extend,valid,migrate,card,duration,cardText,styleLine,pool,options,remaining,totalRemaining,reroll,canEnd,reverseOK});
})();
