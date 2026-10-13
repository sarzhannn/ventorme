import { polishCopy } from './polish-copy.js';
import { REGISTRATION_URL } from './config.js';

export const sections = ['routes','universities','how','reviews','faq'];
let observer;
const header = () => document.querySelector('.topbar');

export function syncNavigation(lang) {
  const c = polishCopy[lang], bar = header();
  bar.querySelector('.site-navigation')?.remove();
  bar.querySelector('.chrome-controls')?.remove();
  bar.querySelector('.languages').insertAdjacentHTML('beforebegin', `<nav class="site-navigation" id="site-navigation" aria-label="${c.navigation}">${sections.map((id,i)=>`<a href="#${id}" data-anchor="${id}">${c.nav[i]}</a>`).join('')}<a class="nav-register registration-cta" href="${REGISTRATION_URL}" target="_blank" rel="noopener">${c.registerShort}</a></nav>`);
  bar.insertAdjacentHTML('beforeend','<div class="chrome-controls"><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation"><span></span><span></span></button></div>');
  bar.querySelector('.menu-toggle').setAttribute('aria-label',c.menu);
  bar.dataset.locale = lang;

}

export function closeMenu() {
  const button = header().querySelector('.menu-toggle');
  button?.setAttribute('aria-expanded','false');
  header().classList.remove('menu-open');
}
export function watchSections() {
  observer?.disconnect();
  const targets = sections.map(id=>document.getElementById(id)).filter(Boolean);
  if (!targets.length || typeof IntersectionObserver!=='function') return;
  observer = new IntersectionObserver(entries => {
    const visible = entries.filter(entry=>entry.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top)[0];
    if (!visible) return;
    header().querySelectorAll('[data-anchor]').forEach(link => {
      if (link.dataset.anchor === visible.target.id) link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    });
  }, {rootMargin:'-15% 0px -45% 0px',threshold:0});
  targets.forEach(target=>observer.observe(target));
}

document.addEventListener('click',event=>{

  if(event.target.closest('.menu-toggle')) {
    const open = header().classList.toggle('menu-open');
    header().querySelector('.menu-toggle').setAttribute('aria-expanded',String(open));
  } else if(!header().contains(event.target)) closeMenu();
});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape' && header().classList.contains('menu-open')) {closeMenu();header().querySelector('.menu-toggle').focus();}
});
document.addEventListener('focusin',event=>{if(!header().contains(event.target))closeMenu();});
if (typeof ResizeObserver==='function') new ResizeObserver(entries=>{
  document.documentElement.style.setProperty('--header-height',`${entries[0].borderBoxSize?.[0]?.blockSize || header().offsetHeight}px`);
}).observe(header());
