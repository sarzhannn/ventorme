import assert from 'node:assert/strict';
import { REGISTRATION_URL } from '../config.js';
import { readFile } from 'node:fs/promises';
assert.equal(REGISTRATION_URL, 'https://ventorme.ai/register?utm_source=hacknext&utm_campaign=team-113');
const app = await readFile(new URL('../app.js', import.meta.url), 'utf8');
assert.match(app, /href="\$\{REGISTRATION_URL\}"/);
assert.equal((app.match(/ventorme\.ai\/register/g) || []).length, 0, 'Registration URL must live only in config.js');
console.log('Registration URL is centralized and every generated registration CTA uses it.');
