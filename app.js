import { REGISTRATION_URL } from './config.js';
import { translations } from './translations.js';
import { problemArtwork, orbitArtwork, startHeroMotion, stopHeroMotion, transitionFromHero } from './hero.js';

// Some embedded/private browsers expose localStorage but deny access to it.
const savedLanguage = (() => { try { return localStorage.getItem('ventorme-lang'); } catch { return null; } })();

const ROUTES = ['career', 'universities', 'grants', 'exams', 'plan'];
const state = {
  lang: translations[savedLanguage] ? savedLanguage : 'ru',
  view: 'home', step: 0, selectedProblem: null, route: null, demo: null,
  answers: { grade: null, barrier: null, goal: null, freeText: '' }
};

const main = document.querySelector('#main');
const mobileCta = document.querySelector('#mobile-cta');
const text = () => translations[state.lang];
const fill = (value, n) => value.replace('{n}', String(n));
const escapeHtml = value => String(value).replace(/[&<>'"]/g, character => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' })[character]);

function arrow() {
  return '<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
}

function registrationLink(label = text().common.register) {
  return `<a class="button primary registration-cta" href="${REGISTRATION_URL}" target="_blank" rel="noopener">${label}${arrow()}</a>`;
}

function setView(view) {
  const fromHero = state.view === 'home' && view !== 'home';
  const update = () => {
    state.view = view;
    render();
    window.scrollTo({ top: 0, behavior: 'instant' });
    main.focus({ preventScroll: true });
  };
  if (fromHero) transitionFromHero(main, update);
  else update();
}

function syncChrome() {
  const t = text();
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
  syncChrome();
  document.body.classList.toggle('on-home', state.view === 'home');
  document.querySelector('meta[name="theme-color"]').content = state.view === 'home' ? '#18143d' : '#f8f6f1';
  mobileCta.hidden = state.view !== 'result';
  mobileCta.innerHTML = state.view === 'result' ? registrationLink() : '';
  if (state.view === 'quiz') renderQuiz();
  else if (state.view === 'result') renderResult();
  else if (state.view === 'catalog') renderCatalog();
  else renderHome();
}

function renderHome() {
  const t = text();
  main.innerHTML = `<section class="hero-stage" id="start" aria-labelledby="hero-title" data-concern="${state.selectedProblem || ''}">
    <div class="hero-atmosphere" aria-hidden="true"><div class="mesh-layer mesh-violet"></div><div class="mesh-layer mesh-coral"></div><div class="hero-meridian"></div></div>
    <div class="hero-layout">
      <div class="hero-editorial">
        <div class="hero-heading-wrap"><h1 class="hero-title" id="hero-title" aria-label="${t.hero.title}">${t.hero.titleLines.map(line => `<span class="hero-line" aria-hidden="true"><span>${line}</span></span>`).join('')}</h1><span class="title-spark" aria-hidden="true">${arrow()}</span></div>
      </div>
      <div class="hero-story">
        <p class="hero-slogan">${t.hero.slogan.map(line => `<span>${line}</span>`).join(' ')}</p>
        <p class="hero-question">${t.hero.question}</p>
        <button type="button" class="button hero-cta" data-action="quiz" aria-describedby="hero-choice-status"><span>${t.hero.start}</span><span class="hero-cta-arrow" aria-hidden="true">${arrow()}</span></button>
        <p class="hero-promise">${t.hero.promise.split(' • ').map(item => `<span>${item}</span>`).join('')}</p>
        <button type="button" class="catalog-link hero-catalog" data-action="catalog">${t.hero.catalog}</button>
      </div>
      <div class="hero-interaction">
        ${orbitArtwork()}
        <div class="hero-intro"><h2 id="problem-prompt">${t.hero.prompt}</h2><p>${t.hero.chooseHint}</p></div>
        <div class="problem-grid" role="group" aria-labelledby="problem-prompt">
          ${ROUTES.slice(0, 4).map(key => `<button type="button" class="problem-card problem-${key}" data-problem="${key}" aria-pressed="${state.selectedProblem === key}"><span class="problem-art" aria-hidden="true">${problemArtwork(key)}</span><span class="problem-direction" aria-hidden="true">${arrow()}<svg class="problem-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4 10-10"/></svg></span><span class="problem-label">${t.hero.problems[key]}</span></button>`).join('')}
        </div>
        <div class="hero-choice-footer">
          <p id="hero-choice-status" class="hero-choice-status" role="status">${state.selectedProblem ? `${t.hero.selected}: ${t.hero.problems[state.selectedProblem]}` : ''}</p>
          <button type="button" class="hero-continue" data-action="quiz" aria-describedby="hero-choice-status" ${state.selectedProblem ? '' : 'hidden'}>${t.hero.continue}${arrow()}</button>
        </div>
      </div>
      <div class="hero-bottom"><span class="hero-signature" translate="no">VENTORME / HACKNEXT 113</span><button class="motion-toggle" type="button" aria-pressed="false"><span class="motion-icon" aria-hidden="true"></span><span class="motion-label">${t.hero.motion.pause}</span></button></div>
    </div>
  </section><div class="shell home-support">
    ${supportSections()}
    <footer class="footer">Ventorme · ${t.final.note}</footer>
  </div>`;
  startHeroMotion(main.querySelector('.hero-stage'), t.hero.motion);
}

