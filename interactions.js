// Optional motion, native scrolling and complete teardown on every view change.
let dispose;
export const stopScenes = () => { dispose?.(); dispose=null; };
export function startScenes(root,c,onState) {
  const cleanups=[],animations=new Set(),mq=matchMedia('(prefers-reduced-motion: reduce)');
  const reduced=()=>mq.matches||document.documentElement.dataset.motionPaused==='true';
  const listen=(el,type,fn,options)=>{el.addEventListener(type,fn,options);cleanups.push(()=>el.removeEventListener(type,fn,options));};
  const play=(el,frames,duration=800,delay=0)=>{
    if(reduced()||!el.animate)return;
    const a=el.animate(frames,{duration,delay,easing:'cubic-bezier(.22,.75,.25,1)'});
    animations.add(a);a.finished.catch(()=>{}).finally(()=>animations.delete(a));
  };
  listen(mq,'change',()=>{if(mq.matches)animations.forEach(a=>a.cancel());});
  listen(document,'site-motion-change',()=>{if(reduced())animations.forEach(a=>a.cancel());});
  const observer='IntersectionObserver' in window?new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(!entry.isIntersecting)return;const el=entry.target;
      if(el.dataset.reveal==='note')play(el,[{opacity:.35,transform:'translateY(24px) rotate(0deg)'},{opacity:1,transform:'translateY(0) rotate(var(--note-angle,0deg))'}],850,Number(el.className.match(/note-(\d)/)?.[1]||0)*65);
      else if(el.dataset.reveal==='final')play(el,[{opacity:.35,transform:'translateY(36px) scale(.97)'},{opacity:1,transform:'none'}],1000);
      else play(el,[{opacity:.3,transform:'translateY(24px)'},{opacity:1,transform:'none'}],900);
      observer.unobserve(el);
    });
  },{threshold:.15}):null;
  root.querySelectorAll('[data-reveal]').forEach(el=>observer?.observe(el));
  cleanups.push(()=>observer?.disconnect());

  root.querySelectorAll('[data-carousel]').forEach(carousel=>{
    const track=carousel.querySelector('[data-track]'),slides=[...track.querySelectorAll('[data-slide]')],prev=carousel.querySelector('[data-delta="-1"]'),next=carousel.querySelector('[data-delta="1"]'),count=carousel.querySelector('.rail-count');
    let index=0,raf=0,drag=null,moved=false;
    const positions=()=>slides.map(el=>el.offsetLeft);
    const update=()=>{raf=0;const pos=positions();index=pos.reduce((best,p,i)=>Math.abs(p-track.scrollLeft)<Math.abs(pos[best]-track.scrollLeft)?i:best,0);
      slides.forEach((el,i)=>el.classList.toggle('is-current',i===index));
      prev.disabled=track.scrollLeft<3;next.disabled=track.scrollLeft>=track.scrollWidth-track.clientWidth-3;
      count.textContent=c.slide.replace('{n}',index+1).replace('{total}',slides.length);
      const progress=carousel.querySelector('.review-progress span');if(progress)progress.style.transform=`scaleX(${(index+1)/slides.length})`;
      onState?.(track.id,index);
    };
    const go=delta=>{const target=Math.max(0,Math.min(slides.length-1,index+delta));track.scrollTo({left:positions()[target],behavior:reduced()?'instant':'smooth'});};
    listen(prev,'click',()=>go(-1));listen(next,'click',()=>go(1));
    listen(track,'scroll',()=>{if(!raf)raf=requestAnimationFrame(update);},{passive:true});
    listen(track,'keydown',event=>{if(event.target!==track)return;if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();go(event.key==='ArrowRight'?1:-1);}if(event.key==='Home'||event.key==='End'){event.preventDefault();track.scrollTo({left:event.key==='Home'?0:track.scrollWidth,behavior:reduced()?'instant':'smooth'});}});
    // Touch uses the browser's native pan; mouse drag has an 8px threshold.
    listen(track,'pointerdown',e=>{if(e.pointerType!=='mouse'||e.button!==0||e.target.closest('a,button'))return;drag={x:e.clientX,left:track.scrollLeft,id:e.pointerId};moved=false;});
    listen(track,'pointermove',e=>{if(!drag)return;const distance=e.clientX-drag.x;if(Math.abs(distance)>8){moved=true;track.classList.add('is-dragging');track.setPointerCapture(e.pointerId);track.scrollLeft=drag.left-distance;}});
    const end=()=>{if(!drag)return;const id=drag.id;drag=null;track.classList.remove('is-dragging');if(track.hasPointerCapture(id))track.releasePointerCapture(id);update();};
    listen(track,'pointerup',end);listen(track,'pointercancel',end);listen(track,'lostpointercapture',end);
    listen(track,'click',e=>{if(moved){e.preventDefault();e.stopPropagation();moved=false;}},true);
    const resize=()=>update();listen(window,'resize',resize);
    update();cleanups.push(()=>cancelAnimationFrame(raf));
  });

  listen(root,'click',e=>{
    const disclosure=e.target.closest('[data-disclosure]');
    if(disclosure){const panel=root.querySelector(`#${disclosure.getAttribute('aria-controls')}`),open=disclosure.getAttribute('aria-expanded')==='true';disclosure.setAttribute('aria-expanded',String(!open));panel.hidden=open;if(!open)play(panel,[{opacity:0,transform:'translateY(-8px)'},{opacity:1,transform:'none'}],450);}
    const step=e.target.closest('[data-step-preview]');
    if(step){root.querySelectorAll('[data-step-preview]').forEach(b=>b.setAttribute('aria-pressed',String(b===step)));const desc=root.querySelector('#journey-description');desc.textContent=c.steps[Number(step.dataset.stepPreview)][1];play(desc,[{opacity:.2,transform:'translateX(12px)'},{opacity:1,transform:'none'}],550);}
  });
  dispose=()=>{cleanups.forEach(fn=>fn());animations.forEach(a=>a.cancel());};
}

export function animateContent(el) {
  if(!el||matchMedia('(prefers-reduced-motion: reduce)').matches||document.documentElement.dataset.motionPaused==='true')return;
  el.getAnimations().forEach(a=>a.cancel());
  el.animate?.([{opacity:.25,transform:'translateY(10px)'},{opacity:1,transform:'none'}],{duration:600,easing:'cubic-bezier(.22,.75,.25,1)'});
}
