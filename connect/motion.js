/* Connect object transitions, adapted from Connect_transiciones_prototipo_1.html. */
(function(){
'use strict';
const app=window.tryMeApp,E=window.TryMeConnectEngine;
const copy={en:{open:'Open',swipeOpen:'Swipe up to open',for:'For {name}',notebook:'Notebook',openBook:'Open the notebook',inside:'Both answers are inside',save:'Save',flip:'Tap to flip',pencil:'Pass the speaking pencil',floor:'has the floor',nailed:'Nailed it!',warm:'Warm',cold:'Cold',extra:'One more question',next:'Next card',count:'Count',matched:'We matched',nope:'Different',matchQuestion:'Did you point to the same person?',inTime:'In time!',stuck:'Stuck',up:'Slide up',temperature:'Temperature',only:'Only you see this',skip:'Skip animation',timely:'In time',stalled:'Stuck'},es:{open:'Abrir',swipeOpen:'Desliza hacia arriba para abrir',for:'Para {name}',notebook:'Libreta',openBook:'Abrir la libreta',inside:'Las dos respuestas están dentro',save:'Guardar',flip:'Toca para voltear',pencil:'Pasar el lápiz de la palabra',floor:'tiene la palabra',nailed:'¡Le atinaste!',warm:'Caliente',cold:'Frío',extra:'Una pregunta más',next:'Siguiente tarjeta',count:'Contar',matched:'Coincidimos',nope:'Distinto',matchQuestion:'¿Señalaron a la misma persona?',inTime:'¡A tiempo!',stuck:'Se trabó',up:'Desliza hacia arriba',temperature:'Temperatura',only:'Solo tú ves esto',skip:'Saltar animación',timely:'A tiempo',stalled:'Se trabó'}};
let timers=[],pending=null,visualPending=null,context=null,emit=null,previous=null,lastRevealId=null,lastCount=null,revision=0,openingFolder=false;
const animating=new Set();
const reduced=()=>app.reducedMotion===true;
const later=(fn,ms)=>{const t=setTimeout(fn,ms);timers.push(t);return t;};
const buzz=()=>{try{if(app.soundEnabled!==false)navigator.vibrate?.(15);}catch{}};
const $=(s,r=context?.main)=>r?.querySelector(s);
function flush(){if(pending){const done=pending;pending=null;timers.forEach(clearTimeout);timers=[];done();}if(visualPending){const done=visualPending;visualPending=null;timers.forEach(clearTimeout);timers=[];done();}}
function mark(el){if(el){el.classList.add('cnm-animating');animating.add(el);}return el;}
function unmark(){animating.forEach(el=>el.classList.remove('cnm-animating'));animating.clear();}
function frame(fn){const version=revision;requestAnimationFrame(()=>{if(version===revision)fn();});}
function cleanup(){revision++;timers.forEach(clearTimeout);timers=[];pending=null;visualPending=null;lastCount=null;unmark();}
function reset(phone){clearPages();cleanup();phone?.classList.remove('cn-desire-warm','cn-reduced');previous=null;lastRevealId=null;}
function transition(commit,ms,effect){let finished=false;pending=()=>{if(finished)return;finished=true;pending=null;unmark();commit();};if(reduced()){$('.cn-card')?.animate?.([{opacity:.45},{opacity:1}],{duration:150});later(flush,150);}else{effect?.();later(flush,ms);}return true;}
// Same pointer tracking and relative threshold as the prototype. Cancellation always restores the object.
function drag(el,{axis='y',threshold=.35,onMove,onDone,onCancel}){
 let start=null,dist=0;
 const size=()=>axis==='y'?el.offsetHeight:el.offsetWidth;
 el.addEventListener('pointerdown',e=>{if(e.button>0||e.target.closest('button,input,textarea,select')&&e.target!==el)return;start=axis==='y'?e.clientY:e.clientX;dist=0;el.setPointerCapture?.(e.pointerId);el.style.transition='none';});
 el.addEventListener('pointermove',e=>{if(start===null)return;dist=(axis==='y'?e.clientY:e.clientX)-start;onMove(dist);});
 el.addEventListener('pointerup',()=>{if(start===null)return;start=null;el.style.transition='';(Math.abs(dist)>size()*threshold?onDone:onCancel)(dist);});
 el.addEventListener('pointercancel',()=>{if(start===null)return;start=null;el.style.transition='';onCancel(dist);});
}
const iconCircle=(color,delay=0)=>`<svg class="cnm-answer-circle" viewBox="0 0 120 40" preserveAspectRatio="none" aria-hidden="true"><path style="stroke:${color};animation-delay:${delay}s" d="M8 22 C 10 6, 108 2, 114 18 C 118 34, 20 40, 8 26 C 4 18, 30 6, 60 6"/></svg>`;
function answerInk(container,animate=false){container.querySelectorAll('.cn-answer-block').forEach((b,i)=>{b.classList.add('cnm-answer',i?'cnm-ana':'cnm-first');if(animate){b.classList.add('cnm-writein');b.style.animationDelay=E.family(context.current)==='PICK'?'0s':i?'.45s':'0s';}if(E.family(context.current)==='PICK'&&!b.querySelector('.cnm-answer-circle')){b.querySelector('.cn-answer-text')?.insertAdjacentHTML('beforeend',iconCircle(i?'var(--ana)':'var(--ink)',0));}});}
function setPencil(pencil,label,side,animate=true){
 const w=pencil.parentElement.clientWidth;
 if(!animate)pencil.style.transition=label.style.transition='none';
 pencil.style.setProperty('--x',side?(w-90)+'px':'6px');
 pencil.style.setProperty('--r',side?'180deg':'0deg');
 label.style.setProperty('--x',side?(w-118)+'px':'6px');
 if(animate){pencil.style.setProperty('--y','-12px');later(()=>pencil.style.setProperty('--y','0px'),280);}
}
function pencil(card,action,side,old){const c=context,w=copy[c.language],n=c.names;
 const row=document.createElement('div');row.className='cnm-speakers';
 row.innerHTML=`<span class="cnm-pencil-label">${c.esc(w.floor)}</span><button type="button" class="cnm-pencil" data-cn="${action}" aria-label="${c.esc(w.pencil)}"><svg viewBox="0 0 84 22" aria-hidden="true"><polygon points="0,11 14,4 14,18" fill="#D9B48F"/><polygon points="0,11 5,8.6 5,13.4" fill="#473B40"/><rect x="14" y="4" width="50" height="14" fill="#6F5766"/><rect x="14" y="4" width="50" height="4" fill="#7E6575"/><rect x="14" y="14" width="50" height="4" fill="#5E4957"/><rect x="64" y="3.5" width="8" height="15" fill="#A39590"/><rect x="72" y="3.5" width="11" height="15" rx="3" fill="#DCCBD3"/></svg></button><span class="cnm-n cnm-l">${c.esc(n[0])}</span><span class="cnm-n cnm-r">${c.esc(n[1])}</span>`;
 card.parentElement.insertBefore(row,card.nextSibling);
 const p=row.querySelector('.cnm-pencil'),label=row.querySelector('.cnm-pencil-label');
 if(['OPEN','US'].includes(E.family(c.current))&&c.pencilPasses>=3)p.disabled=true;
 const before=old?.id===c.current.id&&old.side!=null?old.side:side,travel=before!==side&&!reduced();
 previous.side=side;setPencil(p,label,travel?before:side,false);
 if(travel)visualPending=()=>{revision++;p.style.setProperty('--y','0px');setPencil(p,label,side,false);p.style.transition=label.style.transition='';};
 // Two frames ensure Safari paints the old position before enabling the transform.
 frame(()=>{p.style.transition=label.style.transition='';frame(()=>{
  if(!travel)return;setPencil(p,label,side,true);buzz();later(flush,550);
 });});
}
function inkMarkup(score){const c=context,w=copy[c.language];return `<div class="cnm-ink cnm-settled" role="status">${c.esc(w[score===2?'nailed':score===1?'warm':'cold'])}</div>`;}
function guessBlock(card){return card.querySelector('[data-cn-answer-role="guess"]');}
function faces(card,w){
 const front=document.createElement('div');front.className='cnm-face cnm-front';
 for(const node of [...card.childNodes])front.appendChild(node);
 const back=document.createElement('div');back.className='cnm-face cnm-back cnm-down';back.setAttribute('aria-hidden','true');back.inert=true;
 back.innerHTML=`<span class="cnm-label">${context.esc(context.familyLabel)}</span><span>${context.esc(w.flip)}</span>`;
 card.appendChild(front);card.appendChild(back);
}
function flipNewCard(card){
 const done=()=>{card.classList.remove('cnm-flip-in');card.style.transform='';unmark();};visualPending=done;
 if(reduced()){card.animate?.([{opacity:.65},{opacity:1}],{duration:120});later(flush,120);return;}
 mark(card);card.classList.add('cnm-flip-in');later(flush,600);buzz();
}
function dots(card){const c=context,count=c.current.items.length;card.insertAdjacentHTML('afterbegin',`<div class="cnm-dots" aria-label="${c.roundIndex}/${count}">${Array.from({length:count},(_,i)=>`<i aria-hidden="true" class="${c.roundMarks[i]==='hit'?'cnm-hit':c.roundMarks[i]==='miss'?'cnm-miss':c.roundMarks[i]==='skip'?'cnm-skipped':''}"></i>`).join('')}</div>`);}
function roundButtons(card,family){const c=context,w=copy[c.language],controls=$('.cn-controls');
 if(family==='WHO'){
  const group=document.createElement('div');group.className='cnm-duo';group.setAttribute('role','group');group.setAttribute('aria-label',w.matchQuestion);card.insertAdjacentHTML('beforeend',`<p class="cnm-match-question">${c.esc(w.matchQuestion)}</p>`);
  for(const [a,mark,key]of [['matched','✓','matched'],['nope','✗','nope']]){const b=$('[data-cn="'+a+'"]');if(b){b.className='cnm-round-btn '+(a==='matched'?'cnm-yes':'cnm-no');b.innerHTML=`<span class="cnm-choice-label">${c.esc(w[key])}</span>`;group.appendChild(b);}}
  card.appendChild(group);
 }else{
  card.classList.add('cnm-strip-area');const q=card.querySelector('.cn-prompt');q?.classList.add('cnm-strip','cnm-slideIn');
  const halves=document.createElement('div');halves.className='cnm-halves';
  for(const [a,key]of [['inTime','inTime'],['stuck','stuck']]){const b=$('[data-cn="'+a+'"]');if(b){b.className='';b.textContent=w[key];halves.appendChild(b);}}
  card.appendChild(halves);
  const clock=$('#cn-step-clock');if(clock){const ring=document.createElement('div');ring.className='cnm-ring';ring.innerHTML='<svg viewBox="0 0 110 110" width="110" height="110" aria-hidden="true"><circle class="cnm-t" cx="55" cy="55" r="48"/><circle class="cnm-f" cx="55" cy="55" r="48" stroke-dasharray="301.593" stroke-dashoffset="0"/></svg>';clock.className='cnm-num';clock.parentNode.insertBefore(ring,clock);ring.appendChild(clock);}
  card.insertAdjacentHTML('beforeend',`<div class="cnm-tally"><span>${c.esc(w.timely)}: ${c.roundMarks.filter(x=>x==='hit').length}</span><span>${c.esc(w.stalled)}: ${c.roundMarks.filter(x=>x==='miss').length}</span></div>`);
 }
 controls?.classList.add('cnm-round-controls');
}
function ending(card,controls){const c=context,w=copy[c.language];card.classList.add('cnm-ending');controls.inert=true;controls.style.opacity='0';
 const book=document.createElement('div');book.className='cnm-close-book cnm-pad';book.innerHTML=`<div class="cnm-sheet"><div class="cnm-hand">${c.esc(c.names.join(' · '))}</div></div><button type="button" class="cnm-cover" data-cn="finishAnimation" aria-label="${c.esc(w.skip)}" style="transform:rotateX(172deg)"><span class="cnm-label">${c.esc(w.notebook)}</span></button>`;card.appendChild(book);
 visualPending=()=>{unmark();book.remove();card.classList.remove('cnm-ending');card.classList.add('cnm-recap-in');controls.inert=false;controls.style.opacity='';};
 if(reduced()){later(flush,150);return;}frame(()=>{const cover=book.querySelector('.cnm-cover');mark(cover).classList.add('cnm-closing');cover.style.transform='rotateX(0deg)';});later(flush,450);
}
function dial(card,result=false){const c=context,w=copy[c.language],labels=c.language==='es'?['Tierno','Caliente']:['Sweet','Hot'],agreed=result&&c.s.permissions.desire;
 card.insertAdjacentHTML('beforeend',`<div class="cnm-dial ${result?'cnm-temperature-result':''}" ${result?'role="img"':`role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="2" aria-valuenow="0" aria-valuetext="${labels[0]}" aria-orientation="vertical"`} aria-label="${c.esc(w.temperature)}"><div class="cnm-thermometer" aria-hidden="true"><span class="cnm-column"></span><i></i></div><div class="cnm-temp"><span class="cnm-temp-value">${labels[agreed?1:0]}</span>${!result?`<small>${c.esc(w.up)}</small>`:''}</div></div>`);
 const d=card.querySelector('.cnm-dial'),value=d.querySelector('.cnm-temp-value');let temp=agreed?2:0,y0=null,t0=0;
 const set=t=>{temp=Math.max(0,Math.min(2,t));const label=labels[temp>=1.8?1:0];value.textContent=label;d.setAttribute('aria-valuenow',String(Math.round(temp)));d.setAttribute('aria-valuetext',label);d.style.setProperty('--heat',String(temp/2));card.style.backgroundColor=temp>=1?'var(--mauve)':'var(--paper)';};set(temp);
 if(result){d.setAttribute('aria-label',w.temperature+': '+labels[agreed?1:0]);d.removeAttribute('aria-valuenow');d.removeAttribute('aria-valuetext');return;}
 d.addEventListener('pointerdown',e=>{y0=e.clientY;t0=temp;d.setPointerCapture?.(e.pointerId);});d.addEventListener('pointermove',e=>{if(y0!==null)set(t0+(y0-e.clientY)/54);});d.addEventListener('pointerup',()=>{y0=null;if(temp>=1.8)emit('yes');});d.addEventListener('pointercancel',()=>{y0=null;set(0);});
 d.addEventListener('keydown',e=>{if(['ArrowUp','ArrowDown','Home','End','Enter',' '].includes(e.key))e.preventDefault();if(e.key==='ArrowUp'){set(temp+1);if(temp>=2)emit('yes');}else if(e.key==='ArrowDown')set(temp-1);else if(e.key==='Home')set(0);else if(e.key==='End'){set(2);emit('yes');}else if(e.key==='Enter'||e.key===' ')emit('yes');});
}
function ear(card){const c=context,w=copy[c.language];if(!c.canFollow||card.querySelector('.cnm-ear'))return;const host=card.querySelector('.cnm-reveal-sheet')||card;host.classList.add('cnm-has-ear');host.insertAdjacentHTML('beforeend',`<button type="button" class="cnm-ear cnm-show" data-cn="stay" aria-label="${c.esc(w.extra)}"><span>${c.esc(w.extra)}</span></button>`);}
function bind(c,send){context=c;emit=send;const card=$('.cn-card'),controls=$('.cn-controls'),w=copy[c.language];if(!card)return;
 const family=c.current?E.family(c.current):null,old=previous,newCard=old?.id!==c.current?.id;
 if(newCard){lastRevealId=null;}previous={id:c.current?.id,phase:c.phase,view:c.view,s:c.s};
 c.phone.classList.toggle('cn-desire-warm',['card','handoff'].includes(c.view)&&c.current?.safety==='Desire opt in'||c.view==='permission-result'&&c.permissionKind==='desire'&&c.s?.permissions.desire===true);
 if(!c.main.querySelector(':scope > .cn-warm-glow')&&c.main.querySelector(':scope > .tm-scene'))c.main.insertAdjacentHTML('afterbegin','<div class="cn-warm-glow" aria-hidden="true"></div>');
 if(c.view==='handoff'||c.view==='permission-handoff'){
  const action=c.view==='handoff'?'ready':'voteready',name=c.names[c.view==='handoff'?c.answerTurn:c.permissionTurn];
  card.classList.add('cnm-folder-host');card.innerHTML=`<div class="cnm-folder" role="button" tabindex="0" aria-label="${c.esc(w.swipeOpen)}"><div class="cnm-tab">${c.esc(w.for.replace('{name}',name))}</div><div class="cnm-stamp-only">${c.esc((c.language==='es'?'Solo para ':'Only for ')+name).toUpperCase()}</div><h3>${c.esc(c.t('handoff',{name}))}</h3><p>${c.esc(c.t('private'))}</p><div class="cnm-grip" aria-hidden="true">↑</div><small>${c.esc(w.swipeOpen)}</small></div><svg class="cnm-clip" viewBox="0 0 22 58" aria-hidden="true"><path d="M7 50V12a5 5 0 0 1 10 0v34a8 8 0 0 1-16 0V16" fill="none" stroke="#8a7f84" stroke-width="2.4" stroke-linecap="round"/></svg>`;
  const fallback=$('[data-cn="'+action+'"]');if(fallback){fallback.textContent=w.open;fallback.classList.add('cnm-handoff-open');}
  controls.classList.add('cnm-handoff-actions');const pass=controls.querySelector('[data-cn="pass"]');pass?.classList.add('cnm-handoff-pass');
  const folder=card.querySelector('.cnm-folder');drag(folder,{axis:'y',onMove:d=>{if(!reduced())folder.style.transform=`rotateX(${-Math.min(168,Math.max(0,-d)/Math.max(1,folder.offsetHeight)*230)}deg)`;},onDone:d=>{if(d<0)emit(action);else{folder.classList.add('cnm-go');folder.style.transform='';}},onCancel:()=>{folder.classList.add('cnm-go');folder.style.transform='';}});
  folder.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();emit(action);}});
  return;
 }
 if(c.view==='permission'&&c.permissionKind==='desire'){dial(card);return;}
 if(c.view==='permission-result'&&c.permissionKind==='desire'){dial(card,true);return;}
 if(c.view==='final'){if(c.s?.complete&&old?.view!=='final')ending(card,controls);return;}
 if(c.view!=='card')return;
 if(c.phase==='answer'){
  card.classList.add('cnm-pad','cnm-sheet');const lock=$('#cn-lock');if(lock){lock.classList.add('cnm-corner');lock.textContent=w.save;lock.setAttribute('aria-label',c.t('lock'));card.appendChild(lock);}const text=$('#cn-answer');text?.classList.add('cnm-hand');const page=document.createElement('div');page.className='cnm-writing-page';for(const node of [...card.childNodes])if(node!==lock)page.appendChild(node);card.insertBefore(page,lock);card.insertAdjacentHTML('beforeend',`<div class="cnm-save-cover cnm-cover" aria-hidden="true" style="transform:rotateX(172deg)"><span class="cnm-label">${c.esc(w.notebook)}</span></div><div class="cnm-tabs"><span>${c.esc(c.names[c.answerTurn])} ✓</span></div>`);return;
 }
 if(c.phase==='readyreveal'){
  card.classList.add('cnm-pad','cnm-book');card.innerHTML=`<div class="cnm-sheet cnm-reveal-sheet" style="visibility:hidden"><div class="cnm-reveal-content"></div></div><button type="button" class="cnm-cover" data-cn="reveal" aria-label="${c.esc(w.openBook)}"><span class="cnm-label">${c.esc(w.notebook)}</span><span class="cnm-sub">${c.esc(w.openBook)}</span><span class="cnm-band"></span></button><div class="cnm-tabs">${c.names.map(n=>'<span class="cnm-in">'+c.esc(n)+' ✓</span>').join('')}</div>`;
  controls.querySelector('[data-cn="reveal"]')?.remove();controls.insertAdjacentHTML('beforeend',`<p class="cn-note cnm-inside">${c.esc(w.inside)}</p>`);return;
 }
 if(['PICK','GUESS','REVEAL'].includes(family)&&['reveal','after','layer'].includes(c.phase)){
  card.classList.add('cnm-pad',c.phase==='layer'?'cnm-sheet':'cnm-book');answerInk(card,c.phase==='reveal'&&lastRevealId!==c.current.id);lastRevealId=c.current.id;
  card.querySelector('.cnm-tabs')?.remove();
  if(family==='GUESS'&&c.phase==='reveal'){
   guessBlock(card)?.classList.add('cnm-guess');const group=document.createElement('div');group.className='cnm-stamps';for(const a of ['rate2','rate1','rate0']){const b=$('[data-cn="'+a+'"]');if(b){b.className='cnm-stamp';b.innerHTML='<span class="cnm-handle" aria-hidden="true"></span><span class="cnm-base" aria-hidden="true"></span>'+c.esc(w[a==='rate2'?'nailed':a==='rate1'?'warm':'cold']);group.appendChild(b);}}controls.appendChild(group);
  }else if(family==='GUESS'&&c.phase==='after'){const guess=guessBlock(card);guess?.classList.add('cnm-guess');if(guess&&!guess.querySelector('.cnm-ink'))guess.insertAdjacentHTML('beforeend',inkMarkup(c.score));}
 }
 if(['OPEN','LISTEN','US'].includes(family)){
  card.classList.add('cnm-live-card');if(c.phase==='cardback'){card.classList.add('cnm-facedown');const flip=card.querySelector('.cnm-turn-card');drag(flip,{axis:'x',threshold:.25,onMove:d=>{if(!reduced())flip.style.transform=`translateX(${d/3}px)`;},onDone:()=>emit('flip'),onCancel:()=>{flip.style.transform='';}});return;}
  if(c.phase==='spoken'||c.phase==='speak'||c.phase==='reflect'||c.phase==='conversation'){
   let action,side;if(family==='OPEN'){side=c.conversationReady?c.usSpeaker:(c.speaker+c.spokenTurn)%2;action=c.spokenTurn?'finishSpeaking':'spokenNext';}else if(family==='LISTEN'){side=c.phase==='speak'?c.speaker:1-c.speaker;action=c.phase==='speak'?'reflect':'after';}else{side=c.usSpeaker;action='switchSpeaker';}
   pencil(card,action,side,old);const fallback=$('[data-cn="'+action+'"]',controls);fallback?.classList.add('cnm-fallback');
  }
  ear(card);faces(card,w);if(old?.id===c.current.id&&old.phase==='cardback')flipNewCard(card);
  const next=$('[data-cn="next"]');if(next)next.classList.add('cnm-fallback');
  const allowed=c.phase==='layer'||c.phase==='after'||c.phase==='conversation'||c.phase==='spoken'&&c.spokenTurn===1;
  if(allowed)drag(card,{axis:'x',threshold:.3,onMove:d=>{if(!reduced())card.style.transform=`translateX(${d}px) rotate(${d/18}deg)`;},onDone:d=>{card.dataset.flySide=d<0?'-1':'1';emit('next');},onCancel:()=>{card.style.transform='';}});
 }
 if(['WHO','FINISH'].includes(family)){
  dots(card);
  if(c.phase==='roundintro'||c.phase==='roundready'){
   const start=$('[data-cn="roundStart"]');if(start){start.className='cnm-round-btn cnm-yes';start.innerHTML='<b aria-hidden="true">3·2·1</b>'+c.esc(w.count);card.appendChild(start);}if(c.phase==='roundready'){const p=card.querySelector('.cn-prompt');if(p){p.textContent=family==='WHO'?c.whoItem(c.current.items[c.roundIndex]):c.raw(c.current.items[c.roundIndex]);p.classList.add('cnm-slideIn');}}
  }else if(c.phase==='round'){roundButtons(card,family);}
 }
 ear(card);
 update(c,c.s?.pauseAt?c.stepLeft:Math.max(0,c.stepEnd-Date.now()));
}
function update(c,deadline){if(c.view!=='card'||c.phase!=='round')return;const family=E.family(c.current),clock=c.main.querySelector('#cn-step-clock'),seconds=Math.ceil(deadline/1000);
 if(family==='WHO'){
  const group=c.main.querySelector('.cnm-duo');if(group)group.hidden=seconds>0;const question=c.main.querySelector('.cnm-match-question');if(question)question.hidden=seconds>0;
  if(clock&&lastCount!==seconds){lastCount=seconds;clock.classList.remove('cnm-count','cnm-pop');void clock.offsetWidth;clock.classList.add(seconds?'cnm-count':'cnm-pop');if(seconds===0)buzz();}
 }else if(family==='FINISH'){c.main.querySelector('.cnm-ring .cnm-f')?.setAttribute('stroke-dashoffset',String(301.593*(1-Math.min(1,deadline/3000))));}
}
function clipHalf(poly,f){const out=[];for(let i=0;i<poly.length;i++){const A=poly[i],B=poly[(i+1)%poly.length],fa=f(A),fb=f(B);if(fa>=0)out.push(A);if((fa>=0)!==(fb>=0)){const t=fa/(fa-fb);out.push([A[0]+(B[0]-A[0])*t,A[1]+(B[1]-A[1])*t]);}}return out;}
const polyCss=pts=>pts.length>=3?`polygon(${pts.map(p=>p[0].toFixed(1)+'px '+p[1].toFixed(1)+'px').join(',')})`:'polygon(0 0,0 0,0 0)';
function bendPage(t,P){
 const {W,H,front,flap,shade,gloss}=t,dx=W-P[0],dy=H-P[1],len=Math.hypot(dx,dy);
 if(len<.5){front.style.clipPath='none';flap.style.clipPath='polygon(0 0,0 0,0 0)';shade.style.background='none';return;}
 const n=[dx/len,dy/len],M=[(W+P[0])/2,(H+P[1])/2],side=X=>(X[0]-M[0])*n[0]+(X[1]-M[1])*n[1];
 const rect=[[0,0],[W,0],[W,H],[0,H]],keep=clipHalf(rect,X=>-side(X)),cut=clipHalf(rect,side);
 front.style.clipPath=polyCss(keep);front.style.visibility=keep.length<3?'hidden':'visible';
 const a=1-2*n[0]*n[0],b=-2*n[0]*n[1],d=1-2*n[1]*n[1],k=2*(M[0]*n[0]+M[1]*n[1]);
 flap.style.transform=`matrix(${a},${b},${b},${d},${k*n[0]},${k*n[1]})`;flap.style.clipPath=polyCss(cut);
 const ang=Math.atan2(n[1],n[0])*180/Math.PI+90,L=W*Math.abs(n[0])+H*Math.abs(n[1]),sp=(M[0]-W/2)*n[0]+(M[1]-H/2)*n[1]+L/2,dist=Math.min(70,len*.3);
 gloss.style.background=`linear-gradient(${ang}deg,rgba(71,59,64,.14) ${sp}px,rgba(255,255,255,.55) ${sp+3}px,rgba(255,255,255,0) ${sp+80}px,rgba(71,59,64,.06) ${L}px)`;
 shade.style.clipPath=polyCss(keep);shade.style.background=`linear-gradient(${ang}deg,rgba(71,59,64,0) ${sp-dist}px,rgba(71,59,64,.2) ${sp}px,rgba(71,59,64,0) ${sp+1}px)`;
}
function paperRustle(){try{if(app.soundEnabled===false)return;const A=window.AudioContext||window.webkitAudioContext;if(!A)return;const ac=paperRustle.ctx||(paperRustle.ctx=new A());if(ac.state==='suspended')ac.resume()?.catch(()=>{});const n=Math.floor(ac.sampleRate*.35),buf=ac.createBuffer(1,n,ac.sampleRate),ch=buf.getChannelData(0);for(let i=0;i<n;i++)ch[i]=(Math.random()*2-1)*Math.sin(Math.PI*i/n)*.6;const s=ac.createBufferSource(),f=ac.createBiquadFilter(),g=ac.createGain();s.buffer=buf;f.type='bandpass';f.frequency.setValueAtTime(1800,ac.currentTime);f.frequency.linearRampToValueAtTime(4200,ac.currentTime+.35);f.Q.value=.7;g.gain.value=.18;s.connect(f).connect(g).connect(ac.destination);s.start();}catch{}}
const pageHosts=new Set();
function clearPages(){pageHosts.forEach(host=>host.remove());pageHosts.clear();}
function pageTurn(card){
 if(reduced()||!card)return;const phone=card.closest('.tm-phone');if(!phone)return;clearPages();
 const r=card.getBoundingClientRect(),pr=phone.getBoundingClientRect(),W=r.width,H=r.height;if(!W||!H)return;
 const host=document.createElement('div');host.className='cnm-turn';host.setAttribute('aria-hidden','true');Object.assign(host.style,{position:'absolute',left:(r.left-pr.left)/ (pr.width/phone.offsetWidth||1)+'px',top:(r.top-pr.top)/(pr.height/phone.offsetHeight||1)+'px',width:W+'px',height:H+'px',zIndex:60,pointerEvents:'none'});
 const clean=el=>{el.querySelectorAll('[id]').forEach(e=>e.removeAttribute('id'));el.removeAttribute('id');el.setAttribute('aria-hidden','true');el.inert=true;return el;};
 const front=clean(card.cloneNode(true)),flap=clean(card.cloneNode(true)),shade=document.createElement('div'),flapW=document.createElement('div'),gloss=document.createElement('div');
 [front,flap].forEach(el=>Object.assign(el.style,{position:'absolute',left:'0',top:'0',width:W+'px',height:H+'px',minHeight:'0',maxHeight:'none',boxSizing:'border-box',margin:'0',transform:'none',transformOrigin:'0 0',animation:'none',transition:'none'}));
 flap.classList.add('cnm-turn-back');shade.className='cnm-turn-shade';flapW.className='cnm-turn-flapw';gloss.className='cnm-turn-gloss';flap.appendChild(gloss);flapW.appendChild(flap);
 host.append(front,shade,flapW);if(getComputedStyle(phone).position==='static')phone.style.position='relative';phone.appendChild(host);pageHosts.add(host);
 const st={W,H,front,flap,shade,gloss},from=[W,H],to=[-W-60,H*.92],t0=performance.now(),ms=900;paperRustle();buzz();bendPage(st,from);
 const step=now=>{if(!host.isConnected||reduced()){host.remove();pageHosts.delete(host);return;}const t=Math.min(1,(now-t0)/ms),e=t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,lift=Math.sin(Math.PI*e)*H*.32;
  bendPage(st,[from[0]+(to[0]-from[0])*e,from[1]+(to[1]-from[1])*e-lift]);if(t<1)requestAnimationFrame(step);else{host.remove();pageHosts.delete(host);}};
 requestAnimationFrame(step);
}
function intercept(a,b,c,commit){context=c;if(pending||visualPending)flush();const card=$('.cn-card');if(!card)return false;
 if(['ready','voteready'].includes(a)&&['handoff','permission-handoff'].includes(c.view)&&reduced()){commit();return true;}
 if(['ready','voteready'].includes(a)&&['handoff','permission-handoff'].includes(c.view))return transition(()=>{openingFolder=true;try{commit();}finally{openingFolder=false;}},reduced()?0:550,()=>{const f=mark($('.cnm-folder'));f?.classList.add('cnm-go');if(f)f.style.transform='rotateX(-168deg)';buzz();});
 if(a==='lock'&&c.phase==='answer')return transition(commit,1100,()=>{
  mark(card);$('.cnm-writing-page')?.classList.add('cnm-fold');const cover=mark($('.cnm-save-cover'));
  cover?.classList.add('cnm-closing');if(cover)cover.style.transform='rotateX(0deg)';buzz();
  later(()=>card.querySelector('.cnm-tabs span')?.classList.add('cnm-in'),450);
  later(()=>card.classList.add('cnm-slideDown'),750);
 });
 if(a==='reveal'&&c.phase==='readyreveal')return transition(commit,1300,()=>{
  const sheet=$('.cnm-reveal-sheet'),content=sheet?.querySelector('.cnm-reveal-content'),cover=mark($('.cnm-cover'));
  if(content){content.innerHTML=c.answerHTML();answerInk(content,true);if(E.family(c.current)==='GUESS')guessBlock(card)?.classList.add('cnm-guess');}
  cover?.querySelector('.cnm-band')?.classList.add('cnm-off');buzz();
  later(()=>{if(sheet)sheet.style.visibility='visible';cover?.classList.add('cnm-open');lastRevealId=c.current.id;},300);
 });
 if(/^rate[012]$/.test(a)&&c.phase==='reveal')return transition(commit,900,()=>{
  const block=guessBlock(card);if(!block)return;
  const page=card.querySelector('.cnm-reveal-content');if(page&&page.clientHeight>0)page.scrollTop=Math.max(0,block.offsetTop+Math.min(block.offsetHeight,page.clientHeight)-page.clientHeight);
  block.insertAdjacentHTML('beforeend',inkMarkup(Number(a.slice(-1))));const ink=block.querySelector('.cnm-ink');ink.classList.remove('cnm-settled');
  // Align the stamp's base with the actual ink on this player's guess.
  const stamp=b||$('[data-cn="'+a+'"]'),base=stamp?.querySelector('.cnm-base');
  if(stamp&&base){const dest=block.getBoundingClientRect(),from=base.getBoundingClientRect();
   stamp.style.setProperty('--stamp-x',(dest.right-6-ink.offsetWidth/2-from.left-from.width/2)+'px');
   stamp.style.setProperty('--stamp-y',(dest.top+4+ink.offsetHeight/2-from.top-from.height/2)+'px');
   mark(stamp).classList.add('cnm-used');}
  later(()=>{ink.classList.add('cnm-on');buzz();},240);
 });
 // Paint first. bind() animates the new card and pencil, so their final DOM stays put.
 if(a==='flip'&&c.phase==='cardback'){commit();return true;}
 if(['spokenNext','reflect','after','finishSpeaking','switchSpeaker'].includes(a)&&['spoken','speak','reflect','conversation'].includes(c.phase)){commit();return true;}
 if(a==='stay'){const prior=card.querySelector('.cnm-front')?.innerHTML;commit();const next=$('.cn-card'),back=next?.querySelector('.cnm-back');if(back&&prior&&!reduced()){back.innerHTML=prior;back.style.background='var(--paper)';back.style.color='var(--ink)';flipNewCard(next);}else if(next){next.animate?.([{opacity:.65},{opacity:1}],{duration:120});}return true;}
 if(['next','doDone','lighter','pass'].includes(a)){if(reduced()){commit();return true;}return transition(commit,40,()=>pageTurn(card));}
 if(['matched','nope','inTime','stuck','skip'].includes(a)&&c.phase==='round')return transition(commit,a==='matched'||a==='nope'?400:450,()=>{const strip=$('.cnm-strip');if(strip)strip.classList.add(a==='inTime'?'cnm-toL':'cnm-toR');else $('.cn-prompt')?.classList.add('cnm-slide-out');buzz();});
 if(a==='yes'&&c.view==='permission'&&c.permissionKind==='desire')return transition(commit,350,()=>{const d=$('.cnm-dial');d?.setAttribute('aria-valuenow','2');d?.setAttribute('aria-valuetext',c.language==='es'?'Caliente':'Hot');d?.style.setProperty('--heat','1');const v=$('.cnm-temp-value');if(v)v.textContent=c.language==='es'?'Caliente':'Hot';card.style.backgroundColor='var(--mauve)';buzz();});
 return false;
}
window.TryMeConnectMotion={get openingFolder(){return openingFolder;},get busy(){return !!(pending||visualPending);},bind,update,intercept,cleanup,flush,reset,drag,words:language=>copy[language]};
})();