function supportSections() {
  const t = text();
  const demo = t.demo.options.find(option => option[0] === state.demo);
  return `<section class="section"><h2>${t.demo.title}</h2><p class="lead">${t.demo.subtitle}</p>
    <div class="panel" id="demo"><p class="eyebrow">1 / 1</p><h3>${t.demo.question}</h3><div class="choice-grid">
      ${t.demo.options.map(option => `<button class="choice" data-demo="${option[0]}" aria-pressed="${state.demo === option[0]}">${option[1]}</button>`).join('')}
    </div>${demo ? `<div class="demo-answer" role="status"><strong>${t.demo.accepted}</strong><p>${demo[2]}</p></div><div class="button-row">${registrationLink(t.demo.cta)}</div>` : ''}</div>
  </section>
  <section class="section section-grid"><div><h2>${t.trust.title}</h2><p class="lead">${t.trust.text}</p></div>
    <div class="panel"><details><summary>${t.trust.summary}</summary><p><strong>${t.trust.intro}</strong></p><ol>${t.trust.checks.map(item => `<li>${item}</li>`).join('')}</ol></details></div>
  </section>
  <section class="section"><h2>${t.benefits.title}</h2><p class="lead">${t.benefits.text}</p><div class="button-row">${registrationLink(t.benefits.cta)}</div></section>
  <section class="section"><h2>${t.how.title}</h2><ol class="step-list">${t.how.steps.map(item => `<li>${item}</li>`).join('')}</ol><button class="button secondary" data-action="home">${t.how.cta}</button></section>
  <section class="section faq"><h2>${t.faq.title}</h2>${t.faq.items.map(item => `<details><summary>${item[0]}</summary><p>${item[1]}</p></details>`).join('')}</section>
  <section class="section panel final-panel"><h2>${t.final.title}</h2><p class="lead">${t.final.text}</p><div class="button-row">${registrationLink(t.final.cta)}</div></section>`;
}

