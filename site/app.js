import { trackEvent } from './analytics.js';
import { REGISTRATION_URL } from './config.js';
import { translations } from './translations.js';
import { sceneCopy } from './content.js';
import { renderScenes, routePanel, demoPanel } from './scenes.js';
import { startScenes, stopScenes, animateContent } from './interactions.js';
import { normalizeProblems, resolveRoutes } from './selection.js';
import { problemArtwork, orbitArtwork, startHeroMotion, stopHeroMotion, transitionFromHero } from './hero.js';
import { syncNavigation, watchSections, closeMenu } from './chrome.js';
import { polishCopy, universityDetails } from './polish-copy.js';
import { universities } from './content.js';
import { startAmbient } from './ambient.js';
import { diagram } from './graphics.js';
import { personalMap, actualInputs, sessionContext, quizArtwork } from './personal-map.js';

// Some embedded/private browsers expose localStorage but deny access to it.
const savedLanguage = (() => { try { return localStorage.getItem('ventorme-lang'); } catch { return null; } })();

const ROUTES = ['career', 'universities', 'grants', 'exams', 'plan'];
const state = {
  lang: translations[savedLanguage] ? savedLanguage : 'ru',
  view: 'home', step: 0, selectedProblems: [], route: null, demo: null, demoText:'', demoSubmitted:false, showcase:'career', university:null, interest:null,
  answers: { grade: null, barrier: null, goal: null, freeText: '', freeTexts:{grade:'',barrier:''} }
};

const main = document.querySelector('#main');
const mobileCta = document.querySelector('#mobile-cta');
const text = () => translations[state.lang];
const fill = (value, n) => value.replace('{n}', String(n));
const escapeHtml = value => String(value).replace(/[&<>'"]/g, character => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' })[character]);
let lastQuizStep = -1;

function arrow() {
  return '<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
}

function registrationLink(label = text().common.register) {
  return `<a class="button primary registration-cta" href="${REGISTRATION_URL}" target="_blank" rel="noopener">${label}${arrow()}</a>`;
}

function setView(view) {
  if(view!=='quiz'||state.view!=='quiz') lastQuizStep=-1;
  const fromHero = state.view === 'home' && view !== 'home';
  const update = () => {
    if(view==='quiz'&&state.view!=='quiz')trackEvent('quiz_started',{locale:state.lang,count:state.selectedProblems.length});
    state.view = view;
    render();
    if(view==='result')trackEvent('result_viewed',{locale:state.lang,mode:state.routeOrigin==='explore'?'explore':'quiz'});
    window.scrollTo({ top: 0, behavior: 'instant' });
    main.focus({ preventScroll: true });
  };
  if (fromHero) transitionFromHero(main, update);
  else update();
}

function syncChrome() {
  const t = text();
  syncNavigation(state.lang);
  document.documentElement.lang = t.locale;
  document.title = t.meta[0];
  document.querySelector('meta[name="description"]').content = t.meta[1];
  document.querySelector('.skip-link').textContent = t.meta[2];
  document.querySelector('.brand').setAttribute('aria-label', t.meta[3]);
  document.querySelector('.languages').setAttribute('aria-label', t.meta[4]);
  document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === state.lang)));
}

function render() {
  stopHeroMotion();
  stopScenes();
  syncChrome();
  document.body.classList.toggle('on-home', state.view === 'home');
  mobileCta.hidden = state.view !== 'result';
  mobileCta.innerHTML = state.view === 'result' ? registrationLink(polishCopy[state.lang].continue) : '';
  if (state.view === 'quiz') renderQuiz();
  else if (state.view === 'result') renderResult();
  else if (state.view === 'catalog') renderCatalog();
  else renderHome();
  watchSections();
  // Quiz renders also happen directly on answer/back/next; renderQuiz owns its setup.
  if(state.view!=='quiz') startAmbient(main,text().hero.motion,state.route);
}

