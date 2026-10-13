// Accept a legacy single concern as well as the new multi-select value.
export const PROBLEM_KEYS = ['career', 'universities', 'grants', 'exams'];
export function normalizeProblems(value) {
  const values = Array.isArray(value) ? value : [value];
  return PROBLEM_KEYS.filter(key => values.includes(key));
}

export function resolveRoutes(answers, concerns) {
  // An explicit answer to the existing third question is the user's priority.
  if ([...PROBLEM_KEYS, 'plan'].includes(answers.goal)) return [answers.goal];
  const selected = normalizeProblems(concerns);
  // Never invent a priority among several selected concerns.
  if (selected.length) return selected;
  return [({ where:'universities', money:'grants', exam:'exams' })[answers.barrier] || 'career'];
}
