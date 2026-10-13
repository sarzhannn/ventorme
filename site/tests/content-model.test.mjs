import assert from 'node:assert/strict';
import { translations } from '../translations.js';

const routeKeys = ['career', 'universities', 'grants', 'exams', 'plan'];

for (const locale of ['ru', 'kz', 'en']) {
  const text = translations[locale];
  assert.ok(text, `Missing ${locale} locale`);
  assert.equal(text.quiz.steps.length, 3, `${locale}: quiz must have 3 steps`);
  assert.equal(text.faq.items.length, 6, `${locale}: FAQ must have 6 items`);
  assert.equal(text.demo.options.length, 5, `${locale}: demo must have 5 options`);
  assert.deepEqual(Object.keys(text.routes), routeKeys, `${locale}: route set differs`);
  assert.deepEqual(Object.keys(text.hero.problems), routeKeys.slice(0, 4), `${locale}: problem set differs`);
  assert.equal(text.hero.titleLines.join(' '), text.hero.title, `${locale}: split title must preserve accessible text`);
  for (const key of ['pause', 'resume', 'reduced']) {
    assert.ok(text.hero.motion[key]?.trim(), `${locale}: missing motion label ${key}`);
  }
  for (const key of ['chooseHint', 'selected', 'continue']) {
    assert.ok(text.hero[key]?.trim(), `${locale}: missing selection label ${key}`);
  }
}

const collectStrings = value => {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (value && typeof value === 'object') return Object.values(value).flatMap(collectStrings);
  return [];
};

const english = collectStrings(translations.en).join('\n');
assert.doesNotMatch(english, /[А-Яа-яЁёӘәҒғҚқҢңӨөҰұҮүҺһІі]/, 'English locale contains Cyrillic text');

const kazakh = collectStrings(translations.kz).join('\n');
for (const fragment of ['попробуй', 'небольшой вопрос', 'Перейти', 'Назад', 'Пропустить']) {
  assert.equal(kazakh.includes(fragment), false, `Kazakh locale contains Russian fragment: ${fragment}`);
}

console.log('RU/KZ/EN contain complete quiz, route, demo, FAQ, and dynamic-message models.');