function renderQuiz(error = '') {
  const t = text();
  const step = t.quiz.steps[state.step];
  const [key, title, hint, options] = step;
  const selected = state.answers[key];
  const showFreeText = (key === 'grade' || key === 'barrier') && selected === 'other';
  main.innerHTML = `<div class="shell view quiz-view">
    ${state.selectedProblem ? `<p class="hero-selection"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4 10-10"/></svg>${t.hero.problems[state.selectedProblem]}</p>` : ''}
    <p class="eyebrow">${t.quiz.name}</p><div class="quiz-meta"><span>${fill(t.quiz.step, state.step + 1)}</span><span>${t.quiz.optional}</span></div>
    <div class="progress" aria-hidden="true"><span style="width:${((state.step + 1) / 3) * 100}%"></span></div>
    <h1>${title}</h1><p class="lead">${hint}</p><div class="choice-grid">
      ${options.map(option => `<button class="choice" data-answer="${key}" data-value="${option[0]}" aria-pressed="${selected === option[0]}">${option[1]}</button>`).join('')}
    </div>${showFreeText ? `<div class="free-field"><label for="free-text">${t.quiz.freeLabel}</label><textarea maxlength="200" class="free-text" id="free-text" name="free-text" autocomplete="off" aria-describedby="free-hint free-counter">${escapeHtml(state.answers.freeText)}</textarea><p class="helper" id="free-hint">${t.quiz.freeHint}</p><p class="counter" id="free-counter">${fill(t.quiz.counter, 200 - state.answers.freeText.length)}</p></div>` : ''}
    <p class="error" id="quiz-error" aria-live="polite">${error}</p><div class="button-row quiz-actions">
      <button class="button ghost" data-action="back">${t.common.back}</button><button class="button secondary" data-action="skip">${t.common.skip}</button><button class="button primary" data-action="next">${state.step === 2 ? t.quiz.show : t.common.next}${arrow()}</button>
    </div></div>`;
}

function determineRoute() {
  const goal = state.answers.goal;
  if (goal && !['undecided', 'skipped'].includes(goal)) return goal;
  if (state.selectedProblem) return state.selectedProblem;
  return ({ where:'universities', money:'grants', exam:'exams' })[state.answers.barrier] || 'career';
}

function renderResult() {
  const t = text();
  const route = t.routes[state.route || determineRoute()];
  main.innerHTML = `<div class="shell view result-view"><p class="eyebrow">${t.result.eyebrow}</p><h1>${route[0]}</h1><p class="lead">${t.result.lead}</p>
    <section class="panel route-detail"><h2>${route[1]}</h2><p>${route[2]}</p><h3>${t.result.actions}</h3><ul>${route[3].map(item => `<li>${item}</li>`).join('')}</ul><p class="notice">${route[4]}</p>
      <div class="button-row">${registrationLink()}<button class="button secondary" data-action="catalog">${t.common.another}</button><button class="button ghost" data-action="edit">${t.common.edit}</button><button class="button ghost" data-action="restart">${t.common.restart}</button></div>
    </section>${supportSections()}</div>`;
}

function renderCatalog() {
  const t = text();
  main.innerHTML = `<div class="shell view catalog-view"><p class="eyebrow">Ventorme</p><h1>${t.catalog.title}</h1><p class="lead">${t.catalog.lead}</p>
    <div class="routes section">${ROUTES.map(key => { const route = t.routes[key]; return `<article class="route-card"><h2>${route[1]}</h2><p>${route[2]}</p><button class="button secondary" data-route="${key}">${t.common.open}</button></article>`; }).join('')}</div>
    <button class="button ghost" data-action="home">${t.common.back}</button></div>`;
}

function restart() {
  Object.assign(state, { view:'home', step:0, selectedProblem:null, route:null, demo:null, answers:{ grade:null, barrier:null, goal:null, freeText:'' } });
  render(); window.scrollTo(0, 0);
}

document.addEventListener('click', event => {
  const language = event.target.closest('[data-lang]');
  if (language) { state.lang = language.dataset.lang; try { localStorage.setItem('ventorme-lang', state.lang); } catch { /* Language still works for this visit. */ } render(); return; }
  const problem = event.target.closest('[data-problem]');
  if (problem) {
    state.selectedProblem = problem.dataset.problem;
    document.querySelectorAll('[data-problem]').forEach(button => button.setAttribute('aria-pressed', String(button === problem)));
    const hero = problem.closest('.hero-stage');
    hero.dataset.concern = state.selectedProblem;
    hero.querySelector('#hero-choice-status').textContent = `${text().hero.selected}: ${text().hero.problems[state.selectedProblem]}`;
    hero.querySelector('.hero-continue').hidden = false;
    hero.dispatchEvent(new CustomEvent('hero-choice', { detail: problem }));
    return;
  }
  const demo = event.target.closest('[data-demo]');
  if (demo) { state.demo = demo.dataset.demo; render(); document.querySelector('#demo')?.scrollIntoView({ block:'center' }); return; }
  const answer = event.target.closest('[data-answer]');
  if (answer) { state.answers[answer.dataset.answer] = answer.dataset.value; renderQuiz(); return; }
  const route = event.target.closest('[data-route]');
  if (route) { state.route = route.dataset.route; setView('result'); return; }
  const action = event.target.closest('[data-action]')?.dataset.action;
  if (!action) return;
  if (action === 'home') setView('home');
  if (action === 'quiz') { state.step = 0; setView('quiz'); }
  if (action === 'catalog') setView('catalog');
  if (action === 'edit') { state.step = 0; setView('quiz'); }
  if (action === 'restart') restart();
  if (action === 'back') { if (state.step > 0) { state.step -= 1; renderQuiz(); } else setView('home'); }
  if (action === 'skip') {
    const key = text().quiz.steps[state.step][0]; state.answers[key] = 'skipped';
    if (state.step < 2) { state.step += 1; renderQuiz(); } else { state.route = determineRoute(); setView('result'); }
  }
  if (action === 'next') {
    const [key] = text().quiz.steps[state.step];
    if (!state.answers[key]) { renderQuiz(text().errors.choose); return; }
    if ((key === 'grade' || key === 'barrier') && state.answers[key] === 'other' && !state.answers.freeText.trim()) { renderQuiz(text().errors.free); return; }
    if (state.answers.freeText.length > 200) { renderQuiz(text().errors.long); return; }
    if (state.step < 2) { state.step += 1; renderQuiz(); } else { state.route = determineRoute(); setView('result'); }
  }
});

document.addEventListener('input', event => {
  if (event.target.id !== 'free-text') return;
  state.answers.freeText = event.target.value.slice(0, 200);
  const counter = document.querySelector('#free-counter');
  if (counter) counter.textContent = fill(text().quiz.counter, 200 - state.answers.freeText.length);
});

render();
