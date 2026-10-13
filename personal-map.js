import { polishCopy } from './polish-copy.js';
import { universities } from './content.js';
import { diagram, escapeHtml as esc } from './graphics.js';

const keys = ['career','universities','grants','exams','plan'];
const grades = ['grade78','grade9','grade10','grade11','other'];
export function sessionContext(state,t) {
  const c = polishCopy[state.lang], u = universities[state.university];
  const activity = t.demo.options.find(option=>option[0]===state.interest);
  return `${u?`<p class="context-line"><strong>${c.universityContext}:</strong> <span translate="no">${u.name}</span></p>`:''}${activity?`<p class="context-line"><strong>${c.interestContext}:</strong> ${esc(state.interest==='other'?state.demoText:activity[1])}</p>`:''}`;
}
export function actualInputs(state,t) {
  const c = polishCopy[state.lang];
  return `<section class="answer-summary"><h2>${c.inputs}</h2><dl>${t.quiz.steps.map(([key,title,,options])=>{
    const value=state.answers[key], option=options.find(o=>o[0]===value);
    const answer=value==='other'&&state.answers.freeTexts?.[key]?.trim()?state.answers.freeTexts[key]:option?.[1]||c.missing;
    return `<div><dt>${key==='grade'?c.gradeTitle:title}</dt><dd>${esc(answer)}</dd></div>`;
  }).join('')}${state.selectedProblems.length?`<div><dt>${c.concerns}</dt><dd>${state.selectedProblems.map(k=>t.hero.problems[k]).join(' · ')}</dd></div>`:''}</dl>${sessionContext(state,t)}</section>`;
}
export function gradeGuidance(state) {
  const index=grades.indexOf(state.answers.grade);
  return index<0?'':polishCopy[state.lang].gradeAdvice[index];
}
export function personalMap(state,t,c,key,reason,personalized,register) {
  const p=polishCopy[state.lang],r=t.routes[key],other=state.selectedProblems.filter(k=>k!==key);
  return `<div class="shell view result-view personal-map"><div class="map-heading"><div><p class="map-label">${personalized?p.resultTitle:c.routeOverview}</p><h1>${r[0]}</h1><p class="lead">${personalized?p.resultNote:c.routeNeutral}</p></div><div class="map-emblem">${diagram(key)}</div></div><p class="result-reason"><strong>${c.answerReason}</strong> — ${reason}</p>
  ${personalized?actualInputs(state,t):''}
  <section class="map-checkpoints" aria-label="${t.result.actions}"><article><span class="checkpoint-index" aria-hidden="true">1</span><h2>${p.now}</h2><p>${personalized?gradeGuidance(state):''}</p><p>${r[3][0]}</p></article><article><span class="checkpoint-index" aria-hidden="true">2</span><h2>${p.next}</h2><p>${r[3][1]}</p><p>${r[3][2]}</p>${personalized&&universities[state.university]?`<p><span translate="no">${universities[state.university].name}</span>: ${p.universityCheck}</p>`:''}</article><article><span class="checkpoint-index" aria-hidden="true">3</span><h2>${p.inVentorme}</h2><p>${p.ventormeValue[keys.indexOf(key)]}</p></article></section>
  ${personalized&&other.length?`<section class="additional-concerns"><h2>${p.additional}</h2>${other.map(k=>`<article><h3>${c.routeLabels[keys.indexOf(k)]}</h3><p>${t.routes[k][3][0]}</p><button class="text-action" data-route="${k}">${t.common.open}</button></article>`).join('')}</section>`:''}
  <div class="map-destination"><p class="notice">${r[4]}</p>${register(p.continue)}<p class="transfer-note">${p.transfer}</p><div class="button-row"><button class="button ghost" data-action="edit">${t.common.edit}</button><button class="button ghost" data-action="catalog">${t.common.another}</button><button class="button ghost" data-action="restart">${t.common.restart}</button></div></div></div>`;
}
export function quizArtwork(state,t) {
  const c=polishCopy[state.lang],key=t.quiz.steps[state.step][0],index=grades.indexOf(state.answers.grade);
  return `<div class="quiz-visual quiz-visual-${key}">${diagram(key==='grade'?'plan':key==='barrier'?'fork':state.answers.goal||'career')}<div>${key==='grade'?`<div class="grade-timeline" aria-hidden="true">${['7–8','9','10','11'].map((label,i)=>`<span class="${i===index?'is-active':''}">${label}</span>`).join('')}</div><p class="quiz-context-hint">${index<0?t.quiz.steps[0][2]:c.gradeHints[index]}</p>`:`<p class="quiz-context-hint">${key==='barrier'?c.barrierHint:c.goalHint}</p>`}</div></div>`;
}
