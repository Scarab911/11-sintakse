import {suma} from './algebra/suma.js';
import {skirtumas} from './algebra/skirtumas.js';
import {daugyba} from './algebra/sandauga.js';
import {dalyba} from './algebra/dalyba.js';
import {kvadratu} from './algebra/kvadratas.js';

console.log('runing home........');

const a = suma(5, 7);
const b = skirtumas(5, 7);
const c = daugyba(5, 7);
const d = dalyba(5, 7);
const e = kvadratu(5);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);



const x = (vientisasTekstas(['labas', 'rytas']),'->', 'lbsrts');
console.log(x);
const z = (vientisasTekstas(['mano', 'namas', 'yra', 'geltonas']),'->', 'maonmsyragts');
console.log(z);
const y = (vientisasTekstas(['as', 'i', 'ten']), '->', 'aasiiiten');
console.log(y);