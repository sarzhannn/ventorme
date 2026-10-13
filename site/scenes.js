import { universities, testimonials, CONTENT_SOURCE, sceneCopy } from './content.js';
import { problemArtwork } from './hero.js';

const keys = ['career','universities','grants','exams','plan'];
const arrow = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg>';
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
const source = label => `<a class="source-link" href="${CONTENT_SOURCE}" target="_blank" rel="noopener">${label}${arrow}</a>`;
const controls = (c,id) => `<div class="rail-controls"><button type="button" data-rail="${id}" data-delta="-1" aria-controls="${id}" aria-label="${c.previous}">${arrow}</button><span class="rail-count" role="status" aria-atomic="true"></span><button type="button" data-rail="${id}" data-delta="1" aria-controls="${id}" aria-label="${c.next}">${arrow}</button></div>`;

export function routePanel(t, c, key) {
  const r=t.routes[key];
  return `<div class="route-notebook route-${key}"><div class="route-copy"><h3>${r[1]}</h3><p>${r[2]}</p><button type="button" class="button primary" data-route="${key}">${c.routeOpen}${arrow}</button></div><div class="route-steps"><h4>${c.routeExample}</h4><ol>${r[3].map(item=>`<li>${item}</li>`).join('')}</ol><p class="route-caveat">${r[4]}</p></div></div>`;
}

export function demoPanel(t,c,state) {
  const option=t.demo.options.find(item=>item[0]===state.demo);
  const custom=state.demo==='other';
  return `<div class="demo-layout"><div class="demo-question"><h3>${t.demo.question}</h3><div class="choice-grid">${t.demo.options.map((o,i)=>`<button type="button" class="choice" data-demo="${o[0]}" aria-pressed="${state.demo===o[0]}"><span class="choice-dot" aria-hidden="true"></span>${o[1]}</button>`).join('')}</div></div><div class="demo-response" aria-live="polite">
    <span class="demo-orbit" aria-hidden="true">${problemArtwork('career')}</span>
    ${option ? `<h3>${custom&&!state.demoSubmitted?c.demoOwn:t.demo.accepted}</h3>${custom?`<label for="demo-text">${c.demoOwn}</label><textarea id="demo-text" name="demo-text" maxlength="200" autocomplete="off" aria-describedby="demo-helper">${escape(state.demoText||'')}</textarea><p class="helper" id="demo-helper">${t.quiz.freeHint}</p><button type="button" class="button secondary" data-action="demo-submit">${c.demoSave}${arrow}</button><p class="error" id="demo-error" role="status"></p><div id="demo-custom-result" ${state.demoSubmitted?'':'hidden'}><p>${c.demoOwnResult}</p><p class="helper">${c.demoSaved}</p></div>`:`<p>${option[2]}</p>`}`:`<p class="demo-rest">${c.clarity}</p><p>${c.demoLead}</p>`}
    <div class="demo-registration" ${option&&(!custom||state.demoSubmitted)?'':'hidden'}>${state.register(t.demo.cta)}</div>
  </div></div>`;
}

