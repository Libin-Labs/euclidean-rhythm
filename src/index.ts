function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function integer(value: number, min = 0, max = 1000000): number {
  if (!Number.isSafeInteger(value)) throw new RangeError('Expected safe integer');
  return finite(value, min, max);
}
export function euclideanRhythm(steps: number, pulses: number, rotation = 0): number[] {
  integer(steps, 1, 10000);
  integer(pulses, 0, steps);
  integer(rotation, -1e9, 1e9);
  const raw = Array.from(
      { length: steps },
      (_, i) => Math.floor(((i + 1) * pulses) / steps) - Math.floor((i * pulses) / steps),
    ),
    first = raw.indexOf(1),
    shift = ((rotation % steps) + steps) % steps,
    out: number[] = Array(steps).fill(0);
  for (let i = 0; i < steps; i++)
    out[(i + shift) % steps] = raw[(i + (first < 0 ? 0 : first)) % steps]!;
  return out;
}