function renderHome() {
  const t = text();
  const count = state.selectedProblems.length;
  const ctaIndex = Math.min(count, 2);
  main.innerHTML = `<section class="hero-stage" id="start" aria-labelledby="hero-title" data-selection-count="${count}">
    <div class="hero-atmosphere" aria-hidden="true"><div class="mesh-layer mesh-violet"></div><div class="mesh-layer mesh-coral"></div><div class="hero-meridian"></div></div>
    <div class="hero-layout">
      <div class="hero-editorial">
        <div class="hero-heading-wrap"><h1 class="hero-title" id="hero-title" aria-label="${t.hero.title}">${t.hero.titleLines.map(line => `<span class="hero-line" aria-hidden="true"><span>${line}</span></span>`).join('')}</h1><span class="title-spark" aria-hidden="true">${arrow()}</span></div>
      </div>
      <div class="hero-story">
        <p class="hero-slogan">${t.hero.slogan.map(line => `<span>${line}</span>`).join(' ')}</p>
        <p class="hero-question">${t.hero.question}</p>
      </div>
      <div class="hero-interaction">
        ${orbitArtwork()}
        <div class="hero-intro"><h2 id="problem-prompt">${t.hero.prompt}</h2><p id="hero-choice-hint">${t.hero.chooseHint}</p></div>
        <div class="problem-grid" role="group" aria-labelledby="problem-prompt" aria-describedby="hero-choice-hint">
          ${ROUTES.slice(0, 4).map(key => `<button type="button" class="problem-card problem-${key}" data-problem="${key}" aria-pressed="${state.selectedProblems.includes(key)}"><span class="problem-art" aria-hidden="true">${problemArtwork(key)}</span><span class="problem-direction" aria-hidden="true">${arrow()}<svg class="problem-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4 10-10"/></svg></span><span class="problem-label">${t.hero.problems[key]}</span></button>`).join('')}
        </div>
      </div>
      <div class="hero-actions">
        <button type="button" class="button hero-cta" data-action="quiz" aria-describedby="hero-choice-status"><span class="hero-cta-labels">${[t.hero.start, t.hero.startOne, t.hero.startMany].map((label, index) => `<span data-cta-label="${index}" aria-hidden="${index !== ctaIndex}">${label}</span>`).join('')}</span><span class="hero-cta-arrow" aria-hidden="true">${arrow()}</span></button>
        <p id="hero-choice-status" class="hero-choice-status" role="status" aria-atomic="true">${fill(t.hero.count, count)}</p>
        <button type="button" class="catalog-link hero-catalog" data-action="catalog"><span>${t.hero.catalog}</span>${arrow()}</button>
      </div>
      <aside class="university-teaser" aria-label="${t.hero.universities}">
        <a href="https://ventorme.ai/" target="_blank" rel="noopener">${t.hero.universities}${arrow()}</a>
        <ul translate="no">${universities.slice(4).map(u=>`<li><img class="teaser-logo" src="${u.logo}" alt="" width="56" height="38" decoding="async">${u.name}</li>`).join('')}</ul>
      </aside>
      <div class="hero-bottom"><span class="hero-signature" translate="no">VENTORME / HACKNEXT 113</span><button class="motion-toggle" type="button" aria-pressed="false"><span class="motion-icon" aria-hidden="true"></span><span class="motion-label">${t.hero.motion.pause}</span></button></div>
    </div>
  </section><div class="home-support">
    ${supportSections()}
  </div>`;
  startHeroMotion(main.querySelector('.hero-stage'), t.hero.motion);
  startScenes(main,sceneCopy[state.lang],null,state.lang,registrationLink);
}

function updateHeroSelection() {
  const hero = main.querySelector('.hero-stage');
  const count = state.selectedProblems.length;
  hero.dataset.selectionCount = String(count);
  hero.querySelectorAll('[data-problem]').forEach(button => {
    button.setAttribute('aria-pressed', String(state.selectedProblems.includes(button.dataset.problem)));
  });
  hero.querySelectorAll('[data-cta-label]').forEach(label => {
    label.setAttribute('aria-hidden', String(Number(label.dataset.ctaLabel) !== Math.min(count, 2)));
  });
  hero.querySelector('#hero-choice-status').textContent = fill(text().hero.count, count);
}

