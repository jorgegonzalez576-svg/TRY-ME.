/* Try Me · 1a · shell común: encabezado (volver · nombre · ES/EN · menú), ambiente fotográfico y toast. */
(function(){
'use strict';
const root=document.getElementById('tryme-preview'),phone=root.querySelector('.tm-phone');
const title=root.querySelector('#tm-bar-title'),select=root.querySelector('#tm-language'),meta=document.querySelector('meta[name="theme-color"]');
let themeTimer=null;
function syncLang(){const es=select.value==='es-419';root.querySelectorAll('.tm-lang [data-lang]').forEach(b=>b.setAttribute('aria-pressed',String((b.dataset.lang==='es')===es)));const group=root.querySelector('.tm-lang');if(group)group.setAttribute('aria-label',es?'Idioma':'Language');const back=root.querySelector('[data-shell="back"]');if(back){back.setAttribute('aria-label',es?'Volver':'Back');back.textContent=es?'Volver':'Back';}}
function syncTheme(){clearTimeout(themeTimer);const apply=()=>{if(root.querySelector('.tm-chat-splash'))return;const c=getComputedStyle(phone).backgroundColor;if(c&&c!=='rgba(0, 0, 0, 0)'){meta?.setAttribute('content',c);document.documentElement.style.backgroundColor=c;document.body.style.backgroundColor=c;}};apply();themeTimer=setTimeout(apply,650);}
function world({game,title:name='',place='none'}={}){
 if(game)phone.dataset.game=game;
 if(game&&game!=='crave'){delete phone.dataset.level;delete phone.dataset.scene;}
 title.textContent=name;
 phone.querySelectorAll('.tm-ambient-photo').forEach(p=>p.classList.toggle('is-on',p.dataset.place===place));
 syncLang();syncTheme();
}
function toast(text){phone.querySelectorAll('.tm-toast').forEach(n=>n.remove());const n=document.createElement('div');n.className='tm-toast';n.setAttribute('role','status');n.textContent=text;phone.appendChild(n);setTimeout(()=>n.remove(),1900);}
root.addEventListener('click',e=>{
 const lang=e.target.closest('.tm-lang [data-lang]');
 if(lang){e.preventDefault();const value=lang.dataset.lang==='es'?'es-419':'en-US';if(select.value!==value){select.value=value;select.dispatchEvent(new Event('change',{bubbles:true}));}syncLang();return;}
 const back=e.target.closest('[data-shell="back"]');
 if(back){e.preventDefault();window.tryMeApp?.click?.();if(window.connectGame?.active)window.connectGame.back?.();else if(window.rollGame?.active)window.rollGame.back?.();else window.tryMeApp?.back?.();}
});
select.addEventListener('change',()=>setTimeout(syncLang));
window.tryMeShell={world,toast,syncLang};
})();
