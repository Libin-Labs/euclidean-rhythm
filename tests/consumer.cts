import { euclideanRhythm } from '@lp-labs/euclidean-rhythm';
if (euclideanRhythm(8, 3).join() !== '1,0,0,1,0,1,0,0') throw new Error('Rhythm');
// @ts-expect-error invalid argument must be rejected by declarations
euclideanRhythm('8', 3);