function supportSections() {
  return renderScenes(text(),state,registrationLink);
}

function renderQuiz(error = '') {
  const direction=lastQuizStep>state.step?-1:1,entering=lastQuizStep!==state.step;
  lastQuizStep=state.step;
  const t = text();
  const c = sceneCopy[state.lang];
  const step = t.quiz.steps[state.step];
  const [key, title, hint, options] = step;
  const selected = state.answers[key];
  const showFreeText = (key === 'grade' || key === 'barrier') && selected === 'other';
  const showLead = key !== 'grade' || ['grade78','grade9','grade10','grade11','other'].includes(selected);
  const p=polishCopy[state.lang];
  main.innerHTML = `<div class="shell view quiz-view" data-current-step="${state.step}">
    ${state.selectedProblems.length ? `<div class="quiz-concerns"><p>${t.hero.selected}</p><ul>${state.selectedProblems.map(key => `<li class="hero-selection">${t.hero.problems[key]}</li>`).join('')}</ul></div>` : ''}
    <p class="eyebrow">${t.quiz.name}</p><div class="quiz-meta"><span>${fill(t.quiz.step, state.step + 1)}</span><span>${t.quiz.optional}</span></div>
    <div class="progress" role="progressbar" aria-label="${t.quiz.name}" aria-valuemin="1" aria-valuemax="3" aria-valuenow="${state.step+1}" aria-valuetext="${fill(t.quiz.step,state.step+1)}"><span style="width:${((state.step + 1) / 3) * 100}%"></span></div>
    <h1>${key==='grade'?p.gradeTitle:title}</h1>${sessionContext(state,t)}${quizArtwork(state,t)}${showLead?`<p class="lead">${key === 'goal' && state.selectedProblems.length > 1 ? t.hero.priorityHint : hint}</p>`:''}<div class="choice-grid">
      ${options.map(option => `<button class="choice" data-answer="${key}" data-value="${option[0]}" aria-pressed="${selected === option[0]}">${option[1]}</button>`).join('')}
    </div>${showFreeText ? `<div class="free-field"><label for="free-text">${t.quiz.freeLabel}</label><textarea maxlength="200" class="free-text" id="free-text" name="free-text" autocomplete="off" aria-describedby="free-hint free-counter" aria-invalid="${Boolean(error)}">${escapeHtml(state.answers.freeTexts[key])}</textarea><p class="helper" id="free-hint">${t.quiz.freeHint} ${c.freeExplanation}</p><p class="counter" id="free-counter">${fill(t.quiz.counter, 200 - state.answers.freeTexts[key].length)}</p></div>` : ''}
    <p class="error" id="quiz-error" aria-live="polite" tabindex="-1">${error}</p><div class="button-row quiz-actions">
      <button class="button ghost" data-action="back">${t.common.back}</button><button class="button secondary" data-action="skip">${t.common.skip}</button><button class="button primary" data-action="next">${state.step === 2 ? t.quiz.show : t.common.next}${arrow()}</button>
    </div></div>`;
  if(error) main.querySelector(showFreeText?'#free-text':'#quiz-error').focus({preventScroll:true});
  startAmbient(main,t.hero.motion);
  if(entering&&!matchMedia('(prefers-reduced-motion: reduce)').matches&&document.documentElement.dataset.motionPaused!=='true'){
    main.querySelectorAll('.quiz-visual,.quiz-view .choice').forEach((el,i)=>el.animate?.([{opacity:.3,transform:`translateX(${direction*16}px)`},{opacity:1,transform:'none'}],{duration:550,delay:i*30,easing:'cubic-bezier(.16,1,.3,1)'}));
  }
}

function determineRoute() {
  const routes = resolveRoutes(state.answers, state.selectedProblems);
  return routes.length === 1 ? routes[0] : null;
}

