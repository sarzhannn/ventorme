// Deterministic CSS particles: no frame loop, no pointer interception, no score claims.
const vocabulary={
  ru:{general:['ИДЕЯ','СОЗДАВАЙ','ПЛАН','ДАЛЬШЕ'],admissions:['ПОСТУПЛЕНИЕ','КАМПУС','УЧЁБА','БУДУЩЕЕ'],left:'ТВОЙ<br>ПЕРВЫЙ<br>ШАГ ↗',right:'ИЩИ<br>ПРОБУЙ<br>РАСТИ ✦',plan:'ИДЕЯ → ПЛАН'},
  kz:{general:['ИДЕЯ','ЖАСА','ЖОСПАР','АЛҒА'],admissions:['ОҚУҒА ТҮСУ','КАМПУС','ОҚУ','БОЛАШАҚ'],left:'СЕНІҢ<br>АЛҒАШҚЫ<br>ҚАДАМЫҢ ↗',right:'ІЗДЕ<br>БАЙҚА<br>ДАМЫ ✦',plan:'ИДЕЯ → ЖОСПАР'},
  en:{general:['IDEA','CREATE','PLAN','NEXT'],admissions:['ADMISSIONS','CAMPUS','STUDY','FUTURE'],left:'YOUR<br>NEXT<br>STEP ↗',right:'EXPLORE<br>CREATE<br>GROW ✦',plan:'IDEA → PLAN'}
};
const positions=[[4,14],[91,10],[8,44],[94,64],[19,87],[81,86],[46,7],[64,93],[3,77],[96,35],[28,4],[73,5]];
export function particleMarkup(topic='general',lang='en') {
  const v=vocabulary[lang]||vocabulary.en;
  const tokens=topic==='exams'?['IELTS','SAT','x²','1 2 3','＋','○','IELTS','SAT','∑','6 × 7','a + b','◇']
    :topic==='universities'?[v.admissions[0],v.admissions[1],'◇','↗',v.admissions[2],'○',v.admissions[3],'✧','＋','·','↗','◇']
    :['✦',v.general[0],'◇','↗',v.general[1],'○','✧',v.general[2],'⌁','＋','·',v.general[3]];
  return `<div class="particle-field particle-${topic}" aria-hidden="true">${tokens.map((token,i)=>`<span class="ambient-particle" style="--px:${positions[i][0]}%;--py:${positions[i][1]}%;--pd:${18+i%5*3}s;--delay:-${i*2.7}s;--turn:${i%2?12:-12}deg">${topic==='universities'&&[2,5].includes(i)?`<img src="assets/official/${i===2?'bocconi':'nazarbayev'}.webp" alt="" width="72" height="48" loading="lazy">`:token}</span>`).join('')}</div>`;
}
let cleanup;
export function startAmbient(root,labels,route=null) {
  cleanup?.();
  const lang=document.documentElement.lang==='kk'?'kz':document.documentElement.lang;
  const v=vocabulary[lang]||vocabulary.en;
  const hosts=[...root.querySelectorAll('.hero-stage,.scene,.view,.site-footer')];
  const observer=typeof IntersectionObserver==='function'?new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('particles-visible',entry.isIntersecting)),{rootMargin:'40px'}):null;
  hosts.forEach(host=>{
    host.classList.add('ambient-host');
    if(!host.querySelector(':scope > .particle-field'))host.insertAdjacentHTML('afterbegin',particleMarkup(host.classList.contains('personal-map')&&route==='exams'?'exams':host.id==='universities'||host.classList.contains('hero-stage')?'universities':'general',lang));
    observer?.observe(host);
    if(!observer)host.classList.add('particles-visible');
  });
  const result=root.querySelector('.personal-map');
  if(result&&!root.querySelector('.result-scenery')){
    const scenery=document.createElement('div');
    scenery.className='result-scenery particles-visible';
    scenery.setAttribute('aria-hidden','true');
    scenery.innerHTML=`<div class="result-wing wing-left"><i class="edge-orbit"></i><span class="edge-word">${v.left}</span><img src="assets/official/bocconi.webp" alt="" width="90" height="64"><span class="edge-formula">${route==='exams'?'IELTS · SAT':v.plan}</span></div><div class="result-wing wing-right"><i class="edge-orbit"></i><span class="edge-word">${v.right}</span><img src="assets/official/nazarbayev.webp" alt="" width="90" height="64"><span class="edge-formula">${route==='exams'?'x² + y²':v.admissions[0]}</span></div>`;
    root.append(scenery);
  }
  // The small result emblem has its own visibility boundary, not the long page's.
  root.querySelectorAll('.map-emblem').forEach(el=>observer?.observe(el));
  const view=root.querySelector('.view'),mq=matchMedia('(prefers-reduced-motion: reduce)');
  let button=view?.querySelector('.ambient-pause');
  if(view&&!button){button=document.createElement('button');button.className='ambient-pause';button.type='button';view.prepend(button);}
  const sync=()=>{if(button){const paused=document.documentElement.dataset.motionPaused==='true';button.textContent=mq.matches?labels.reduced:paused?labels.resume:labels.pause;button.setAttribute('aria-pressed',String(paused||mq.matches));button.disabled=mq.matches;}};
  const toggle=()=>{document.documentElement.dataset.motionPaused=String(document.documentElement.dataset.motionPaused!=='true');document.dispatchEvent(new Event('site-motion-change'));};
  button?.addEventListener('click',toggle);mq.addEventListener('change',sync);document.addEventListener('site-motion-change',sync);sync();
  cleanup=()=>{observer?.disconnect();button?.removeEventListener('click',toggle);mq.removeEventListener('change',sync);document.removeEventListener('site-motion-change',sync);};
}
