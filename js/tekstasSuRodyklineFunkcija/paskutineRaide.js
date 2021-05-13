const paskutiniojiRaide = text => text === '' ? '' : text[text.length - 1];

export {paskutiniojiRaide}

console.log(paskutiniojiRaide('labas'));