function renderResult() {
  const t = text();
  const c = sceneCopy[state.lang];
  const candidates = resolveRoutes(state.answers, state.selectedProblems);
  if (!state.route && candidates.length > 1) {
    main.innerHTML = `<div class="shell view result-view multi-result-view"><h1>${t.hero.multipleTitle}</h1><p class="lead">${t.hero.multipleLead}</p>
      ${actualInputs(state,t)}<div class="routes section">${candidates.map(key => { const route = t.routes[key]; return `<article class="route-card">${diagram(key)}<h2>${route[1]}</h2><p>${route[2]}</p><button class="button secondary" data-route="${key}">${t.common.open}</button></article>`; }).join('')}</div>
      <div class="button-row"><button class="button ghost" data-action="edit">${t.common.edit}</button><button class="button ghost" data-action="home">${t.common.back}</button></div></div>`;
    return;
  }
  const hasAnswer=['grade','barrier','goal'].some(key=>state.answers[key]&&state.answers[key]!=='skipped');
  const reason=state.routeOrigin==='explore'?c.reasonExplore:state.answers.goal===(state.route||determineRoute())?c.reasonPriority:state.selectedProblems.includes(state.route||determineRoute())?c.reasonSelected:hasAnswer?c.reasonFallback:c.reasonEmpty;
  const personalized=state.routeOrigin!=='explore'&&(hasAnswer||state.selectedProblems.length);
  main.innerHTML = personalMap(state,t,c,state.route||determineRoute(),reason,personalized,registrationLink);
}

function renderCatalog() {
  const t = text();
  main.innerHTML = `<div class="shell view catalog-view"><p class="eyebrow">Ventorme</p><h1>${t.catalog.title}</h1><p class="lead">${t.catalog.lead}</p>
    <div class="routes section">${ROUTES.map(key => { const route = t.routes[key]; return `<article class="route-card"><h2>${route[1]}</h2><p>${route[2]}</p><button class="button secondary" data-route="${key}">${t.common.open}</button></article>`; }).join('')}</div>
    <button class="button ghost" data-action="home">${t.common.back}</button></div>`;
}

function restart() {
  Object.assign(state, { view:'home', step:0, selectedProblems:[], route:null, routeOrigin:null, university:null, interest:null, demo:null, demoText:'', demoSubmitted:false, showcase:'career', answers:{ grade:null, barrier:null, goal:null, freeText:'',freeTexts:{grade:'',barrier:''} } });
  render(); window.scrollTo(0, 0);
}

function openUniversity(index, trigger) {
  const u=universities[index],d=universityDetails[index],p=polishCopy[state.lang];
  if(!u||!d)return;
  document.querySelector('#university-dialog')?.remove();
  const dialog=document.createElement('dialog');dialog.id='university-dialog';dialog.className='university-dialog';
  dialog.setAttribute('aria-labelledby','university-dialog-title');
  dialog.innerHTML=`<button type="button" class="dialog-close" data-dialog-close aria-label="${p.close}"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6"/></svg></button><div class="dialog-art">${diagram('universities')}</div><p>${d.country[state.lang]}</p><h2 id="university-dialog-title" translate="no">${u.name}</h2><p>${p.universityFact}</p><p class="helper">${sceneCopy[state.lang].universitySource}</p><a class="source-link" href="${d.url}" target="_blank" rel="noopener">${p.official}${arrow()}</a><button type="button" class="button primary" data-university-start="${index}">${p.universityStart}${arrow()}</button>`;
  document.body.append(dialog);
  dialog.addEventListener('close',()=>{dialog.remove();if(trigger.isConnected)trigger.focus({preventScroll:true});});
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  dialog.showModal();
}

