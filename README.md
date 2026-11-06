# @lp-labs/euclidean-rhythm

Evenly distributed binary pulse patterns with rotation.

Original, standalone MIT TypeScript implementation with **zero runtime or peer dependencies**. ESM/CommonJS exports and separate declarations; Node18+ and compatible ES2022 browsers. No service, filesystem, network, clock or browser globals accessed on import. Compiler/formatter dependencies are development-only.

## Install

```sh
npm install @lp-labs/euclidean-rhythm
```

## Working example

```js
import { euclideanRhythm } from '@lp-labs/euclidean-rhythm';
if (euclideanRhythm(8, 3).join() !== '1,0,0,1,0,1,0,0') throw new Error('Rhythm');
```

CommonJS: `const api = require('@lp-labs/euclidean-rhythm')`.

## Behavior, customization and limits

euclideanRhythm(steps,pulses,rotation=0) uses floor-difference bucket distribution, rotated so first pulse at index0 before caller clockwise rotation. Steps1..10000,pulses0..steps, rotation safe integer +/-1e9 normalized. Zero/full pulses supported. O(steps); one deterministic Euclidean cyclic phase, not a claim of exact Bjorklund ordering. Returns0/1 number array, no playback.

Use the explicit function arguments and public types below to customize the documented behavior. There are no hidden environment settings or sibling-library requirements. Array inputs must be dense; sparse entries are invalid. Inputs are validated before a successful result is returned. Outputs do not mutate caller-owned inputs. Hostile proxies/getters and concurrent mutation are outside the contract.

## Errors and integration

Invalid data never produces an empty success-shaped substitute. TypeError reports incompatible runtime types/nonfinite numbers; RangeError reports unsupported ranges, invalid syntax, inconsistent states and exceeded budgets. Functions that explicitly return null, false or empty arrays describe those legitimate outcomes above. Errors propagate to callers; UI applications should catch at their boundary and visibly notify users. Numerical calculations use JavaScript IEEE754 unless the API explicitly uses bigint; compare approximate numerical results with application-appropriate tolerances.

## Complete public API

```ts
export declare function euclideanRhythm(steps: number, pulses: number, rotation?: number): number[];
```

## Performance and portability

Complexity and resource ceilings are specified above. Buffered synchronous algorithms do not create workers or timers; callers can move expensive work to their own worker. Limits are enforced, not silently truncated. No runtime imports from any other library. No compatibility or completeness claims beyond the stated scope.

## Support

If this library is useful to you, consider supporting its maintenance with a [donation via PayPal](https://www.paypal.me/LibinPrasanth).

## Author

Created by [Libin Prasanth](https://www.linkedin.com/in/libinprasanth/). Connect on LinkedIn for updates and discussion.