export function renderScenes(t,state,registrationLink) {
  const c=sceneCopy[state.lang];
  return `<div class="landing-scenes">
  <section class="scene university-scene" id="universities" aria-labelledby="universities-title"><div class="scene-inner"><div class="scene-heading"><h2 id="universities-title" data-reveal="type">${c.universityTitle}</h2><div><p>${c.universityLead}</p><p class="rail-hint">${c.drag}</p></div></div>
    <div class="carousel" data-carousel><div class="university-rail" id="university-rail" data-track tabindex="0" role="region" aria-label="${c.gallery}">${universities.map((u,i)=>`<article class="university-poster poster-${i%4}" data-slide aria-label="${u.name}"><div class="poster-mark" translate="no" aria-hidden="true">${u.mark}</div><div class="poster-orbits" aria-hidden="true"><i></i><i></i><i></i></div><h3 translate="no">${u.name}</h3></article>`).join('')}</div>${controls(c,'university-rail')}</div>
    <div class="source-row"><p>${c.universitySource}</p>${source(c.source)}</div><button type="button" class="text-action" data-route="universities">${c.universityAction}${arrow}</button></div></section>

  <section class="scene uncertainty-scene"><div class="scene-inner uncertainty-layout"><div><h2 data-reveal="type">${c.uncertaintyTitle}</h2><p>${c.uncertaintyLead}</p></div><div class="question-field">${c.questions.map((q,i)=>`<p class="question-note note-${i}" data-reveal="note">${q}</p>`).join('')}<div class="question-resolution">${arrow}<strong>${c.clarity}</strong></div></div></div></section>

  <section class="scene journey-scene" id="how"><div class="scene-inner"><div class="scene-heading"><h2 data-reveal="type">${c.howTitle}</h2><p>${c.howLead}</p></div><ol class="journey-path">${c.steps.map((s,i)=>`<li data-journey-step="${i}"><button type="button" data-step-preview="${i}" aria-pressed="${i===0}" aria-controls="journey-description"><span class="step-number">${i+1}</span><span>${s[0]}</span></button></li>`).join('')}</ol><div class="journey-bottom"><p id="journey-description" aria-live="polite">${c.steps[0][1]}</p><button type="button" class="button secondary" data-action="home">${t.how.cta}${arrow}</button></div></div></section>

  <section class="scene route-scene" id="routes"><div class="scene-inner"><div class="scene-heading"><h2 data-reveal="type">${c.routesTitle}</h2><p>${c.routesLead}</p></div><div class="route-tabs" role="tablist" aria-label="${c.routeTabs}">${keys.map((key,i)=>`<button type="button" role="tab" id="tab-${key}" data-route-tab="${key}" aria-selected="${key===state.showcase}" tabindex="${key===state.showcase?0:-1}" aria-controls="route-showcase">${c.routeLabels[i]}</button>`).join('')}</div><div id="route-showcase" role="tabpanel" tabindex="0" aria-labelledby="tab-${state.showcase}">${routePanel(t,c,state.showcase)}</div></div></section>

  <section class="scene demo-scene" id="demo"><div class="scene-inner"><div class="scene-heading"><h2 data-reveal="type">${c.demoTitle}</h2><p>${c.demoLead}</p></div><div id="demo-panel">${demoPanel(t,c,{...state,register:registrationLink})}</div></div></section>

  <section class="scene reviews-scene"><div class="scene-inner"><div class="scene-heading"><h2 data-reveal="type">${c.reviewsTitle}</h2><p>${c.reviewsLead}</p></div><div class="carousel" data-carousel><div class="review-rail" id="review-rail" data-track tabindex="0" role="region" aria-label="${c.reviews}">${testimonials.map(review=>`<figure class="review-poster" data-slide><blockquote lang="${review.language}"><span aria-hidden="true">“</span>${review.quote}</blockquote><figcaption><strong translate="no">${review.author}</strong><span>${c.reviewOriginal}</span>${source(c.source)}</figcaption></figure>`).join('')}</div><div class="review-progress" aria-hidden="true"><span></span></div>${controls(c,'review-rail')}</div></div></section>

  <section class="scene trust-scene"><div class="scene-inner trust-layout"><div><h2 data-reveal="type">${c.trustTitle}</h2><p>${c.trustLead}</p><div class="trust-seal" aria-hidden="true">${arrow}</div></div><div><dl class="trust-list">${c.trustRows.map(row=>`<div><dt>${row[0]}</dt><dd>${row[1]}</dd></div>`).join('')}</dl><div class="faq-item"><h3><button type="button" data-disclosure aria-expanded="false" aria-controls="trust-checks">${t.trust.summary}<span class="disclosure-icon" aria-hidden="true"></span></button></h3><div class="disclosure-body" id="trust-checks" hidden><p>${t.trust.intro}</p><ol>${t.trust.checks.map(s=>`<li>${s}</li>`).join('')}</ol>${source(c.source)}</div></div></div></div></section>

  <section class="scene account-scene"><div class="scene-inner account-layout"><div><h2 data-reveal="type">${c.accountTitle}</h2><p>${c.accountLead}</p>${registrationLink(t.benefits.cta)}</div><div class="account-pass"><h3>${c.freeTitle}</h3><ul>${c.freeItems.map(item=>`<li><svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="m5 12 4 4 10-10"/></svg>${item}</li>`).join('')}</ul><div class="paid-note"><h4>${c.paidTitle}</h4><p>${c.paidText}</p>${source(c.terms)}</div></div></div></section>

  <section class="scene faq-scene" id="faq"><div class="scene-inner faq-layout"><h2 data-reveal="type">${c.faqTitle}</h2><div>${t.faq.items.map((item,i)=>`<div class="faq-item"><h3><button type="button" data-disclosure aria-expanded="false" aria-controls="faq-answer-${i}">${item[0]}<span class="disclosure-icon" aria-hidden="true"></span></button></h3><div class="disclosure-body" id="faq-answer-${i}" hidden><p>${item[1]}</p></div></div>`).join('')}</div></div></section>

  <section class="scene final-scene"><div class="scene-inner"><div class="final-arc" aria-hidden="true"></div><h2 class="final-title" data-reveal="final">${c.finalTitle.map(line=>`<span>${line}</span>`).join('')}</h2><div class="final-action"><p>${c.finalLead}</p>${registrationLink(t.final.cta)}<p class="registration-note">${t.final.note}</p></div></div></section>
  <footer class="site-footer"><a href="#start" data-action="home" translate="no">Ventorme<span>•</span></a><p>${c.footer}</p><button type="button" class="text-action" data-action="catalog">${c.routeCatalog}${arrow}</button></footer>
  </div>`;
}