document.addEventListener('click', event => {
  const registration=event.target.closest('.registration-cta');
  if(registration&&registration.href===REGISTRATION_URL) {
    const placement=registration.closest('.topbar')?'header':registration.closest('#mobile-cta')?'sticky':registration.closest('.result-view')?'result':registration.closest('.final-scene')?'final':registration.closest('.account-scene')?'account':'other';
    trackEvent('registration_cta_clicked',{locale:state.lang,placement});
  }
  const anchor=event.target.closest('[data-anchor]');
  if(anchor && !event.ctrlKey && !event.metaKey && !event.shiftKey && event.button===0){event.preventDefault();closeMenu();if(state.view!=='home'){state.view='home';render();}const target=document.getElementById(anchor.dataset.anchor);target?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches||document.documentElement.dataset.motionPaused==='true'?'instant':'smooth'});target?.setAttribute('tabindex','-1');target?.focus({preventScroll:true});history.replaceState(null,'',`#${anchor.dataset.anchor}`);return;}
  const university=event.target.closest('[data-university]');
  if(university){openUniversity(Number(university.dataset.university),university);return;}
  if(event.target.closest('[data-dialog-close]')){document.querySelector('#university-dialog')?.close();return;}
  const universityStart=event.target.closest('[data-university-start]');
  if(universityStart){state.university=Number(universityStart.dataset.universityStart);state.selectedProblems=normalizeProblems([...state.selectedProblems,'universities']);document.querySelector('#university-dialog')?.close();state.step=0;state.route=null;state.routeOrigin='quiz';setView('quiz');return;}
  const concern=event.target.closest('[data-concern-start]');
  if(concern){state.selectedProblems=normalizeProblems([...state.selectedProblems,concern.dataset.concernStart]);state.step=0;state.route=null;state.routeOrigin='quiz';setView('quiz');return;}
  const language = event.target.closest('[data-lang]');
  if (language) { const previousY=window.scrollY; state.lang = language.dataset.lang; try { localStorage.setItem('ventorme-lang', state.lang); } catch { /* Language still works for this visit. */ } render(); window.scrollTo({top:previousY,behavior:'instant'});document.querySelector(`[data-lang="${state.lang}"]`).focus({preventScroll:true}); return; }
  const problem = event.target.closest('[data-problem]');
  if (problem) {
    const key = problem.dataset.problem;
    state.selectedProblems = normalizeProblems(state.selectedProblems.includes(key) ? state.selectedProblems.filter(value => value !== key) : [...state.selectedProblems, key]);
    state.route = null;
    trackEvent('hero_problem_selected',{locale:state.lang,count:state.selectedProblems.length,selected:state.selectedProblems.includes(key)});
    const hero = problem.closest('.hero-stage');
    updateHeroSelection();
    hero.dispatchEvent(new CustomEvent('hero-choice', { detail: problem }));
    return;
  }
  const demo = event.target.closest('[data-demo]');
  if (demo) { state.demo = demo.dataset.demo; const panel=main.querySelector('#demo-panel'); panel.innerHTML=demoPanel(text(),sceneCopy[state.lang],{...state,register:registrationLink});panel.querySelector(`[data-demo="${state.demo}"]`).focus({preventScroll:true});animateContent(panel.querySelector('.demo-response'));return; }
  const tab=event.target.closest('[data-route-tab]');
  if(tab){state.showcase=tab.dataset.routeTab;main.querySelectorAll('[data-route-tab]').forEach(b=>{b.setAttribute('aria-selected',String(b===tab));b.tabIndex=b===tab?0:-1;});const panel=main.querySelector('#route-showcase');panel.setAttribute('aria-labelledby',tab.id);panel.innerHTML=routePanel(text(),sceneCopy[state.lang],state.showcase);animateContent(panel);return;}
  const answer = event.target.closest('[data-answer]');
  if (answer) { state.answers[answer.dataset.answer] = answer.dataset.value; renderQuiz();main.querySelector(`[data-answer="${answer.dataset.answer}"][data-value="${answer.dataset.value}"]`).focus({preventScroll:true});return; }
  const route = event.target.closest('[data-route]');
  if (route) { state.routeOrigin=state.view==='home'||state.view==='catalog'?'explore':'quiz';state.route = route.dataset.route; setView('result'); return; }
  const action = event.target.closest('[data-action]')?.dataset.action;
  if (!action) return;
  if(action==='demo-quiz'){state.interest=state.demo;state.selectedProblems=normalizeProblems([...state.selectedProblems,'career']);state.step=0;state.route=null;state.routeOrigin='quiz';setView('quiz');return;}
  if(action==='demo-submit'){const input=main.querySelector('#demo-text');const error=main.querySelector('#demo-error');if(!state.demoText.trim()){error.textContent=sceneCopy[state.lang].demoRequired;input.setAttribute('aria-invalid','true');input.focus();return;}state.demoSubmitted=true;input.removeAttribute('aria-invalid');error.textContent='';main.querySelector('#demo-custom-result').hidden=false;main.querySelector('.demo-registration').hidden=false;animateContent(main.querySelector('#demo-custom-result'));return;}
  if (action === 'home') setView('home');
  if (action === 'quiz') { state.step = 0; state.route = null;state.routeOrigin='quiz'; setView('quiz'); }
  if (action === 'catalog') setView('catalog');
  if (action === 'edit') { state.step = 0;state.routeOrigin='quiz';state.route=null; setView('quiz'); }
  if (action === 'restart') restart();
  if (action === 'back') { if (state.step > 0) { state.step -= 1; renderQuiz();main.focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});animateContent(main.querySelector('.quiz-view')); } else setView('home'); }
  if (action === 'skip') {
    const key = text().quiz.steps[state.step][0]; state.answers[key] = 'skipped';
    trackEvent('quiz_step_completed',{locale:state.lang,step:state.step+1,status:'skipped'});
    if (state.step < 2) { state.step += 1; renderQuiz(); main.focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});animateContent(main.querySelector('.quiz-view')); } else { trackEvent('quiz_completed',{locale:state.lang});state.route = determineRoute(); setView('result'); }
  }
  if (action === 'next') {
    const [key] = text().quiz.steps[state.step];
    if (!state.answers[key]) { renderQuiz(text().errors.choose); return; }
    if ((key === 'grade' || key === 'barrier') && state.answers[key] === 'other' && !state.answers.freeTexts[key].trim()) { renderQuiz(text().errors.free); return; }
    if (state.answers.freeText.length > 200) { renderQuiz(text().errors.long); return; }
    trackEvent('quiz_step_completed',{locale:state.lang,step:state.step+1,status:state.answers[key]==='skipped'?'skipped':'answered'});
    if (state.step < 2) { state.step += 1; renderQuiz();main.focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});animateContent(main.querySelector('.quiz-view')); } else { trackEvent('quiz_completed',{locale:state.lang});state.route = determineRoute(); setView('result'); }
  }
});

document.addEventListener('input', event => {
  if(event.target.id==='demo-text'){state.demoText=event.target.value.slice(0,200);state.demoSubmitted=false;main.querySelector('#demo-custom-result').hidden=true;main.querySelector('.demo-registration').hidden=true;return;}
  if (event.target.id !== 'free-text') return;
  state.answers.freeText = event.target.value.slice(0, 200);
  state.answers.freeTexts[text().quiz.steps[state.step][0]]=state.answers.freeText;
  const counter = document.querySelector('#free-counter');
  if (counter) counter.textContent = fill(text().quiz.counter, 200 - state.answers.freeText.length);
});

document.addEventListener('keydown',event=>{
  const tab=event.target.closest('[data-route-tab]');if(!tab)return;
  const tabs=[...main.querySelectorAll('[data-route-tab]')],index=tabs.indexOf(tab);
  const target=event.key==='ArrowRight'?tabs[(index+1)%tabs.length]:event.key==='ArrowLeft'?tabs[(index+tabs.length-1)%tabs.length]:event.key==='Home'?tabs[0]:event.key==='End'?tabs.at(-1):null;
  if(target){event.preventDefault();target.focus({preventScroll:true});target.click();}
});

render();
