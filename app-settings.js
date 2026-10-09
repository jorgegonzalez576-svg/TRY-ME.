/* Try Me · Ajustes (hoja inferior). Claves: tryme-app-settings-v1 → {sound, vibration, motion, language}. */
(function(){
'use strict';
const app=window.tryMeApp,root=document.getElementById('tryme-preview'),dialog=document.createElement('dialog');
dialog.className='tm-settings';dialog.id='tm-app-settings';dialog.setAttribute('aria-labelledby','tm-settings-title');root.appendChild(dialog);
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const copy={
 en:{settings:'Settings',language:'Language',names:'Our names',name:'Name',save:'Save names',sound:'Sound',vibration:'Vibration',motion:'Animations',full:'Full',reduced:'Reduced',system:'Follow phone setting',privacy:'Privacy',crave:'Delete saved Crave game',history:'Delete Connect history',confirm:'Delete this data from this device?',delete:'Delete',cancel:'Cancel',help:'Help',about:'About Try Me',notice:"For adults 18 and older. Try Me is entertainment, not couples therapy or professional help.",version:'Version',close:'Close',back:'← Back',error:'Could not save this change on this device.',deleted:'Deleted.'},
 es:{settings:'Ajustes',language:'Idioma',names:'Nuestros nombres',name:'Nombre',save:'Guardar nombres',sound:'Sonido',vibration:'Vibración',motion:'Animaciones',full:'Completas',reduced:'Reducidas',system:'Seguir la opción del teléfono',privacy:'Privacidad',crave:'Borrar partida guardada de Crave',history:'Borrar historial de Connect',confirm:'¿Borrar estos datos de este dispositivo?',delete:'Borrar',cancel:'Cancelar',help:'Ayuda',about:'Sobre Try Me',notice:'Solo para mayores de 18 años. Try Me es entretenimiento; no sustituye la terapia de pareja ni la ayuda profesional.',version:'Versión',close:'Cerrar',back:'← Volver',error:'No se pudo guardar este cambio en el dispositivo.',deleted:'Listo, se borró.'}};
const VERSION='3.0 · 1a';
const key='tryme-app-settings-v1',media=window.matchMedia('(prefers-reduced-motion: reduce)');
const canVibrate=typeof navigator.vibrate==='function';
let prefs={sound:true,vibration:true,motion:'system',language:/^es\b/i.test(navigator.language||'')?'es':'en'},panel='main',pending=null,error='',status='';
try{const p=JSON.parse(localStorage.getItem(key)||'null');if(p){prefs.sound=p.sound!==false;prefs.vibration=p.vibration!==false;prefs.motion=['full','reduced','system'].includes(p.motion)?p.motion:'system';if(['es','en'].includes(p.language))prefs.language=p.language;}}catch{}
// La vibración respeta su propio ajuste (Safari en iPhone no ofrece la API: el interruptor se oculta).
if(canVibrate){const native=navigator.vibrate.bind(navigator);try{navigator.vibrate=function(pattern){return prefs.vibration?native(pattern):false;};}catch{}}
const reduced=()=>prefs.motion==='reduced'||prefs.motion==='system'&&media.matches;
const c=()=>copy[app.language==='es'?'es':'en'],t=k=>c()[k];
function apply(){app.soundEnabled=prefs.sound;root.dataset.motion=reduced()?'reduced':'full';}
function persist(){try{localStorage.setItem(key,JSON.stringify(prefs));error='';}catch{error='error';}}
const chevron=(a,label,value='')=>`<button type="button" class="tm-row" data-setting="${a}"><span>${esc(label)}</span>${value?`<span class="tm-row-value">${esc(value)}</span>`:''}<span class="tm-row-chev" aria-hidden="true"></span></button>`;
const btn=(a,k,kind='tm-action')=>`<button type="button" class="${kind}" data-setting="${a}">${esc(t(k))}</button>`;
function paint(){
 let body='';const es=app.language==='es';
 if(panel==='main'){
  const names=app.profiles.filter(n=>n&&n.trim());
  body=`<div class="tm-group"><div class="tm-row" role="group" aria-label="${esc(t('language'))}"><span>${esc(t('language'))}</span><span class="tm-seg"><button type="button" data-setting="lang-es" aria-pressed="${es}" lang="es">Español</button><button type="button" data-setting="lang-en" aria-pressed="${!es}" lang="en">English</button></span></div><label class="tm-row" for="tm-set-sound"><span>${esc(t('sound'))}</span><input type="checkbox" role="switch" class="tm-switch" id="tm-set-sound" ${prefs.sound?'checked':''}></label>${canVibrate?`<label class="tm-row" for="tm-set-vibration"><span>${esc(t('vibration'))}</span><input type="checkbox" role="switch" class="tm-switch" id="tm-set-vibration" ${prefs.vibration?'checked':''}></label>`:''}</div>
<p class="tm-kicker tm-group-label" id="tm-set-motion-label">${esc(t('motion'))}</p><div class="tm-group" role="radiogroup" aria-labelledby="tm-set-motion-label">${['system','full','reduced'].map(v=>`<label class="tm-row" for="tm-set-motion-${v}"><span>${esc(t(v))}</span><input type="radio" class="tm-radio" name="tm-set-motion" id="tm-set-motion-${v}" value="${v}" ${prefs.motion===v?'checked':''}></label>`).join('')}</div>
<div class="tm-group">${chevron('names',t('names'),names.join(' · '))}${chevron('privacy',t('privacy'))}${chevron('help',t('help'))}${chevron('about',t('about'))}</div>
<p class="tm-legal">${esc(t('notice'))}</p><p class="tm-legal">${esc(t('version'))} ${VERSION}</p>`;
 }
 if(panel==='names')body=app.profiles.map((n,i)=>`<label for="tm-shared-name-${i}">${esc(t('name'))} ${i+1}</label><input id="tm-shared-name-${i}" value="${esc(n)}" maxlength="24" autocomplete="off">`).join('')+btn('save','save');
 if(panel==='privacy')body=btn('deletecrave','crave','tm-secondary')+btn('deletehistory','history','tm-secondary')+(status?`<p role="status">${esc(t(status))}</p>`:'');
 if(panel==='confirm')body=`<p>${esc(t('confirm'))}</p><p><strong>${esc(t(pending==='crave'?'crave':'history'))}</strong></p>${btn('confirm','delete')}${btn('cancel','cancel','tm-secondary')}`;
 if(panel==='about')body=`<p>${esc(t('notice'))}</p><p>${esc(t('version'))} ${VERSION}</p>`;
 const heading=t(panel==='main'?'settings':panel==='confirm'?'privacy':panel);
 dialog.lang=es?'es-419':'en-US';
 dialog.innerHTML=`<div class="tm-settings-head">${panel!=='main'?`<button type="button" class="tm-back" data-setting="back">${esc(t('back'))}</button>`:`<h2 id="tm-settings-title">${esc(heading)}</h2>`}<button type="button" class="tm-close" data-setting="close" aria-label="${esc(t('close'))}"></button></div>${panel!=='main'?`<h2 id="tm-settings-title">${esc(heading)}</h2>`:''}${body}<p class="tm-msg" role="alert">${error?esc(t(error)):''}</p>`;
}
function open(){panel='main';pending=null;error='';status='';paint();if(!dialog.open)dialog.showModal();}
function setLanguage(value){app.language=value;prefs.language=app.language;persist();const select=root.querySelector('#tm-language');if(select)select.value=value==='es'?'es-419':'en-US';app.refresh();window.tryMeShell?.syncLang();}
dialog.addEventListener('click',e=>{if(e.target===dialog){dialog.close();return;}const b=e.target.closest('[data-setting]');if(!b)return;app.click();const a=b.dataset.setting;
 if(a==='close'){dialog.close();return;}
 if(a==='help'){dialog.close();window.connectGame?.showHelp(open);return;}
 if(a==='lang-es'||a==='lang-en'){setLanguage(a==='lang-es'?'es':'en');}
 else if(a==='back'){panel='main';error='';status='';}
 else if(['names','privacy','about'].includes(a)){panel=a;status='';}
 else if(a==='save'){const names=[0,1].map(i=>dialog.querySelector('#tm-shared-name-'+i).value.trim());try{app.profiles=names;panel='main';error='';app.refresh();}catch{error='error';}}
 else if(a.startsWith('delete')){pending=a==='deletecrave'?'crave':'history';panel='confirm';}
 else if(a==='cancel')panel='privacy';
 else if(a==='confirm'){try{if(pending==='crave')app.clearCraveSave();else localStorage.removeItem('tryme-connect-history-v2');error='';status='deleted';panel='privacy';pending=null;app.refresh();}catch{error='error';}}
 paint();});
dialog.addEventListener('change',e=>{
 if(e.target.id==='tm-set-sound')prefs.sound=e.target.checked;
 else if(e.target.id==='tm-set-vibration')prefs.vibration=e.target.checked;
 else if(e.target.name==='tm-set-motion')prefs.motion=e.target.value;
 else return;apply();persist();});
media.addEventListener?.('change',apply);
window.tryMeSettings={open,get reduced(){return reduced();},get vibration(){return prefs.vibration;},rememberLanguage(){prefs.language=app.language;persist();}};
app.language=prefs.language;apply();app.refresh();
})();
