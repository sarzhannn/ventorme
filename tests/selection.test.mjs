import assert from 'node:assert/strict';
import { PROBLEM_KEYS, normalizeProblems, resolveRoutes } from '../selection.js';

assert.deepEqual(normalizeProblems('grants'), ['grants'], 'Legacy single concern');
assert.deepEqual(normalizeProblems(['exams','bad','exams','career']), ['career','exams']);
assert.deepEqual(normalizeProblems(null), []);
for (let mask = 1; mask < 16; mask++) {
  const concerns = PROBLEM_KEYS.filter((_, index) => mask & (1 << index));
  for (const goal of [null, 'skipped', 'undecided']) {
    assert.deepEqual(resolveRoutes({goal,barrier:'money'}, concerns), concerns, 'No arbitrary priority');
    assert.deepEqual(resolveRoutes({goal}, [...concerns].reverse()), concerns, 'Selection order is not a priority');
  }
  for (const goal of [...PROBLEM_KEYS,'plan']) {
    assert.deepEqual(resolveRoutes({goal}, concerns), [goal], 'Explicit third answer takes priority');
  }
}
assert.deepEqual(resolveRoutes({}, []), ['career']);
for (const [barrier,route] of [['where','universities'],['money','grants'],['exam','exams']]) {
  assert.deepEqual(resolveRoutes({barrier}, []), [route]);
}
console.log('All 15 concern combinations, five explicit priorities and legacy/general fallbacks passed.');
