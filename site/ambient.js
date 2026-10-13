// Deterministic CSS particles: no frame loop, no pointer interception, no score claims.
const symbols=['✦','＋','◇','↗','·','○','✧','·','⌁','＋','·','◇'];
const positions=[[4,14],[91,10],[8,44],[94,64],[19,87],[81,86],[46,7],[64,93],[3,77],[96,35],[28,4],[73,5]];
export function particleMarkup(topic='general') {
  const tokens=topic==='exams'?['IELTS','SAT','x²','1 2 3','＋','○','IELTS','SAT','∑','＋','·','◇']:symbols;
  return `<div class="particle-field particle-${topic}" aria-hidden="true">${tokens.map((token,i)=>`<span class="ambient-particle" style="--px:${positions[i][0]}%;--py:${positions[i][1]}%;--pd:${18+i%5*3}s;--delay:-${i*2.7}s;--turn:${i%2?12:-12}deg">${token}</span>`).join('')}</div>`;
}
let cleanup;
export function startAmbient(root,labels,route=null) {
  cleanup?.();
  const hosts=[...root.querySelectorAll('.hero-stage,.scene,.view,.site-footer')];
  const observer=typeof IntersectionObserver==='function'?new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('particles-visible',entry.isIntersecting)),{rootMargin:'40px'}):null;
  hosts.forEach(host=>{
    host.classList.add('ambient-host');
    if(!host.querySelector(':scope > .particle-field'))host.insertAdjacentHTML('afterbegin',particleMarkup(host.classList.contains('personal-map')&&route==='exams'?'exams':'general'));
    observer?.observe(host);
  });
  const view=root.querySelector('.view'),mq=matchMedia('(prefers-reduced-motion: reduce)');
  let button=view?.querySelector('.ambient-pause');
  if(view&&!button){button=document.createElement('button');button.className='ambient-pause';button.type='button';view.prepend(button);}
  const sync=()=>{if(button){const paused=document.documentElement.dataset.motionPaused==='true';button.textContent=mq.matches?labels.reduced:paused?labels.resume:labels.pause;button.setAttribute('aria-pressed',String(paused||mq.matches));button.disabled=mq.matches;}};
  const toggle=()=>{document.documentElement.dataset.motionPaused=String(document.documentElement.dataset.motionPaused!=='true');document.dispatchEvent(new Event('site-motion-change'));};
  button?.addEventListener('click',toggle);mq.addEventListener('change',sync);document.addEventListener('site-motion-change',sync);sync();
  cleanup=()=>{observer?.disconnect();button?.removeEventListener('click',toggle);mq.removeEventListener('change',sync);document.removeEventListener('site-motion-change',sync);};
}
