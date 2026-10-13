import assert from 'node:assert/strict';
import {polishCopy,universityDetails} from '../polish-copy.js';
import {translations} from '../translations.js';
import {actualInputs,gradeGuidance,personalMap,sessionContext} from '../personal-map.js';
import {sceneCopy} from '../content.js';
import {REGISTRATION_URL} from '../config.js';
import {readFile} from 'node:fs/promises';
const register=label=>`<a class="registration-cta" href="${REGISTRATION_URL}">${label}</a>`;
for(const lang of ['ru','kz','en']) {
  const p=polishCopy[lang],t=translations[lang];
  assert.deepEqual(Object.keys(p),Object.keys(polishCopy.ru));
  assert.equal(p.nav.length,5);assert.equal(p.faqExtra.length,6);assert.equal(p.journeyMore.length,4);
  assert.equal(p.gradeHints.length,5);assert.equal(p.ventormeValue.length,5);
  const state={lang,university:0,interest:null,selectedProblems:['career','exams'],answers:{grade:'grade78',barrier:'unknown',goal:'career',freeTexts:{}}};
  assert.match(sessionContext(state,t),/University College London/);
  assert.notEqual(gradeGuidance(state),gradeGuidance({...state,answers:{...state.answers,grade:'grade11'}}));
  for(const key of ['career','universities','grants','exams','plan']){
    const html=personalMap(state,t,sceneCopy[lang],key,'Reason',true,register);
    assert.ok(html.includes(p.transfer));assert.ok(html.includes(p.continue));assert.ok(html.includes(REGISTRATION_URL));
    assert.equal((html.match(/checkpoint-index/g)||[]).length,3);
  }
  const free={...state,answers:{grade:'other',barrier:'skipped',goal:'skipped',freeTexts:{grade:'<img src=x onerror=alert(1)>'}}};
  assert.ok(actualInputs(free,t).includes('&lt;img'));assert.ok(!actualInputs(free,t).includes('<img'));
}
assert.equal(universityDetails.length,7);
assert.ok(universityDetails.every(u=>u.url.startsWith('https://')&&['ru','kz','en'].every(lang=>u.country[lang])));
assert.doesNotMatch(JSON.stringify(polishCopy.en),/[А-Яа-яӘәҒғҚқҢңӨөҰұҮүҺһІі]/);
for(const file of ['app.js','chrome.js','scenes.js','personal-map.js']){
  const code=await readFile(new URL(`../${file}`,import.meta.url),'utf8');
  assert.doesNotMatch(code,/https:\/\/ventorme\.ai\/register/,'Only config.js may define the registration URL');
}
console.log('Polish: locale parity, truthful input mapping, five maps, grade differentiation, escaping, source URLs and registration constant passed.');
