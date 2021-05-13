import { pirmaRaide } from './pirma-raide.js'
import {vidurineRaide} from './vidurine-raide.js'
import {paskutineRaide} from './paskutine-raide.js'

function vientisasTekstas(textList) {
    let answer = '';

    for (let i = 0; i < textList.length; i++) {
        const text = textList[i];
        answer += pirmaRaide(text);
        answer += vidurineRaide(text);
        answer+= paskutineRaide(text);
    }

    return answer;
}

export { vientisasTekstas }