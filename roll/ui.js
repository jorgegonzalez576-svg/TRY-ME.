(function(){
'use strict';
const app=window.tryMeApp,E=window.TryMeRollEngine,C=window.TryMeRollCatalog,root=document.getElementById('tryme-preview');
const phone=root.querySelector('.tm-phone'),main=root.querySelector('#tm-content'),menuButton=root.querySelector('[data-action="rulesmenu"]');
const key='tryme-roll-session-v1';
// Keep the ambient layer outside the scrolling content so turn changes do not restart it.
const room=document.createElement('div');room.className='rl-room';room.hidden=true;room.setAttribute('aria-hidden','true');room.innerHTML='';const legacyRoomDrawing='<div class="rl-room-drawing"><div class="tm-scene-wall"></div><div class="tm-scene-panels"></div><div class="tm-scene-floor"></div><div class="tm-scene-window"></div><div class="tm-scene-pendant"></div><div class="tm-scene-plant"><span></span><span></span><span></span></div><div class="tm-scene-rug"></div><div class="rl-room-table-leg rl-room-table-leg-left"></div><div class="rl-room-table-leg rl-room-table-leg-right"></div><div class="tm-scene-table"><div class="rl-room-die rl-room-die-red"><i></i><i></i><i></i></div><div class="rl-room-die rl-room-die-slate"><i></i><i></i><i></i></div></div></div>';phone.insertBefore(room,main);
const copy={
 "es": {
  "swipeHint": "Desliza hacia arriba para lanzar",
  "games": "Juegos",
  "menu": "Menú",
  "prepare": "Preparar",
  "setup": "Preparar Roll",
  "rhythm": "A su ritmo.",
  "name": "Nombre",
  "level": "Nivel de inicio",
  "mode": "Modalidad",
  "fixed": "Nivel fijo",
  "progressive": "Progresiva",
  "length": "Duración",
  "turns": "turnos",
  "free": "Juego libre",
  "startGame": "Empezar Roll",
  "cancel": "Volver a la partida",
  "rules": "Reglas de Roll",
  "settings": "Ajustes de Try Me",
  "levels": [
   "Anticipación",
   "Sensual",
   "Atrevido"
  ],
  "actions": [
   "Saborear",
   "Provocar",
   "Acariciar",
   "Delinear",
   "Esculpir",
   "Anhelo"
  ],
  "styles": [
   "Lento",
   "Sutil",
   "A ciegas",
   "En silencio",
   "En oleadas",
   "Al revés"
  ],
  "action": "Acción",
  "style": "Estilo",
  "turn": "Turno {n} de {total}",
  "freeTurn": "Turno {n}",
  "rollIntro": "El azar empieza contigo",
  "rolling": "Los dados deciden",
  "yourRoll": "{name}, te toca lanzar.",
  "mystery": "Dos palabras. Una sorpresa para los dos.",
  "expectation": "Quien lanza recibe.",
  "reverseHint": "Al revés puede cambiar los planes.",
  "roll": "Lanzar los dados",
  "toss": "Lanzando…",
  "choose": "Anhelo. {name}, ¿qué se te antoja?",
  "chooseNote": "El estilo sigue siendo {estilo}. Lo demás es sorpresa.",
  "reverse": "Cambio de planes, {name}.",
  "reverseNote": "Esta vez te toca dar.",
  "roles": "{giver} da · {receiver} recibe",
  "reveal": "Revelar jugada",
  "cardBack": "Tu próxima jugada está dentro.",
  "atPace": "A su ritmo",
  "start": "Empezar",
  "skip": "Otra tirada",
  "next": "Seguir",
  "pause": "Pausar",
  "continue": "Continuar",
  "endTurn": "Terminar turno",
  "up": "¿Suben a {level}?",
  "both": "Los dos deciden cómo sigue la partida.",
  "confirm": "sí",
  "stay": "Seguimos aquí",
  "complete": "Partida completa",
  "endTitle": "Turno {n} de {n}. ¿Una ronda más?",
  "endText": "Pueden seguir cuatro turnos en el nivel actual.",
  "extend": "Seguir jugando (+4)",
  "finish": "Terminar",
  "saved": "Tu partida está en pausa.",
  "savedNote": "Retomen donde la dejaron o comiencen una nueva.",
  "resume": "Continuar partida",
  "new": "Nueva partida",
  "paused": "A su ritmo.",
  "pausedNote": "La jugada y el tiempo se quedan aquí.",
  "close": "Cerrar",
  "lower": "Bajar un nivel",
  "lowerReady": "Bajar un nivel",
  "lowerNote": "Listo. Siguen en {level}.",
  "saveExit": "Guardar y volver a Juegos",
  "restartTitle": "¿Preparar una nueva partida?",
  "restartNote": "La partida actual se reemplazará al empezar la nueva.",
  "restart": "Preparar nueva partida",
  "finishTitle": "¿Terminar Roll?",
  "finishNote": "Se borrará esta partida guardada en el dispositivo.",
  "confirmFinish": "Terminar partida",
  "keep": "Seguir jugando",
  "storage": "No se pudo guardar la partida en este dispositivo. Mantenla abierta para continuar.",
  "remaining": "Tiempo restante",
  "noScore": "Sin puntos ni competencia.",
  "safety": "Pueden pausar, bajar de nivel o terminar en cualquier momento.",
  "rules1": "Lancen los dos dados. La carta revela la acción y la zona; el estilo aparece en una línea aparte. No se conserva ningún dado.",
  "rules2": "Quien lanza recibe; Al revés cambia los roles solo ese turno. En 12 turnos y juego libre, el juego evita Al revés cuando aumentaría una diferencia de 3 entre quienes reciben. En 6 turnos, el azar es puro.",
  "rules3": "Anhelo permite que quien recibe elija la categoría. Esculpir no se combina con Sutil. Ambos confirman que quieren jugar antes de empezar.",
  "rules4": "En Progresiva se ofrece subir cada 2 turnos en partidas de 6, cada 4 en partidas de 12 y cada 5 en juego libre. Subir pide dos síes; bajar basta con uno.",
  "rules5": "Otra tirada vuelve a lanzar ambos dados con la misma persona: 1 por persona en 6 turnos, 2 en 12 y 1 adicional cada 6 turnos en juego libre. Las cartas descartadas no vuelven.",
  "rules6": "El temporizador empieza al tocar Empezar y se puede pausar. Lento añade un 50 % al tiempo, redondeado a 5 segundos. Libre no usa temporizador. La partida se guarda en este dispositivo. Seguir jugando añade 4 turnos al nivel actual.",
  "doubleReverse": "Doble giro: {lanza} da y {recibe} elige.",
  "back": "Volver",
  "adult": "Ambos somos mayores de 18 años.",
  "empty": "No quedan jugadas compatibles.",
  "emptyNote": "Las cartas usadas y descartadas no se repiten. Pueden bajar un nivel o preparar otra partida.",
  "updated": "Roll tiene un catálogo y reglas nuevos. Preparen una nueva partida para usar esta versión.",
 },
 "en": {
  "swipeHint": "Swipe up to throw",
  "games": "Games",
  "menu": "Menu",
  "prepare": "Prepare",
  "setup": "Prepare Roll",
  "rhythm": "At your pace.",
  "name": "Name",
  "level": "Starting level",
  "mode": "Mode",
  "fixed": "Fixed level",
  "progressive": "Progressive",
  "length": "Length",
  "turns": "turns",
  "free": "Free play",
  "startGame": "Start Roll",
  "cancel": "Back to the game",
  "rules": "Roll rules",
  "settings": "Try Me settings",
  "levels": [
   "Anticipation",
   "Sensual",
   "Daring"
  ],
  "actions": [
   "Savor",
   "Tease",
   "Caress",
   "Trace",
   "Sculpt",
   "Longing"
  ],
  "styles": [
   "Slow",
   "Subtle",
   "Eyes closed",
   "In silence",
   "In waves",
   "Reversed"
  ],
  "action": "Action",
  "style": "Style",
  "turn": "Turn {n} of {total}",
  "freeTurn": "Turn {n}",
  "rollIntro": "The surprise starts with you",
  "rolling": "The dice decide",
  "yourRoll": "{name}, your turn to roll.",
  "mystery": "Two words. One surprise for you both.",
  "expectation": "The person who rolls receives.",
  "reverseHint": "Reversed can change the plans.",
  "roll": "Roll the dice",
  "toss": "Rolling…",
  "choose": "Longing. {name}, what are you in the mood for?",
  "chooseNote": "The style is still {estilo}. The rest is a surprise.",
  "reverse": "Change of plans, {name}.",
  "reverseNote": "This time, you give.",
  "roles": "{giver} gives · {receiver} receives",
  "reveal": "Reveal your play",
  "cardBack": "Your next play is inside.",
  "atPace": "At your pace",
  "start": "Start",
  "skip": "Roll again",
  "next": "Next",
  "pause": "Pause",
  "continue": "Continue",
  "endTurn": "End turn",
  "up": "Move up to {level}?",
  "both": "You both decide how the game continues.",
  "confirm": "yes",
  "stay": "Stay here",
  "complete": "Session complete",
  "endTitle": "Turn {n} of {n}. One more round?",
  "endText": "Continue for four turns at the current level.",
  "extend": "Keep playing (+4)",
  "finish": "Finish",
  "saved": "Your game is paused.",
  "savedNote": "Pick up where you left off or start a new game.",
  "resume": "Continue game",
  "new": "New game",
  "paused": "At your pace.",
  "pausedNote": "Your play and time will be waiting here.",
  "close": "Close",
  "lower": "Lower one level",
  "lowerReady": "Lower one level",
  "lowerNote": "All set. You are now at {level}.",
  "saveExit": "Save and return to Games",
  "restartTitle": "Prepare a new game?",
  "restartNote": "The current game will be replaced when you start the new one.",
  "restart": "Prepare new game",
  "finishTitle": "Finish Roll?",
  "finishNote": "The saved game on this device will be deleted.",
  "confirmFinish": "Finish game",
  "keep": "Keep playing",
  "storage": "Could not save the game on this device. Keep it open to continue.",
  "remaining": "Time remaining",
  "noScore": "No points or competition.",
  "safety": "You can pause, lower the level or finish at any time.",
  "rules1": "Roll both dice. The card reveals the action and body area; the style appears on a separate line. Neither die is held.",
  "rules2": "The roller receives; Reversed swaps roles for that turn. In 12-turn games and free play, Reversed cannot enlarge an existing receiver-count gap of 3. In 6 turns, chance is unrestricted.",
  "rules3": "Longing lets the receiver choose the category. Sculpt cannot combine with Subtle. Both players confirm they want to play before starting.",
  "rules4": "Progressive mode offers an increase every 2 turns in a 6-turn game, every 4 in a 12-turn game and every 5 in free play. Both must agree to increase; either can lower the level.",
  "rules5": "Roll again rerolls both dice with the same player: 1 per person in 6 turns, 2 in 12 and 1 additional every 6 turns in free play. Discarded cards never return.",
  "rules6": "The timer starts when you tap Start and can be paused. Slow adds 50% to the time, rounded to 5 seconds. Free cards have no timer. Games are saved on this device. Keep playing adds 4 turns at the current level.",
  "doubleReverse": "Double twist: {lanza} gives and {recibe} chooses.",
  "back": "Back",
  "adult": "We are both 18 or older.",
  "empty": "No compatible plays remain.",
  "emptyNote": "Used and discarded cards never repeat. Lower the level or prepare a new game.",
  "updated": "Roll has a new catalog and new rules. Prepare a new game to use this version.",
 }
};
Object.assign(copy.es,{consentTitle:'Consentimiento mutuo',consentNote:'Cada quien confirma que quiere participar. Pueden pausar, bajar de nivel o terminar en cualquier momento.',consentYes:'Sí, quiero jugar'});
Object.assign(copy.en,{consentTitle:'Mutual consent',consentNote:'Each person confirms they want to participate. You can pause, lower the level or finish at any time.',consentYes:'Yes, I want to play'});
// Catalog-owned labels, styles, and new interface copy stay synchronized with its data.
for(const language of C.languages){
 copy[language].levels=C.levels.map(l=>l.label[language]);
 copy[language].actions=[...Object.values(C.categories).map(c=>c[language]),copy[language].actions[5]];
 copy[language].styles=Object.values(C.styles).map(s=>s.label[language]);
 for(const [key,value] of Object.entries(C.ui))if(typeof value[language]==='string')copy[language][key]=value[language];
}
Object.assign(copy.es,{preferences:'Preferencias de cada persona',rules3:'Anhelo permite elegir la categoría. Esculpir no se combina con Sutil. Las cartas respetan las preferencias de ambos y el cuerpo de quien recibe.',rules5:'Otra tirada solo aparece después de revelar y antes de Empezar. Elijan quién gasta una: 1 por persona en 6 turnos, 2 en 12 y 1 adicional cada 6 turnos en juego libre. Se vuelven a lanzar ambos dados con la misma persona. La carta rechazada no vuelve.',rules6:'El temporizador empieza al tocar Empezar. Pueden pausar en cualquier momento y terminar el turno a partir de la mitad del tiempo. Lento suma un 50 %, redondeado a 5 segundos. Libre no tiene temporizador. La partida se guarda en este dispositivo. Seguir jugando añade 4 turnos al nivel actual.'});
Object.assign(copy.en,{preferences:'Each person’s preferences',rules3:'Longing lets the receiver choose a category. Sculpt cannot combine with Subtle. Cards respect both players’ preferences and the receiver’s body.',rules5:'Roll again only appears after revealing and before Start. Choose who spends a reroll: 1 each in 6 turns, 2 in 12, and 1 additional every 6 turns in free play. Both dice reroll with the same roller. Rejected cards never return.',rules6:'The timer starts when you tap Start. Pause at any time; End turn appears halfway through the time. Slow adds 50%, rounded to 5 seconds. Free cards have no timer. Games are saved on this device. Keep playing adds 4 turns at the current level.'});
Object.assign(copy.es,{first:'Empieza {name}',categoryHints:['Labios y lengua','Hacer esperar','Manos que envuelven','Un dedo que traza','Masaje con presión'],levelDescriptions:['Besos, caricias y masajes, casi siempre por encima de la ropa. Sin zonas íntimas.','Quitar ropa. Pecho, glúteos y caricias en zonas íntimas, sobre todo por encima de la ropa.','Sexo oral, masturbación, dedos y lengua por todo el cuerpo. Sin penetración con el pene.'],fewCards:'Con estas preferencias, {level} tendrá pocas cartas propias y usará algunas de niveles anteriores.',wrapTitle:'Cierre',wrapText:'Antes de soltar el teléfono, quédense abrazados un minuto. Después, cada quien diga en una frase qué fue lo que más disfrutó.',ruleTitles:['Cómo se juega','El dado de acción','El dado de estilo','Si una carta no les va','Niveles','Siempre'],rules1:'Quien tiene el turno lanza los dos dados: uno dice qué hacer y el otro cómo hacerlo. Por lo general, quien lanza recibe. Revelen la carta, toquen Empezar y dejen el teléfono a un lado: suena un aviso cuando se acaba el tiempo. Después lanza la otra persona.',rules2:'Saborear: labios y lengua. Provocar: hacer esperar. Acariciar: manos que envuelven. Delinear: un dedo que traza. Esculpir: masaje con presión. Anhelo: quien recibe elige la categoría.',rules3:'Lento, Sutil, A ciegas, En silencio y En oleadas cambian cómo se hace. Al revés cambia los papeles: esta vez da quien lanzó.',rules4:'Toquen Otra tirada antes de Empezar. Cada quien tiene pocas: 1 en partidas de 6 turnos, 2 en partidas de 12 y una más cada 6 turnos en juego libre. La carta descartada no vuelve.',rules5:'Anticipación, Sensual y Atrevido. En Progresiva, el juego les ofrece subir de vez en cuando, y suben solo si los dos dicen que sí. Para bajar basta con que uno quiera, en cualquier momento, desde el Menú.',rules6:'Sin puntos ni competencia. Las cartas respetan las preferencias de los dos. Pueden pausar o terminar cuando quieran.'});
Object.assign(copy.en,{first:'{name} goes first',categoryHints:['Lips and tongue','Make them wait','Enveloping hands','One finger tracing','Massage with pressure'],levelDescriptions:['Kisses, caresses and massages, mostly over clothes. No intimate areas.','Removing clothes. Chest, buttocks and caresses on intimate areas, mostly over clothes.','Oral sex, masturbation, fingers and tongue all over the body. No penile penetration.'],fewCards:'With these preferences, {level} has few cards of its own and will use some from earlier levels.',wrapTitle:'Wrap-up',wrapText:"Before you put the phone down, stay in each other's arms for a minute. Then each of you says, in one sentence, what you enjoyed most.",ruleTitles:['How to play','The action die','The style die',"If a card isn't for you",'Levels','Always'],rules1:"Whoever's turn it is rolls both dice: one says what to do, the other how to do it. Usually, the roller receives. Reveal the card, tap Start and put the phone aside: a sound plays when time is up. Then the other person rolls.",rules2:'Savor: lips and tongue. Tease: make them wait. Caress: enveloping hands. Trace: one finger tracing. Sculpt: massage with pressure. Longing: the receiver picks the category.',rules3:"Slow, Subtle, Eyes closed, In silence and In waves change how it's done. Reversed swaps roles: this time the roller gives.",rules4:'Tap Roll again before Start. Each of you has only a few: 1 in 6-turn games, 2 in 12-turn games and one more every 6 turns in free play. A discarded card never comes back.',rules5:'Anticipation, Sensual and Daring. In Progressive mode the game offers to move up now and then, and you only go up if you both say yes. Either of you can lower the level at any time from the Menu.',rules6:'No points, no competition. Cards respect both of your preferences. Pause or finish whenever you want.'});
Object.assign(copy.es,{hold:'Mantén para agitar, suelta para lanzar',release:'Suelta para lanzar',shaking:'Agitando…',tapHint:'Usa el botón para lanzar'});
Object.assign(copy.en,{hold:'Hold to shake, release to throw',release:'Release to throw',shaking:'Shaking…',tapHint:'Use the button to roll'});
Object.assign(copy.en,{trayIntro:'Two dice. A little anticipation.',trayConsent:'Both in?',trayContinue:'Continue →',trayFooter:'TWO YESSES. YOUR OWN PACE.'});
Object.assign(copy.es,{trayIntro:'Dos dados. Un poco de anticipación.',trayConsent:'¿Ambos quieren jugar?',trayContinue:'Continuar →',trayFooter:'DOS SÍES. A SU PROPIO RITMO.'});
let active=false,s=null,resumeCandidate=null,view='setup',busy=false,deadline=0,clock=null,dialogMode='',pausedAway=false,storageOK=true,epoch=0,draft=null,legacyNotice=false,notice='',resumeAfter=null;
let wakeLock=null,wakeWanted=false,wakeRequest=null,cueCtx=null;
const dialog=document.createElement('dialog');dialog.className='tm-rules-menu rl-dialog';dialog.id='rl-dialog';dialog.setAttribute('aria-labelledby','rl-dialog-title');root.appendChild(dialog);
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const lang=()=>app.language==='es'?'es':'en',words=()=>copy[lang()];
const t=(k,vars={})=>Object.entries(vars).reduce((v,[a,b])=>v.replaceAll('{'+a+'}',String(b)),words()[k]||k);
const labelA=a=>words().actions[E.actions.indexOf(a)],labelS=a=>words().styles[E.styles.indexOf(a)];
const sharedAnatomy=()=>app.profileAnatomies.map(a=>({penis:'pene',vulva:'vulva',unspecified:'nd'}[a]||'nd'));
const rememberAnatomy=values=>{app.profileAnatomies=values.map(a=>({pene:'penis',vulva:'vulva',nd:'unspecified'}[a]||'unspecified'));};
const ro=()=>{const r=E.roles(s);return {roller:s.names[r.roller],giver:s.names[r.giver],receiver:s.names[r.receiver]};};
const button=(txt,a,secondary=false,disabled=false)=>`<button type="button" class="rl-button ${secondary?'secondary ':''}" data-rl="${a}" ${disabled?'disabled':''}>${esc(txt)}</button>`;
async function keepAwake(on){wakeWanted=on&&document.visibilityState!=='hidden';let pending=null;try{
 if(!wakeWanted){const lock=wakeLock;wakeLock=null;if(lock)await lock.release();return;}
 if(wakeLock||wakeRequest||!navigator.wakeLock)return;
 pending=navigator.wakeLock.request('screen');wakeRequest=pending;const lock=await pending;
 if(!wakeWanted){await lock.release();return;}
 wakeLock=lock;lock.addEventListener('release',()=>{if(wakeLock===lock)wakeLock=null;});
 }catch{/* Unsupported or denied: normal timer and pause behavior remain. */}finally{if(pending&&wakeRequest===pending)wakeRequest=null;}}
function primeCue(){if(!app.soundEnabled)return;try{const A=window.AudioContext||window.webkitAudioContext;if(A&&!cueCtx)cueCtx=new A();cueCtx?.resume?.()?.catch?.(()=>{});}catch{}}
function timeUpCue(){if(!app.soundEnabled)return;try{navigator.vibrate?.([180,90,180]);}catch{}try{if(!cueCtx)return;const t=cueCtx.currentTime;[0,.35].forEach((d,i)=>{const o=cueCtx.createOscillator(),g=cueCtx.createGain();o.type='sine';o.frequency.value=i?784:659;g.gain.setValueAtTime(.0001,t+d);g.gain.exponentialRampToValueAtTime(.12,t+d+.04);g.gain.exponentialRampToValueAtTime(.0001,t+d+.8);o.connect(g).connect(cueCtx.destination);o.start(t+d);o.stop(t+d+.85);});}catch{}}
function stop(){clearInterval(clock);clock=null;deadline=0;keepAwake(false);}
function updateTime(){if(!s||!deadline)return;s.seconds=Math.max(0,Math.ceil((deadline-Date.now())/1000));if(s.seconds!==rlLastSec){rlLastSec=s.seconds;if(s.seconds>0&&s.seconds<=5){rlPulseClock();rlBuzz(6);rlSfx('tick');}}const v=main.querySelector('.rl-timer-value');if(v)v.textContent=format(s.seconds);const bar=main.querySelector('.rl-timer-track span');if(bar)bar.style.width=s.seconds/E.duration(s)*100+'%';save();if(!s.seconds){stop();timeUpCue();render();rlPulseEnd();}else if(E.canEnd(s)&&!main.querySelector('[data-rl="next"]'))render();}
function pauseTime(){if(deadline)updateTime();stop();if(s?.phase==='playing')s.paused=true;save();}
function startTime(){if(!s||s.phase!=='playing'||s.paused||s.seconds===0)return;clearInterval(clock);deadline=Date.now()+s.seconds*1000;clock=setInterval(updateTime,250);keepAwake(true);}
function save(){if(!s||s.phase==='end'||!E.valid(s))return;try{localStorage.setItem(key,JSON.stringify(s));storageOK=true;}catch{storageOK=false;}}
function read(){try{const saved=JSON.parse(localStorage.getItem(key)||'null');const candidate=E.valid(saved)?saved:E.migrate(saved);legacyNotice=!!saved&&!candidate;return candidate&&candidate.phase!=='end'?candidate:null;}catch{return null;}}
function clearSaved(){try{localStorage.removeItem(key);}catch{storageOK=false;}}
function format(n){return Math.floor(n/60)+':'+String(n%60).padStart(2,'0');}
function die(word,type,compact=false){const pool=type==='style'?E.styles:E.actions,front=pool.includes(word)?(type==='style'?labelS(word):labelA(word)):word;
 const faces=[front,...pool.filter(w=>w!==word).map(w=>type==='style'?labelS(w):labelA(w))].slice(0,6),pos=['front','right','top','left','bottom','back'];
 return `<div class="rl-die rl-solid ${type==='style'?'style':''}" role="img" aria-label="${esc((type==='style'?t('style'):t('action'))+': '+front)}"><div class="rl-ground-shadow" aria-hidden="true"></div><div class="rl-impact" aria-hidden="true"></div><div class="rl-flight"><div class="rl-squash"><div class="rl-cube"><div class="rl-core" aria-hidden="true"></div><div class="rl-core core-y" aria-hidden="true"></div><div class="rl-core core-x" aria-hidden="true"></div>${faces.map((w,i)=>`<div class="rl-face ${pos[i]}" aria-hidden="true"><span class="rl-pip"></span><span class="rl-face-label">${esc(w)}</span><span class="rl-pip bottom"></span></div>`).join('')}</div></div></div></div>`;
}
function syncCubes(){main.querySelectorAll('.rl-solid').forEach(d=>d.style.setProperty('--edge',Math.round(d.clientWidth*(d.closest('.rl-mini-dice') ? .72 : .68))+'px'));}
function fill(text){const r=ro();return String(text||'').replaceAll('{da}',r.giver).replaceAll('{recibe}',r.receiver).replaceAll('{lanza}',r.roller);}
function message(){return fill(E.cardText(s,lang()));}
function styleLine(){return fill(E.styleLine(s,lang()));}
function rerollButton(){return s.phase==='revealed'&&E.totalRemaining(s)>0?button(t('rerollButton',{n:E.totalRemaining(s)}),'reroll',true):'';}
function compact(){return `<div class="rl-mini-dice">${die(s.action,'action',true)}<span class="rl-plus">+</span>${die(s.style,'style',true)}</div>`;}
function reversal(){return s.style==='reves'?`<div class="rl-reverse"><strong>${esc(fill(C.styles.reves.banner[lang()]))}</strong></div>`:'';}
function card(){const c=E.card(s),flipped=['revealed','playing'].includes(s.phase),r=ro();
 const idx=(cls,type,word)=>`<div class="rl-idx ${cls}" aria-hidden="true"><span class="rl-mdie ${type==='style'?'style':''}"></span><b>${esc(word)}</b></div>`;
 return `<div class="rl-card-scene"><div class="rl-card ${flipped?'flipped':''}"><div class="rl-card-side rl-card-back" aria-hidden="${flipped}" ${flipped?'hidden':''}><i class="rl-sheen" aria-hidden="true"></i><div class="rl-emblem" aria-hidden="true"></div><div class="rl-card-brand">Roll</div><div class="rl-card-back-note">${esc(t('cardBack'))}</div></div><div class="rl-card-side rl-card-front" data-level="${c.level}" aria-hidden="${!flipped}"><div class="rl-frame" aria-hidden="true"></div>${idx('tl','action',labelA(s.action))}${idx('br','style',labelS(s.style))}<div class="rl-card-kicker"><span>${esc(words().levels[c.level])} · Roll</span></div><p class="rl-card-copy" lang="${phone.lang}">${esc(message())}</p>${styleLine()?`<p class="rl-card-style">${esc(styleLine())}</p>`:''}<div class="rl-card-bottom"><span>${esc(t('roles',r))}</span><span>${E.duration(s)?E.duration(s)+' s':esc(t('atPace'))}</span></div></div></div></div>`;}
function timer(){const c=E.card(s);return `<div class="rl-timer"><div class="rl-timer-value" aria-label="${esc(t('remaining'))}">${format(s.seconds)}</div><div class="rl-timer-track"><span style="width:${s.seconds/E.duration(s)*100}%"></span></div></div>`;}
function draw(tossing=false){return `<div class="rl-intro"><p class="rl-eyebrow">${esc(!tossing&&s.turn===1?t('first',{name:ro().roller}):t(tossing?'rolling':'rollIntro'))}</p><h2 class="rl-title">${esc(t('yourRoll',{name:ro().roller}))}</h2><p class="rl-subtitle">${esc(t('mystery'))}</p></div><div class="rl-start-tray"><div class="rl-dice-space"><div class="rl-dice">${['action','style'].map(type=>`<div class="rl-die-wrap"><div class="rl-die-label">${esc(t(type))}</div>${die(t(type),type)}</div>`).join('')}</div>${!tossing?`<div class="rl-swipe-hint rl-hold-hint">${rlReduced()?'':'<div class="rl-meter" aria-hidden="true"><i></i></div>'}<b>${esc(t(rlReduced()?'tapHint':'hold'))}</b></div>`:''}</div><p class="rl-tray-caption">${esc(t('expectation'))}<br>${esc(t('reverseHint'))}</p></div><div class="rl-actions">${button(t(tossing?'toss':'roll'),'roll',false,tossing)}</div>`;}
function fewCards(level,filters,anatomy){return C.cards.filter(c=>c.level===level&&c.filters.every(f=>filters.every(p=>p[E.filters.indexOf(f)]))&&(!c.anatomy||anatomy.some(a=>c.anatomy.includes(a)))).length<15;}
function setupHints(level,filters,anatomy){return `<p class="rl-level-description">${esc(words().levelDescriptions[level])}</p>${fewCards(level,filters,anatomy)?`<p class="rl-pool-warning" role="status">${esc(t('fewCards',{level:words().levels[level]}))}</p>`:''}`;}
function updateSetupHints(){captureDraft();const hints=main.querySelector('#rl-level-hints');if(hints)hints.innerHTML=setupHints(draft.level,draft.filters,draft.anatomy);}
function preferences(names){const prefs=draft?.filters||[E.allFilters(),E.allFilters()],anatomy=draft?.anatomy||sharedAnatomy();return `<details class="rl-preferences" ${draft?.preferencesOpen?'open':''}><summary>${esc(t('preferences'))}</summary><p class="rl-subtitle">${esc(t('filtersSubtitle'))}</p><div class="rl-filter-groups">${names.map((n,p)=>`<fieldset class="rl-filter-group" data-person-group="${p}"><legend>${esc(n)}</legend><label class="rl-body-label">${esc(t('anatomyTitle'))}<select name="body${p}">${E.anatomyValues.map(a=>`<option value="${a}" ${anatomy[p]===a?'selected':''}>${esc(C.ui.anatomyOptions[a][lang()])}</option>`).join('')}</select></label><p class="rl-anatomy-hint">${esc(t('anatomyHint'))}</p>${C.filters.map((f,i)=>`<label class="rl-filter-row"><span>${esc(f.label[lang()])}</span><input type="checkbox" role="switch" name="pref${p}-${i}" ${prefs[p][i]?'checked':''}></label>`).join('')}</fieldset>`).join('')}</div></details>`;}
function entryDice(){return '<div class="rl-entry-dice" aria-hidden="true"><span class="rl-entry-die"></span><span class="rl-entry-die style"></span></div>';}
function setup(){const names=draft?.names||app.profiles,level=draft?.level??s?.level??0,mode=draft?.mode||s?.mode||'fixed',total=draft?.total??s?.initialTotal??12;
 return `${legacyNotice?`<p class="rl-notice">${esc(t('updated'))}</p>`:''}<p class="rl-eyebrow">${esc(t('setup'))}</p><h2 class="rl-title">${esc(t('rhythm'))}</h2><p class="rl-subtitle rl-entry-subtitle">${esc(t('trayIntro'))}</p>${entryDice()}<form id="rl-setup" class="rl-form"><div class="rl-entry-player-tray"><div class="rl-names">${names.map((n,i)=>`<label>${esc(t('name'))} ${i+1}<input name="name${i}" required maxlength="24" autocomplete="off" value="${esc(n)}"></label>`).join('')}</div></div><label>${esc(t('level'))}<select name="level">${words().levels.map((n,i)=>`<option value="${i}" ${level===i?'selected':''}>${esc(n)}</option>`).join('')}</select></label><div id="rl-level-hints">${setupHints(level,draft?.filters||[E.allFilters(),E.allFilters()],draft?.anatomy||sharedAnatomy())}</div><div class="rl-entry-setting-pair"><label>${esc(t('mode'))}<select name="mode"><option value="fixed" ${mode==='fixed'?'selected':''}>${esc(t('fixed'))}</option><option value="progressive" ${mode==='progressive'?'selected':''}>${esc(t('progressive'))}</option></select></label><label>${esc(t('length'))}<select name="total">${[6,12,0].map(n=>`<option value="${n}" ${total===n?'selected':''}>${esc(n?n+' '+t('turns'):t('free'))}</option>`).join('')}</select></label></div>${preferences(names)}<label class="rl-adult"><input type="checkbox" name="adult" required ${draft?.adult?'checked':''}>${esc(t('adult'))}</label><p class="rl-subtitle">${esc(t('safety'))}</p><div class="rl-actions">${button(t('trayContinue'),'save-settings')}${s?button(t('cancel'),'cancel-setup',true):''}</div></form>`;
}
function consentScreen(){return `<p class="rl-eyebrow">Roll</p><h2 class="rl-title">${esc(t('trayConsent'))}</h2><p class="rl-subtitle">${esc(t('consentNote'))}</p><div class="rl-entry-consent-tray"><div class="rl-consent rl-start-consent">${draft.names.map((n,i)=>`<button type="button" class="rl-button secondary" data-rl="start-consent" data-person="${i}" aria-label="${esc(n+': '+t('consentYes'))}" aria-pressed="${draft.agreement[i]}"><span class="rl-entry-check" aria-hidden="true"></span><span class="rl-entry-person"><strong>${esc(n)}</strong><small>${esc(t('consentYes'))}</small></span></button>`).join('')}</div></div><div class="rl-actions">${button(t('startGame'),'start-agreed',false,!draft.agreement.every(Boolean))}${button(t('back'),'back-setup',true)}</div><p class="rl-entry-footer">${esc(t('trayFooter'))}</p>`;}
function render(tossing=false){if(!active)return;phone.classList.add('tm-roll');phone.dataset.view='roll';phone.lang=lang()==='es'?'es-419':'en-US';document.documentElement.lang=phone.lang;root.querySelector('#tm-language').value=phone.lang;root.querySelector('#tm-language').setAttribute('aria-label',lang()==='es'?'Idioma':'Language');root.querySelector('#tm-language-label').textContent=lang()==='es'?'Idioma':'Language';menuButton.textContent=t('menu');menuButton.disabled=busy;window.tryMeShell?.world({game:'roll',title:'Roll',place:'table'});root.querySelector('.tm-bar')?.classList.toggle('tm-bar-busy',busy);menuButton.setAttribute('aria-controls','rl-dialog');
 const game=s&&view==='game';phone.dataset.rollPhase=pausedAway?'away':game?s.phase:view;room.hidden=!game;room.dataset.paused=String(pausedAway||s?.paused===true);let body='';
 if(view==='setup')body=setup();
 else if(view==='consent')body=consentScreen();
 else if(view==='resume')body=`<div class="rl-intro"><p class="rl-eyebrow">${esc(resumeCandidate.names.join(' & '))}</p><h2 class="rl-title">${esc(t('saved'))}</h2><p class="rl-subtitle">${esc(t('savedNote'))}</p></div><div class="rl-actions">${button(t('resume'),'resume-saved')}${button(t('new'),'new-game',true)}</div>`;
 else if(pausedAway)body=`<div class="rl-intro"><p class="rl-eyebrow">${esc(s.names.join(' & '))}</p><h2 class="rl-title">${esc(t('paused'))}</h2><p class="rl-subtitle">${esc(t('pausedNote'))}</p></div><div class="rl-actions">${button(t('resume'),'resume-away')}${button(t('saveExit'),'games',true)}</div>`;
 else if(tossing||s.phase==='ready')body=draw(tossing);
 else if(s.phase==='choose')body=compact()+reversal()+`<div class="rl-intro"><p class="rl-eyebrow">${esc(labelA('anhelo'))}</p><h2 class="rl-title">${esc(t('choose',{name:ro().receiver}))}</h2><p class="rl-subtitle">${esc(t('chooseNote',{estilo:labelS(s.style)}))}</p></div>${s.style==='reves'?`<p class="rl-subtitle">${esc(t('doubleReverse',{lanza:ro().roller,recibe:ro().receiver}))}</p>`:''}<div class="rl-choices">${E.actions.slice(0,5).map(a=>`<button type="button" class="rl-choice" data-rl="choice" data-choice="${a}" ${E.options(s).includes(a)?'':'disabled'}><strong>${esc(labelA(a))}</strong><small>${esc(words().categoryHints[E.actions.indexOf(a)])}</small></button>`).join('')}</div>`;
 else if(['covered','revealed','playing'].includes(s.phase)){const c=E.card(s);let controls='';
  if(s.phase==='covered')controls=button(t('reveal'),'reveal');
  if(s.phase==='revealed')controls=button(t('start')+(E.duration(s)?' · '+E.duration(s)+' s':''),'start')+rerollButton();
  if(s.phase==='playing')controls=E.duration(s)&&s.seconds>0?button(t(s.paused?'continue':'pause'),'pause')+(E.canEnd(s)?button(t('endTurn'),'next',true):''):button(t('next'),'next');
  body=(s.phase==='covered'?compact():'')+reversal()+card()+(s.phase==='playing'&&E.duration(s)?timer():'')+`<div class="rl-actions">${controls}</div>`;
 }else if(s.phase==='progress')body=`<div class="rl-intro"><p class="rl-eyebrow">${esc(t('progressive'))}</p><h2 class="rl-title">${esc(t('up',{level:words().levels[s.level+1]}))}</h2><p class="rl-subtitle">${esc(t('both'))}</p></div><div class="rl-consent">${s.names.map((n,i)=>`<button type="button" class="rl-button secondary" data-rl="consent" data-person="${i}" aria-pressed="${s.consent[i]}">${esc(n)}: ${esc(t('confirm'))}</button>`).join('')}</div><div class="rl-actions">${button(t('stay',{level:words().levels[s.level]}),'stay',true)}</div>`;
 else if(s.phase==='exhausted')body=`<h2 class="rl-title">${esc(t('empty'))}</h2><p class="rl-subtitle">${esc(t('emptyNote'))}</p><div class="rl-actions">${s.level>0?button(t('lower'),'lower'):''}${button(t('prepare'),'prepare',true)}${button(t('finish'),'finish',true)}</div>`;
 else if(s.phase==='end')body=`<div class="rl-intro"><p class="rl-eyebrow">${esc(t('complete'))}</p><h2 class="rl-title">${esc(t('endTitle',{n:s.total}))}</h2><p class="rl-subtitle">${esc(t('endText',{n:s.total}))}</p></div><div class="rl-wrap-card"><h3>${esc(t('wrapTitle'))}</h3><p>${esc(t('wrapText'))}</p></div><div class="rl-actions">${button(t('extend'),'extend')}${button(t('finish'),'finish',true)}</div>`;
 main.innerHTML=`<section id="roll-game" data-phase="${game?s.phase:view}" aria-label="Roll">${game?`<div class="rl-meta"><span>${esc(t(s.total?'turn':'freeTurn',{n:Math.min(s.turn,s.total||s.turn),total:s.total}))}</span><span>${esc(words().levels[s.level])}</span></div><div class="rl-progress" role="progressbar" aria-label="${esc(t('length'))}" aria-valuemin="0" aria-valuemax="${s.total||s.turn}" aria-valuenow="${Math.min(s.turn-1,s.total||s.turn)}"><span style="width:${s.total?Math.min(100,(s.turn-1)/s.total*100):0}%"></span></div>`:''}<div id="rl-stage" aria-live="polite" ${busy?'aria-busy="true"':''}>${notice?`<p class="rl-notice" role="status">${esc(notice)}</p>`:''}${body}</div>${!storageOK?`<p class="rl-storage" role="status">${esc(t('storage'))}</p>`:''}</section>`;
 syncCubes();if(dialog.open)paintDialog();rlAfterRender(tossing);
}
function paintDialog(){let html='';if(dialogMode==='rules')html=`${[1,2,3,4,5,6].map(i=>`<section class="rl-rule-section"><h3>${esc(words().ruleTitles[i-1])}</h3><p>${esc(t('rules'+i))}</p></section>`).join('')}`+button(t('close'),'close-dialog',true);
 else if(dialogMode==='reroll')html=`${s.names.map((name,i)=>`<button type="button" class="rl-button secondary" data-rl="reroll-person" data-person="${i}" ${E.remaining(s,i)?'':'disabled'}>${esc(t('rerollWhoOption',{nombre:name,n:E.remaining(s,i)}))}</button>`).join('')}`+button(t('rerollCancel'),'close-dialog',true);
 else if(dialogMode==='restart')html=`<p>${esc(t('restartNote'))}</p>`+button(t('restart'),'confirm-restart')+button(t('keep'),'close-dialog',true);
 else if(dialogMode==='finish')html=`<p>${esc(t('finishNote'))}</p>`+button(t('confirmFinish'),'confirm-finish')+button(t('keep'),'close-dialog',true);
 else html=button(t('rules'),'rules',true)+button(t('settings'),'app-settings',true)+(s?button(t('prepare'),'prepare',true)+(view==='game'&&s.level>0&&s.phase!=='end'?button(t(s.phase==='ready'?'lowerReady':'lower'),'lower',true):'')+button(t('saveExit'),'games',true)+button(t('finish'),'finish',true):button(t('games'),'games',true))+button(t('close'),'close-dialog');
 const title=dialogMode==='reroll'?t('rerollWho'):dialogMode==='rules'?t('rules'):dialogMode==='restart'?t('restartTitle'):dialogMode==='finish'?t('finishTitle'):'Roll';
 dialog.lang=phone.lang;dialog.innerHTML=`<h2 id="rl-dialog-title">${esc(title)}</h2><div id="roll-dialog-content">${html}</div>`;
}
function openDialog(mode='menu'){if(!dialog.open){resumeAfter=s?.phase==='playing'&&!s.paused&&s.seconds>0&&deadline?s:null;pauseTime();}dialogMode=mode;paintDialog();if(!dialog.open)dialog.showModal();}
function finishDialog(){const target=resumeAfter;resumeAfter=null;dialogMode='';if(active&&view==='game'&&!pausedAway&&s===target&&s?.phase==='playing'&&s.seconds>0){s.paused=false;primeCue();startTime();save();}render();}
function closeDialog(resume=true){if(!resume)resumeAfter=null;if(dialog.open)dialog.close();finishDialog();}
function exit(){rlCancelCharge();rlSwipe=null;resumeAfter=null;epoch++;pauseTime();busy=false;pausedAway=false;active=false;room.hidden=true;phone.classList.remove('tm-roll');delete phone.dataset.rollPhase;if(dialog.open)dialog.close();menuButton.disabled=false;menuButton.setAttribute('aria-controls','tm-rules-menu');app.hub();}
function enter(){app.hub();draft=null;notice='';active=true;busy=false;pausedAway=false;resumeCandidate=read();s=null;view=resumeCandidate?'resume':'setup';render();}
function captureDraft(){const form=main.querySelector('#rl-setup');if(!form)return;const f=new FormData(form);draft={names:[f.get('name0'),f.get('name1')].map(n=>String(n).trim()),level:Number(f.get('level')),mode:f.get('mode'),total:Number(f.get('total')),adult:f.has('adult'),agreement:draft?.agreement||[false,false],filters:[0,1].map(p=>E.filters.map((_,i)=>f.has('pref'+p+'-'+i))),anatomy:[0,1].map(p=>f.get('body'+p)),preferencesOpen:form.querySelector('.rl-preferences').open};}
function prepareGame(){const form=main.querySelector('#rl-setup');if(!form)return;form.querySelectorAll('input[type="text"],input:not([type])').forEach(i=>i.value=i.value.trim());if(!form.reportValidity())return;captureDraft();if(draft.names.some(n=>!n)||!draft.adult)return;rememberAnatomy(draft.anatomy);draft.agreement=[false,false];view='consent';render();main.scrollTop=0;}
function startGame(){if(!draft||!draft.adult||!draft.agreement.every(Boolean))return;stop();const profileNames=draft.names.slice();if(E.random(2))for(const field of ['names','filters','anatomy'])draft[field].reverse();s=E.create(draft.names,draft.level,draft.mode,draft.total,{filters:draft.filters,anatomy:draft.anatomy});if(!E.valid(s))return;app.profiles=profileNames;resumeCandidate=null;legacyNotice=false;draft=null;view='game';pausedAway=false;notice='';save();rlEnter='tray';render();main.scrollTop=0;}
const RL_ALIGN={front:[0,0],right:[0,-90],left:[0,90],back:[0,180],top:[-90,0],bottom:[90,0]};
const RL_EASE=['cubic-bezier(.2,.7,.3,1)','cubic-bezier(.55,0,.85,.4)','cubic-bezier(.2,.7,.3,1)','cubic-bezier(.55,0,.85,.45)','cubic-bezier(.2,.7,.3,1)','cubic-bezier(.55,0,.85,.45)','ease-out','ease-in-out','ease-in-out','cubic-bezier(.6,0,.9,.5)','ease-out','linear'];
let rlThrow=null,rlSwipe=null;
const rlRnd=(a,b)=>a+Math.random()*(b-a),rlClamp=(v,a,b)=>Math.max(a,Math.min(b,v)),rlLerp=(a,b,p)=>a+(b-a)*p;
const rlRot=(a,b,c,fx,fy)=>`rotateX(${a}deg) rotateY(${b}deg) rotateZ(${c}deg) rotateX(${fx}deg) rotateY(${fy}deg)`;
const rlFl=(x,y,sc)=>`translate3d(${x}px,${y}px,0) scale(${sc})`;
/* Roll v2 motion (Design handoff Roll_Game_v2): hold to shake, suspense throw, deal, flip and turn exits.
   Motion never decides results: the engine picks the play before the dice fly. Reduced motion skips all of it. */
const RL_I=1.3;
let rlEnter=null,rlCharge=null,rlIdle=[],rlNoise=null,rlLastSec=null;
const rlReduced=()=>!!app.reducedMotion;
const rlWait=ms=>new Promise(r=>setTimeout(r,ms));
function rlLater(fn,ms){const token=epoch;return setTimeout(()=>{if(token===epoch&&active)fn();},ms);}
function rlBuzz(p){if(rlReduced()||window.tryMeSettings?.vibration===false)return;try{navigator.vibrate?.(p);}catch{}}
function rlCtx(){if(!app.soundEnabled||!cueCtx)return null;try{if(cueCtx.state==='suspended')cueCtx.resume?.()?.catch?.(()=>{});}catch{}return cueCtx;}
function rlTone(c,f0,f1,dur,type,g,dl=0){const t=c.currentTime+dl,o=c.createOscillator(),a=c.createGain();o.type=type;o.frequency.setValueAtTime(f0,t);o.frequency.exponentialRampToValueAtTime(f1,t+dur);a.gain.setValueAtTime(.0001,t);a.gain.exponentialRampToValueAtTime(g,t+.008);a.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(a).connect(c.destination);o.start(t);o.stop(t+dur+.02);}
function rlHiss(c,dur,f0,f1,q,g,dl=0){if(!rlNoise||rlNoise.sampleRate!==c.sampleRate){rlNoise=c.createBuffer(1,c.sampleRate,c.sampleRate);const d=rlNoise.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;}
 const t=c.currentTime+dl,s=c.createBufferSource(),f=c.createBiquadFilter(),a=c.createGain();s.buffer=rlNoise;f.type='bandpass';f.Q.value=q;f.frequency.setValueAtTime(f0,t);f.frequency.exponentialRampToValueAtTime(f1,t+dur);a.gain.setValueAtTime(.0001,t);a.gain.exponentialRampToValueAtTime(g,t+Math.min(.02,dur/3));a.gain.exponentialRampToValueAtTime(.0001,t+dur);s.connect(f).connect(a).connect(c.destination);s.start(t,Math.random()*.5);s.stop(t+dur+.02);}
function rlSfx(n,k=1){const c=rlCtx();if(!c)return;try{const r=Math.random();
 if(n==='rattle'){rlHiss(c,.04,2200+r*1800,2000+r*1500,6,.14);if(r>.5)rlTone(c,1900+r*600,1700,.025,'triangle',.03);}
 else if(n==='whoosh')rlHiss(c,.38*k,500,2600,1.2,.12);
 else if(n==='thud'){rlTone(c,150,52,.2,'sine',.4*k);rlHiss(c,.07,1100,700,1,.16*k);rlTone(c,2100+r*400,1800,.03,'triangle',.06*k);}
 else if(n==='land'){rlTone(c,784,780,.3,'sine',.07);rlTone(c,1175,1170,.45,'sine',.06,.09);}
 else if(n==='pop')rlTone(c,480,920,.1,'triangle',.09*k);
 else if(n==='swoosh')rlHiss(c,.3,1400,450,1.4,.1*k);
 else if(n==='flip'){rlHiss(c,.14,3200,1800,2,.08);rlTone(c,320,170,.09,'sine',.1,.12);}
 else if(n==='tick')rlTone(c,1250,1240,.05,'square',.025);
 else if(n==='rise')rlTone(c,220,520,.9*k,'triangle',.035);
 }catch{}}
function rlAnim(el,kf,o){if(!el||typeof el.animate!=='function'||rlReduced())return null;try{return el.animate(kf,o);}catch{return null;}}
function rlFadeUp(el,delay=0,dist=12){if(!el)return null;const op=getComputedStyle(el).opacity;return rlAnim(el,[{opacity:0,transform:`translateY(${dist}px)`},{opacity:op,transform:'none'}],{duration:420,delay,easing:'cubic-bezier(.2,.8,.2,1)',fill:'backwards'});}
function rlStagger(sel,delay){main.querySelectorAll(sel).forEach((el,i)=>rlFadeUp(el,delay+i*70,14));}
const rlParts=d=>({flight:d.querySelector('.rl-flight'),squash:d.querySelector('.rl-squash'),cube:d.querySelector('.rl-cube'),shadow:d.querySelector('.rl-ground-shadow'),impact:d.querySelector('.rl-impact')});
const rlTilt=i=>i?[-17,22,6]:[-17,-22,-6];
const rlK=d=>(d.querySelector('.rl-flight')?.offsetWidth||104)/104;
const rlGather=(i,k)=>[(i?-44:44)*k,48*k];
const rlTrayDice=()=>Array.from(main.querySelectorAll('.rl-dice-space .rl-solid'));
const rlTF=(x,y,sx,sy=sx)=>`translate3d(${x}px,${y}px,0) scale(${sx},${sy})`;
function rlImpact(el,s){rlAnim(el,[{transform:'scale(.3)',opacity:Math.min(1,.6*s)},{transform:`scale(${1+.6*s})`,opacity:0}],{duration:480,easing:'cubic-bezier(.2,.7,.3,1)'});}
function rlStopIdle(){rlIdle.forEach(a=>a?.cancel());rlIdle=[];}
function rlStartIdle(){rlStopIdle();rlTrayDice().forEach((d,i)=>{const P=rlParts(d),o={duration:2800,delay:i*700,iterations:Infinity,easing:'ease-in-out'};
 rlIdle.push(rlAnim(P.flight,[{transform:rlTF(0,0,1)},{transform:rlTF(0,-6,1)},{transform:rlTF(0,0,1)}],o),rlAnim(P.shadow,[{transform:'scale(1)',opacity:.65},{transform:'scale(.9)',opacity:.45},{transform:'scale(1)',opacity:.65}],o));});}
function rlDropDice(dice){dice.forEach((d,i)=>{const P=rlParts(d),dl=300+i*110,t=rlTilt(i),o={duration:620,delay:dl,fill:'backwards'};
 rlAnim(P.flight,[{transform:rlTF(0,-260,.96,1.06),easing:'cubic-bezier(.55,0,.9,.5)'},{offset:.5,transform:rlTF(0,0,1.14,.84),easing:'cubic-bezier(.2,.7,.4,1)'},{offset:.68,transform:rlTF(0,-28,.98,1.03),easing:'cubic-bezier(.55,0,.85,.45)'},{offset:.84,transform:rlTF(0,0,1.05,.95),easing:'cubic-bezier(.3,.8,.3,1)'},{transform:rlTF(0,0,1)}],o);
 rlAnim(P.shadow,[{transform:'scale(.4)',opacity:.1,easing:'cubic-bezier(.55,0,.9,.5)'},{offset:.5,transform:'scale(1.05)',opacity:.7},{offset:.68,transform:'scale(.85)',opacity:.45},{offset:.84,transform:'scale(1)',opacity:.65},{transform:'scale(1)',opacity:.65}],o);
 rlAnim(P.cube,[{transform:rlRot(t[0]-120,t[1]-50,t[2],0,0),easing:'cubic-bezier(.4,0,.8,.6)'},{offset:.5,transform:rlRot(t[0]-14,t[1]-6,t[2],0,0),easing:'ease-out'},{offset:.84,transform:rlRot(t[0]+4,t[1]+2,t[2],0,0)},{transform:rlRot(t[0],t[1],t[2],0,0)}],o);
 rlLater(()=>{rlImpact(P.impact,.7);rlBuzz(8);rlSfx('thud',.45);},dl+310);});}
function rlEnterTray(){const tray=main.querySelector('.rl-start-tray');if(!tray||rlReduced())return;
 rlFadeUp(main.querySelector('.rl-intro'),0);
 rlAnim(tray,[{opacity:0,transform:'translateY(70px) scale(.96)',easing:'cubic-bezier(.2,.9,.25,1.05)'},{opacity:1,transform:'none'}],{duration:560,delay:60,fill:'backwards'});
 rlFadeUp(main.querySelector('.rl-actions'),200,16);rlDropDice(rlTrayDice());
 rlLater(()=>{if(!rlCharge&&!busy)rlStartIdle();},1080);}
function rlShake(dice){const anims=[];dice.forEach((d,i)=>{const P=rlParts(d),k=rlK(d),[gx,gy]=rlGather(i,k),j=i?-1:1,ease='cubic-bezier(.3,.7,.3,1)';
 anims.push(rlAnim(P.flight,[{transform:rlTF(0,0,1)},{transform:rlTF(gx,gy,.86)}],{duration:240,easing:ease,fill:'forwards'}));
 anims.push(rlAnim(P.shadow,[{transform:'translate(0,0) scale(1)',opacity:.65},{transform:`translate(${gx}px,${gy}px) scale(.84)`,opacity:.75}],{duration:240,easing:ease,fill:'forwards'}));
 const jit=[[0,0,0],[-2,1,-5],[2,-1,6],[-1,-2,-3],[1,1,4],[0,0,0]];
 anims.push(rlAnim(P.squash,jit.map(([x,y,z])=>({transform:`translate(${x*j*RL_I}px,${y*RL_I}px) rotateZ(${z*j*RL_I}deg)`})),{duration:150,delay:200,iterations:Infinity}));});return anims;}
function rlStartCharge(){if(rlCharge||!rlCanRoll()||rlReduced())return false;primeCue();rlStopIdle();
 const tray=main.querySelector('.rl-start-tray'),anims=rlShake(rlTrayDice());
 anims.push(rlAnim(main.querySelector('.rl-meter i'),[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{duration:900,delay:120,easing:'cubic-bezier(.3,.4,.5,1)',fill:'both'}));
 anims.push(rlAnim(tray,[{transform:'scale(1)'},{transform:'scale(.985)'}],{duration:200,fill:'forwards'}));
 const hint=main.querySelector('.rl-hold-hint b');if(hint)hint.textContent=t('release');
 const btn=main.querySelector('[data-rl="roll"]');if(btn){btn.disabled=true;btn.textContent=t('shaking');}
 menuButton.disabled=true;rlBuzz([6,70,6,70,6,70,6,70,6]);
 const c={t0:performance.now(),anims,token:epoch,rattle:null};rlCharge=c;
 setTimeout(()=>{if(rlCharge===c)c.rattle=setInterval(()=>rlSfx('rattle'),85);},200);return true;}
function rlAbortCharge(){const c=rlCharge;if(!c)return;clearInterval(c.rattle);rlCharge=null;c.anims.forEach(a=>a?.cancel());
 if(c.token!==epoch||!active)return;
 rlTrayDice().forEach((d,i)=>{const P=rlParts(d),[gx,gy]=rlGather(i,rlK(d));rlAnim(P.flight,[{transform:rlTF(gx,gy,.86)},{transform:rlTF(0,0,1)}],{duration:260,easing:'cubic-bezier(.2,.8,.3,1.2)'});});
 const hint=main.querySelector('.rl-hold-hint b');if(hint){hint.textContent=t('hold');rlAnim(hint,[{opacity:.35},{opacity:1}],{duration:260,iterations:2});}
 const btn=main.querySelector('[data-rl="roll"]');if(btn){btn.disabled=false;btn.textContent=t('roll');}
 menuButton.disabled=false;setTimeout(()=>{if(!rlCharge&&!busy&&c.token===epoch&&active)rlStartIdle();},300);}
function rlCancelCharge(){if(!rlCharge)return;clearInterval(rlCharge.rattle);rlCharge.anims.forEach(a=>a?.cancel());rlCharge=null;}
function rlRelease(bonus=0){const c=rlCharge;if(!c||c.released)return;c.released=true;const held=performance.now()-c.t0;
 let p=held<140?.45:Math.min(1,held/900);p=Math.min(1.15,p+bonus);
 setTimeout(()=>{if(rlCharge!==c)return;clearInterval(c.rattle);rlCharge=null;if(c.token!==epoch||!active){c.anims.forEach(a=>a?.cancel());return;}
  const old=main.querySelector('.rl-start-tray');rlThrow={p};Promise.resolve(roll()).finally(()=>{rlThrow=null;});
  if(old&&old.isConnected){c.anims.forEach(a=>a?.cancel());render();}},Math.max(0,250-held));}
async function tossDie(d,index,p,token){
 const P=rlParts(d),k=rlK(d),tw=index?-1:1,la=index?.8:.6,dur=2150+200*p,delay=index?90:0,[gx,gy]=rlGather(index,k);
 const box=P.flight.getBoundingClientRect(),top=(main.querySelector('#roll-game')||main).getBoundingClientRect().top;
 const H=Math.min((150+40*p)*RL_I*(index?.94:1)*k,Math.max(60,(box.top-top-6)/.86));
 const Q=[[0,gx,gy,.86,.86,'cubic-bezier(.4,0,.6,1)'],[.06,gx,gy+12*k,.96,.7,'cubic-bezier(.15,.7,.3,1)'],[.16,gx*.2,-H*.72,.86,1.14,'ease-in-out'],[.3,0,-H*.66,1,1,'ease-in-out'],[la-.12,0,-H*.74,1,1,'cubic-bezier(.3,0,.5,1)'],[la-.05,0,-H*.86,1.06,.94,'cubic-bezier(.7,0,.9,.4)'],[la,0,0,1.24,.76,'cubic-bezier(.2,.8,.3,1)'],[la+.05,0,-16*k,.93,1.09,'cubic-bezier(.55,0,.85,.45)'],[la+.1,0,0,1.05,.95,'cubic-bezier(.3,.8,.3,1)'],[la+.15,0,0,1,1,'linear'],[1,0,0,1,1,'linear']].filter(q=>q[0]<=1);
 const fK=Q.map(q=>({offset:q[0],transform:rlTF(q[1],q[2],q[3],q[4]),easing:q[5]}));
 const sK=Q.map((q,i)=>{const ground=q[0]>=.16?0:gy*(1-q[0]/.16),hf=rlClamp(Math.max(0,ground-q[2])/H,0,1),base=i<2?.84:1;return {offset:q[0],transform:`translate(${q[1]}px,${ground}px) scale(${base*(1-.55*hf)})`,opacity:i===Q.length-1?.65:.66-.46*hf,easing:q[5]};});
 const result=index?labelS(s.style):labelA(s.action),target=['right','top','left','bottom','back'][Math.floor(Math.random()*5)],targetFace=d.querySelector('.rl-face.'+target);
 const t0=rlTilt(index),[tfx,tfy]=RL_ALIGN[target],sg=()=>Math.random()<.5?-1:1,en=[t0[0]+360*(2+Math.round(p*2))*sg(),t0[1]+360*(1+Math.floor(Math.random()*2))*sg(),t0[2]+360*Math.floor(Math.random()*2)*sg()];
 const R=(q,dx=0,dy=0,dz=0)=>rlRot(rlLerp(t0[0],en[0],q)+dx,rlLerp(t0[1],en[1],q)+dy,rlLerp(t0[2],en[2],q)+dz,rlLerp(0,tfx,q),rlLerp(0,tfy,q));
 const cK=[{offset:0,transform:R(0),easing:'cubic-bezier(.5,0,.8,.4)'},{offset:.16,transform:R(.12,0,0,12*tw),easing:'cubic-bezier(.15,.55,.35,1)'},{offset:la-.05,transform:R(.94,-24,-14,6*tw),easing:'cubic-bezier(.4,0,.6,1)'},{offset:la,transform:R(1,6,3),easing:'ease-out'},{offset:Math.min(1,la+.1),transform:R(1)}];if(cK.at(-1).offset<1)cK.push({offset:1,transform:R(1)});
 const timing={duration:dur,delay,fill:'both'},timers=[];let rattle=null;
 const later=(fn,ms)=>timers.push(setTimeout(()=>{if(token===epoch&&active)fn();},ms));
 later(()=>{targetFace.querySelector('.rl-face-label').textContent=result;d.setAttribute('aria-label',(index?t('style'):t('action'))+': '+result);},delay+dur*.16);
 if(!index){later(()=>{rattle=setInterval(()=>rlSfx('rattle'),110);rlSfx('rise',dur/1000*.5);},dur*.18);later(()=>clearInterval(rattle),dur*(la-.06));}
 later(()=>{clearInterval(rattle);rlImpact(P.impact,1.2);rlSfx('thud',1.1);rlBuzz(index?30:22);rlAnim(main.querySelector('.rl-start-tray'),[{transform:'none'},{offset:.25,transform:'translateY(5px) scale(1.035)'},{transform:'none'}],{duration:360,easing:'cubic-bezier(.2,.8,.3,1)'});},delay+dur*la);
 const animations=[P.flight.animate(fK,timing),P.cube.animate(cK,timing),P.shadow.animate(sK,timing)];
 try{await Promise.all(animations.map(a=>a.finished.catch(()=>{})));if(token!==epoch||!active)return;targetFace.classList.add('rl-win');}
 finally{clearInterval(rattle);if(token!==epoch||!active)timers.forEach(clearTimeout);}
}
async function rlPrelude(dice,token){rlDropDice(dice);await rlWait(1000);if(token!==epoch||!active)return [];const anims=rlShake(dice);rlBuzz([6,70,6,70,6,70,6]);const iv=setInterval(()=>rlSfx('rattle'),85);await rlWait(560);clearInterval(iv);return anims;}
async function roll(again=false,person=null){if(busy)return;primeCue();if(again)pauseTime();if(!(again?E.reroll(s,person):E.roll(s)))return;notice='';if(s.phase==='exhausted'){save();render();return;}busy=true;save();const token=++epoch;rlStopIdle();render(true);let shown=false;
 try{const dice=Array.from(main.querySelectorAll('.rl-solid'));if(!rlReduced()&&dice.every(d=>typeof d.animate==='function')){
  let p=rlThrow?.p;let pre=[];if(p==null){pre=await rlPrelude(dice,token);p=.75;}
  if(token!==epoch||!active)return;pre.forEach(a=>a?.cancel());
  rlSfx('whoosh',.8+p*.2);await Promise.all(dice.map((d,i)=>tossDie(d,i,p,token)));if(token!==epoch||!active)return;
  dice.forEach((d,i)=>rlAnim(d.querySelector('.rl-squash'),[{transform:'scale(1)'},{offset:.4,transform:'scale(1.08)'},{transform:'scale(1)'}],{duration:400,delay:120+i*80,easing:'cubic-bezier(.3,.6,.3,1)'}));
  rlBuzz([10,40,16]);rlSfx('land');await rlWait(820);if(token!==epoch||!active)return;
  const before=dice.map(d=>d.getBoundingClientRect());busy=false;rlEnter=s.phase==='choose'?'choose':'deal';render();shown=true;
  rlLater(()=>rlSfx('pop'),260);rlLater(()=>rlSfx('pop',.8),320);
  await Promise.all(Array.from(main.querySelectorAll('.rl-mini-dice .rl-solid')).map((d,i)=>{const a=before[i];if(!a)return null;const b=d.getBoundingClientRect(),from=`translate(${a.left-b.left}px,${a.top-b.top}px) scale(${a.width/Math.max(1,b.width)},${a.height/Math.max(1,b.height)})`;
   return d.animate([{transform:from},{offset:.72,transform:`scale(1.1) rotate(${i?6:-6}deg)`,easing:'cubic-bezier(.2,.9,.3,1.2)'},{transform:'none'}],{duration:520,delay:i*60,easing:'cubic-bezier(.2,.8,.2,1)',fill:'backwards'}).finished.catch(()=>{});}));}}
 catch{/* The selected play remains available if motion is interrupted. */}
 finally{if(token===epoch&&active){busy=false;if(shown){menuButton.disabled=false;root.querySelector('.tm-bar')?.classList.remove('tm-bar-busy');main.querySelector('#rl-stage')?.removeAttribute('aria-busy');}else render();}}
}
function rlDeal(delay=40){const scene=main.querySelector('.rl-card-scene');if(!scene||rlReduced())return;
 rlAnim(scene,[{transform:'translateY(560px) rotate(-12deg) scale(.92)',easing:'cubic-bezier(.16,.8,.3,1)'},{offset:.72,transform:'translateY(-10px) rotate(2.8deg) scale(1.01)',easing:'cubic-bezier(.4,0,.4,1)'},{transform:'none'}],{duration:680,delay,fill:'backwards'});
 rlLater(()=>rlSfx('swoosh'),delay);rlLater(()=>{rlBuzz(10);rlSfx('thud',.25);},delay+480);
 rlFadeUp(main.querySelector('.rl-reverse'),320,8);rlStagger('#rl-stage > .rl-actions > *',380);}
function rlSheenStart(delay){rlAnim(main.querySelector('.rl-card-back .rl-sheen'),[{transform:'translateX(-130%) skewX(-16deg)',easing:'cubic-bezier(.4,0,.2,1)'},{offset:.4,transform:'translateX(330%) skewX(-16deg)'},{transform:'translateX(330%) skewX(-16deg)'}],{duration:3200,delay,iterations:Infinity});}
function rlEnterChoose(){rlFadeUp(main.querySelector('#rl-stage > .rl-intro'),0);main.querySelectorAll('.rl-choice').forEach((c,i)=>{const r=i%2?.8:-.8,op=getComputedStyle(c).opacity;
 rlAnim(c,[{opacity:0,transform:`translateY(48px) rotate(${-r*5}deg)`,easing:'cubic-bezier(.2,.9,.3,1.1)'},{opacity:op,transform:'none'}],{duration:480,delay:140+i*70,fill:'backwards'});rlLater(()=>rlSfx('swoosh',.35),160+i*70);});}
function rlAfterRender(tossing){const e=rlEnter;rlEnter=null;rlStopIdle();if(tossing||!active||view!=='game'||!s||pausedAway||rlReduced())return;
 if(s.phase==='ready'&&!tossing){if(e==='tray')rlEnterTray();else if(!busy)rlStartIdle();}
 else if(s.phase==='choose'&&e==='choose')rlEnterChoose();
 else if(s.phase==='covered'){if(e==='deal')rlDeal(40);rlSheenStart(e==='deal'?1040:700);}
 else if(e==='actions')rlStagger('#rl-stage > .rl-actions > *',0);}
function rlLeave(kind,then){const scene=main.querySelector('.rl-card-scene');if(rlReduced()||!scene||typeof scene.animate!=='function'){then();return;}
 const up=kind==='reroll';busy=true;menuButton.disabled=true;const token=++epoch;
 scene.animate(up?[{transform:'none',easing:'cubic-bezier(.3,0,.6,1)'},{offset:.25,transform:'translate(0,24px) rotate(-2deg) scale(.98)',easing:'cubic-bezier(.5,0,.9,.6)'},{transform:'translate(160px,-780px) rotate(30deg)'}]:[{transform:'none',easing:'cubic-bezier(.3,0,.6,1)'},{offset:.22,transform:'translate(16px,-8px) rotate(3deg)',easing:'cubic-bezier(.5,0,.9,.5)'},{transform:'translate(-560px,80px) rotate(-24deg)'}],{duration:up?540:520,delay:up?120:0,fill:'forwards'});
 main.querySelectorAll('#rl-stage > :is(.rl-actions,.rl-timer,.rl-reverse,.rl-mini-dice)').forEach(el=>el.animate([{opacity:1},{opacity:0}],{duration:200,fill:'forwards'}));
 setTimeout(()=>{if(token===epoch&&active)rlSfx(up?'whoosh':'swoosh',up?.7:.8);},up?200:100);
 setTimeout(()=>{if(token!==epoch||!active)return;busy=false;menuButton.disabled=false;then();},up?620:460);}
async function reveal(){if(s.phase!=='covered'||busy)return;busy=true;menuButton.disabled=true;
 const c=main.querySelector('.rl-card');main.querySelector('[data-rl="reveal"]').disabled=true;const token=++epoch;
 c.querySelector('.rl-card-back').setAttribute('aria-hidden','true');c.querySelector('.rl-card-front').setAttribute('aria-hidden','false');
 const done=()=>{if(token!==epoch||!active)return;s.phase='revealed';busy=false;save();rlEnter='actions';render();};
 if(rlReduced()||typeof c.animate!=='function'){c.classList.add('flipped');done();return;}
 const animations=[];
 try{
  const a=c.animate([{transform:'translateY(0) rotateY(0deg) scale(1)',easing:'cubic-bezier(.3,0,.5,1)'},{offset:.18,transform:'translateY(6px) rotateY(-10deg) scale(.98)',easing:'cubic-bezier(.3,.1,.3,1)'},{offset:.6,transform:'translateY(-26px) rotateY(150deg) scale(1.08)',easing:'cubic-bezier(.2,.6,.3,1)'},{offset:.82,transform:'translateY(2px) rotateY(186deg) scale(1)',easing:'ease-in-out'},{transform:'translateY(0) rotateY(180deg) scale(1)'}],{duration:840,fill:'forwards'});animations.push(a);
  c.querySelectorAll('.rl-card-front :is(.rl-card-kicker,.rl-card-copy,.rl-card-style,.rl-card-bottom)').forEach((el,i)=>animations.push(rlFadeUp(el,520+i*90,10)));
  rlLater(()=>rlSfx('flip'),150);rlLater(()=>{rlBuzz(12);rlSfx('pop',.6);},560);
  await a.finished;if(token!==epoch||!active)return;c.style.transition='none';c.classList.add('flipped');a.cancel();void c.offsetWidth;c.style.transition='';
  await rlWait(380);
 }catch{/* If motion is interrupted, the card still opens. */}
 finally{animations.forEach(x=>x?.cancel());done();}
}
function rlPulseClock(){const v=main.querySelector('.rl-timer-value');if(!v)return;rlAnim(v,[{transform:'scale(1.22)',color:'#F6C2CF'},{transform:'scale(1)',color:getComputedStyle(v).color}],{duration:520,easing:'cubic-bezier(.2,.8,.2,1)'});}
function rlPulseEnd(){rlAnim(main.querySelector('[data-rl="next"]'),[{boxShadow:'0 0 0 0 rgba(246,194,207,.9)'},{boxShadow:'0 0 0 14px rgba(246,194,207,0)'}],{duration:900,iterations:3});}
function advance(){pauseTime();if(E.next(s)){if(s.phase==='end')clearSaved();else save();rlEnter='tray';render();main.scrollTop=0;}}
function resumeGame(saved=false){
 const target=saved?(resumeCandidate||read()):s;
 if(!target||!E.valid(target))return;
 epoch++;busy=false;rlSwipe=null;rlThrow=null;resumeAfter=null;
 s=target;resumeCandidate=null;view='game';pausedAway=false;
 if(s.phase==='playing'&&s.seconds>0){s.paused=false;primeCue();}
 save();if(s.phase==='ready')rlEnter='tray';render();startTime();
}
function perform(a,b){
 if(a==='close-dialog'){closeDialog();return;}if(a==='rules'){openDialog('rules');return;}
 if(a==='app-settings'){closeDialog(false);window.tryMeSettings?.open();return;}
 if(a==='games'){exit();return;}
 if(a==='prepare'){if(s){resumeAfter=null;openDialog('restart');resumeAfter=null;}else{view='setup';render();}return;}
 if(a==='confirm-restart'){closeDialog(false);draft=null;view='setup';render();main.scrollTop=0;return;}
 if(a==='cancel-setup'){view='game';render();return;}
 if(a==='save-settings'){prepareGame();return;}
 if(a==='start-agreed'){startGame();return;}
 if(a==='start-consent'&&view==='consent'){const i=Number(b.dataset.person);draft.agreement[i]=!draft.agreement[i];render();return;}
 if(a==='back-setup'){view='setup';render();return;}
 if(a==='new-game'){stop();clearSaved();epoch++;busy=false;pausedAway=false;resumeAfter=null;resumeCandidate=null;s=null;draft=null;view='setup';render();return;}
 if(a==='resume-saved'){resumeGame(true);return;}
 if(a==='resume-away'){resumeGame();return;}
 if(a==='roll'){if(rlCharge)return;if(rlStartCharge())setTimeout(()=>rlRelease(.15),560);else roll();return;}if(a==='reroll'&&s.phase==='revealed'){openDialog('reroll');return;}if(a==='reroll-person'){const person=Number(b.dataset.person);if(s.phase==='revealed'&&E.remaining(s,person)>0){closeDialog();rlLeave('reroll',()=>roll(true,person));}return;}if(a==='reveal'){reveal();return;}
 if(a==='choice'){if(E.choose(s,b.dataset.choice)){save();rlEnter='deal';render();}return;}
 if(a==='start'&&s.phase==='revealed'){s.phase='playing';s.paused=false;rlLastSec=null;save();rlEnter='actions';render();primeCue();startTime();return;}
 if(a==='pause'&&s.phase==='playing'){if(s.paused){s.paused=false;primeCue();startTime();save();}else pauseTime();render();return;}
 if(a==='next'){if(s?.phase==='playing'){pauseTime();rlLeave('next',advance);}else advance();return;}
 if(a==='consent'&&s.phase==='progress'){const i=Number(b.dataset.person);s.consent[i]=!s.consent[i];if(s.consent.every(Boolean)){s.level++;s.phase='ready';s.consent=[false,false];rlEnter='tray';}save();render();return;}
 if(a==='stay'&&s.phase==='progress'){s.phase='ready';s.consent=[false,false];rlEnter='tray';save();render();return;}
 if(a==='lower'&&view==='game'){resumeAfter=null;pauseTime();if(E.lower(s)){notice=t('lowerNote',{level:words().levels[s.level]});save();closeDialog(false);}return;}
 if(a==='extend'&&E.extend(s)){save();render();return;}
 if(a==='finish'){resumeAfter=null;openDialog('finish');resumeAfter=null;return;}
 if(a==='confirm-finish'){stop();clearSaved();s=null;exit();}
}
function rlCanRoll(){return active&&!busy&&!rlCharge&&main.querySelector('.rl-dice-space')&&main.querySelector('[data-rl="roll"]:not(:disabled)');}
main.addEventListener('pointerdown',e=>{const zone=e.target.closest('.rl-start-tray');if(!zone||!e.isPrimary||e.button!==0||!rlCanRoll())return;primeCue();
 if(rlReduced())return;
 if(rlStartCharge()){rlSwipe={id:e.pointerId,x:e.clientX,y:e.clientY,down:0,side:0};zone.setPointerCapture?.(e.pointerId);}});
main.addEventListener('pointermove',e=>{if(!rlSwipe||e.pointerId!==rlSwipe.id)return;rlSwipe.down=Math.max(rlSwipe.down,e.clientY-rlSwipe.y);rlSwipe.side=Math.max(rlSwipe.side,Math.abs(e.clientX-rlSwipe.x));});
function rlPointerEnd(e,cancelled){if(!rlSwipe||e.pointerId!==rlSwipe.id)return;const sw=rlSwipe;rlSwipe=null;
 const up=sw.y-e.clientY,held=rlCharge?performance.now()-rlCharge.t0:0;
 // Only a deliberate hold (or an upward flick) throws; taps, scrolls and cancelled touches put the dice back.
 if(cancelled||sw.down>24||(sw.side>48&&up<=40)||(held<250&&up<=40)){rlAbortCharge();return;}
 rlRelease(up>40?.25:0);}
main.addEventListener('pointerup',e=>rlPointerEnd(e,false));
main.addEventListener('pointercancel',e=>rlPointerEnd(e,true));
root.addEventListener('click',e=>{if(!active)return;const b=e.target.closest('button');if(!b||b.disabled)return;if(busy&&!['resume-saved','resume-away'].includes(b.dataset.rl))return;if(b===menuButton){app.click();openDialog();return;}if(!b.dataset.rl)return;app.click();perform(b.dataset.rl,b);});
root.addEventListener('input',e=>{if(!active||view!=='setup'||!e.target.name?.match(/^name[01]$/))return;const i=Number(e.target.name.slice(-1)),legend=main.querySelector('[data-person-group="'+i+'"] legend');if(legend)legend.textContent=e.target.value;});
root.addEventListener('submit',e=>{if(active&&e.target.id==='rl-setup'){e.preventDefault();prepareGame();}});
root.addEventListener('change',e=>{if(!active)return;if(view==='setup'&&/^(body[01]|level|pref[01]-\d+)$/.test(e.target.name)){updateSetupHints();if(/^body[01]$/.test(e.target.name))rememberAnatomy(draft.anatomy);return;}if(e.target.id!=='tm-language')return;captureDraft();app.language=e.target.value==='es-419'?'es':'en';window.tryMeSettings?.rememberLanguage();refresh();});
function refresh(){if(!active)return;rlCancelCharge();rlSwipe=null;captureDraft();if(busy){epoch++;busy=false;}render();}
dialog.addEventListener('close',()=>{if(!dialog.open&&dialogMode)finishDialog();});
function pauseAway(){if(!active||!s||view!=='game'||s.phase==='end')return;rlCancelCharge();rlSwipe=null;rlThrow=null;resumeAfter=null;pauseTime();epoch++;busy=false;pausedAway=true;if(dialog.open)dialog.close();render();}
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden')pauseAway();else if(active&&view==='game'&&!pausedAway&&s?.phase==='playing'&&!s.paused&&s.seconds>0)keepAwake(true);});
window.addEventListener('pagehide',pauseAway);
window.addEventListener('pageshow',e=>{if(e.persisted&&active&&s&&view==='game')pauseAway();});
window.addEventListener('popstate',()=>{if(active){if(dialog.open)closeDialog();else exit();}});
window.addEventListener('resize',()=>{if(active)syncCubes();});
window.rollGame={get active(){return active;},back(){if(!active||busy)return;if(dialog.open)closeDialog(false);perform('games');},enter,refresh,clearSaved};
})();
