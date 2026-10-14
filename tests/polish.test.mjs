import assert from 'node:assert/strict';
import {polishCopy,universityDetails} from '../polish-copy.js';
import {translations} from '../translations.js';
import {actualInputs,gradeGuidance,personalMap,sessionContext} from '../personal-map.js';
import {sceneCopy} from '../content.js';
import {routeGuides,editorialCopy} from '../route-guides.js';
import {REGISTRATION_URL} from '../config.js';
import {readFile} from 'node:fs/promises';
import {runInNewContext} from 'node:vm';
const themeSource=await readFile(new URL('../theme.js',import.meta.url),'utf8');
for(const denied of [false,true]) {
  const root={dataset:{theme:'light'}};
  runInNewContext(themeSource,{document:{documentElement:root,querySelector:()=>null},localStorage:{removeItem(){if(denied)throw Error('Storage denied');}}});
  assert.equal(root.dataset.theme,'dark');
}
const register=label=>`<a class="registration-cta" href="${REGISTRATION_URL}">${label}</a>`;
for(const lang of ['ru','kz','en']) {
  const p=polishCopy[lang],t=translations[lang];
  assert.deepEqual(Object.keys(editorialCopy[lang]),Object.keys(editorialCopy.ru));
  assert.deepEqual(Object.keys(routeGuides[lang]),['career','universities','grants','exams','plan']);
  assert.equal(editorialCopy[lang].quizSupport.length,3);
  assert.deepEqual(Object.keys(p),Object.keys(polishCopy.ru));
  assert.equal(p.nav.length,5);assert.equal(p.faqExtra.length,6);assert.equal(p.journeyMore.length,4);
  assert.equal(p.gradeHints.length,5);assert.equal(p.ventormeValue.length,5);
  const state={lang,university:0,interest:null,selectedProblems:['career','exams'],answers:{grade:'grade78',barrier:'unknown',goal:'career',freeTexts:{}}};
  assert.match(sessionContext(state,t),/University College London/);
  assert.notEqual(gradeGuidance(state),gradeGuidance({...state,answers:{...state.answers,grade:'grade11'}}));
  for(const key of ['career','universities','grants','exams','plan']){
    const guide=routeGuides[lang][key];
    assert.deepEqual(Object.keys(guide),Object.keys(routeGuides.ru.career));
    assert.equal(guide.now.length,2);assert.equal(guide.next.length,2);assert.equal(guide.preview.length,3);
    assert.ok([...guide.now,...guide.next,guide.handoff].every(s=>s.length>90),'Substantive guidance in every locale');
    const html=personalMap(state,t,sceneCopy[lang],key,'Reason',true,register);
    for(const copy of [guide.why,...guide.now,...guide.next,guide.handoff,guide.takeaway])assert.ok(html.includes(copy));
    const neutral=personalMap(state,t,sceneCopy[lang],key,'Catalog',false,register);
    assert.ok(!neutral.includes('answer-summary'));assert.ok(!neutral.includes('map-pace'));
    assert.ok(html.includes(p.transfer));assert.ok(html.includes(p.continue));assert.ok(html.includes(REGISTRATION_URL));
    assert.equal((html.match(/checkpoint-index/g)||[]).length,3);
    assert.equal((html.match(/class="first-move"/g)||[]).length,1);
    assert.ok(html.includes(`<h1>${t.routes[key][1]}</h1>`));
    assert.ok(html.includes(t.routes[key][0]));
    assert.ok(html.includes(p.firstMove)&&html.includes(p.detailsTitle));
    assert.ok(html.includes(`<p class="first-move-action">${guide.preview[0]}</p>`));
    assert.ok(html.indexOf('class="first-move"')<html.indexOf('class="map-destination"'));
    assert.ok(html.indexOf('class="map-destination"')<html.indexOf('class="map-details"'));
    assert.ok(html.indexOf('class="registration-cta"')<html.indexOf('class="map-details"'));
    assert.ok(html.indexOf('class="answer-summary"')>html.indexOf('class="map-details"'));
    assert.equal(html.split(p.ventormeValue[['career','universities','grants','exams','plan'].indexOf(key)]).length-1,1);
    assert.ok(html.includes('data-action="edit"')&&html.includes('data-action="catalog"'));
    assert.doesNotMatch(html,/<details[^>]*\bopen\b/);
  }
  const free={...state,answers:{grade:'other',barrier:'skipped',goal:'skipped',freeTexts:{grade:'<img src=x onerror=alert(1)>'}}};
  assert.ok(actualInputs(free,t).includes('&lt;img'));assert.ok(!actualInputs(free,t).includes('<img'));
}
assert.equal(universityDetails.length,7);
assert.ok(universityDetails.every(u=>u.url.startsWith('https://')&&['ru','kz','en'].every(lang=>u.country[lang])));
assert.doesNotMatch(JSON.stringify(polishCopy.en),/[А-Яа-яӘәҒғҚқҢңӨөҰұҮүҺһІі]/);
assert.doesNotMatch(JSON.stringify([routeGuides.en,editorialCopy.en]),/[А-Яа-яӘәҒғҚқҢңӨөҰұҮүҺһІі]/);
for(const file of ['app.js','chrome.js','scenes.js','personal-map.js']){
  const code=await readFile(new URL(`../${file}`,import.meta.url),'utf8');
  assert.doesNotMatch(code,/https:\/\/ventorme\.ai\/register/,'Only config.js may define the registration URL');
}
console.log('Polish: locale parity, truthful input mapping, five maps, grade differentiation, escaping, source URLs and registration constant passed.');
