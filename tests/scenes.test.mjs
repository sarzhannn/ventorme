import assert from 'node:assert/strict';
import {sceneCopy,universities,testimonials,CONTENT_SOURCE} from '../content.js';
import {translations} from '../translations.js';
import {renderScenes} from '../scenes.js';
import {REGISTRATION_URL} from '../config.js';
import {mediaCopy} from '../media-copy.js';
import {particleMarkup} from '../ambient.js';
import {access} from 'node:fs/promises';
const strings=v=>typeof v==='string'?[v]:Array.isArray(v)?v.flatMap(strings):Object.values(v).flatMap(strings);
for(const lang of ['ru','kz','en']) {
  const c=sceneCopy[lang];
  assert.deepEqual(Object.keys(c),Object.keys(sceneCopy.ru));
  assert.equal(c.steps.length,4);assert.equal(c.routeLabels.length,5);assert.equal(c.freeItems.length,4);
  assert.ok(strings(c).every(s=>s.trim().length>0));
  const html=renderScenes(translations[lang],{lang,showcase:'career',demo:null},label=>`<a class="registration-cta" href="${REGISTRATION_URL}">${label}</a>`);
  assert.equal((html.match(/class="scene /g)||[]).length,10);
  assert.equal((html.match(/data-route-tab=/g)||[]).length,5);
  assert.equal((html.match(/aria-controls="faq-answer-/g)||[]).length,6);
  for(const u of universities)assert.ok(html.includes(u.name));
  for(const review of testimonials){assert.ok(html.includes(review.quote));assert.ok(html.includes(review.summary));}
  assert.equal((html.match(/blockquote lang="en" translate="no"/g)||[]).length,testimonials.length);
  assert.equal((html.match(/class="poster-logo"/g)||[]).length,7);
  assert.ok(html.includes(mediaCopy[lang].admissions[0]));
  assert.deepEqual(Object.keys(mediaCopy[lang]),Object.keys(mediaCopy.ru));
}
assert.doesNotMatch(strings(sceneCopy.en).join(' '),/[А-Яа-яӘәҒғҚқҢңӨөҰұҮүҺһІі]/);
assert.equal(CONTENT_SOURCE,'https://ventorme.ai/');
assert.ok(testimonials.every(r=>r.language==='en'&&r.author&&r.quote));
assert.ok(testimonials.map(r=>r.quote).join(' ').split(/\s+/).length<=25);
for(const file of [...universities.map(u=>u.logo),...testimonials.map(r=>r.photo).filter(Boolean)])await access(new URL('../'+file,import.meta.url));
assert.ok(particleMarkup('exams').includes('IELTS'));assert.ok(particleMarkup('exams').includes('SAT'));
assert.ok(particleMarkup().includes('aria-hidden="true"'));
assert.equal((particleMarkup().match(/class="ambient-particle"/g)||[]).length,12);
console.log('Ten new scenes, three locales, five tabs, six FAQs and source-backed data passed.');
