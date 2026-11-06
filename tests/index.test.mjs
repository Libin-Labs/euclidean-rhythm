import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('three in eight bucket phase', () => {
  assert.deepEqual(api.euclideanRhythm(8, 3), [1, 0, 0, 1, 0, 1, 0, 0]);
});
test('zero and all pulses', () => {
  assert.deepEqual(api.euclideanRhythm(3, 0), [0, 0, 0]);
  assert.deepEqual(api.euclideanRhythm(3, 3), [1, 1, 1]);
});
test('rotation', () => {
  assert.deepEqual(api.euclideanRhythm(4, 1, 1), [0, 1, 0, 0]);
});
test('negative rotation', () => {
  assert.deepEqual(api.euclideanRhythm(4, 1, -1), [0, 0, 0, 1]);
});
test('invalid counts', () => {
  assert.throws(() => api.euclideanRhythm(0, 0));
  assert.throws(() => api.euclideanRhythm(3, 4));
  assert.throws(() => api.euclideanRhythm(3, 1, 0.5));
});
test('pulse count and gap balance', () => {
  for (let n = 1; n <= 50; n++)
    for (let p = 1; p <= n; p++) {
      const a = api.euclideanRhythm(n, p),
        idx = a.flatMap((v, i) => (v ? [i] : [])),
        gaps = idx.map((x, i) => (idx[(i + 1) % p] - x + n) % n || n);
      assert.equal(
        a.reduce((s, x) => s + x, 0),
        p,
      );
      assert.ok(Math.max(...gaps) - Math.min(...gaps) <= 1);
    }
});
