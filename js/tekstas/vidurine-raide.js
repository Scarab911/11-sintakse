
function vidurineRaide(text) {

    if (text === ''){
        return ''
    }

    // const textIlgis = text.length;  

    const vidurineRaidesIndexas = Math.ceil(text.length / 2 - 1);


    return text[vidurineRaidesIndexas];
}

export {vidurineRaide}

/*
tetis -> t (nelyginis) 
teksto ilgis 5
vidurine raide 1.5



mano -> a (lyginis)
teksto ilgis 4
vidurine 1

*/