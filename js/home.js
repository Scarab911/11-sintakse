import {suma} from './algebra/suma.js';
import {skirtumas} from './algebra/skirtumas.js';
import {daugyba} from './algebra/sandauga.js';
import {dalyba} from './algebra/dalyba.js';
import {kvadratu} from './algebra/kvadratas.js';
import {vidurkis} from './algebra/vidurkis.js'
import {vientisasTekstas} from './tekstas/vientisas-tekstas.js'

import {pirmojiRaide} from './tekstasSuRodyklineFunkcija/pirmaRaide.js'
import {viduriniojiRaide} from './tekstasSuRodyklineFunkcija/vidurineRaide.js'
import {paskutiniojiRaide} from './tekstasSuRodyklineFunkcija/paskutineRaide.js'

import {arDidziojiRaide} from './tekstasSuRodyklineFunkcija/arNtojiDidzioji.js'
 
console.log('runing home........');

// const a = suma(5, 7);
// const b = skirtumas(5, 7);
// const c = daugyba(5, 7);
// const d = dalyba(5, 7);
// const e = kvadratu(5);
// const f = vidurkis(5, 7);

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);



// const x = vientisasTekstas(['labas', 'rytas']);
// console.log(x, '->', 'lbsrts');
// const z = vientisasTekstas(['mano', 'namas', 'yra', 'geltonas']);
// console.log(z, '->', 'maonmsyragts');
// const y = vientisasTekstas(['as', 'i', 'ten']);
// console.log(y, '->', 'aasiiiten');

// const w = vientisasTekstas(['']);
// console.log(w, '->', '');

// const p = vientisasTekstas(['x']);
// console.log(p, '->', 'xxx');

console.log('----------------------------------');

const a = pirmojiRaide('labas');
console.log(a, '->', 'l');

const b = viduriniojiRaide('kopustas');
console.log(b, '->', 'u');

const c = paskutiniojiRaide('as');
console.log(c, '->', 's');

const d = pirmojiRaide('');
console.log(d, '->', '');

console.log(arDidziojiRaide('Namas', 2), '->', true);