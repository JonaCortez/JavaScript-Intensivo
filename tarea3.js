const { ask } = require('../helpers/input')

async function main() {
    const nombres = ["Sergio", "Karla", "Ernesto", "Maribel", "María", "Víctor", "Sara", "Miguel"]
    const edades = ["18", "19", "17", "16", "17", "18", "16", "18"]

    const siPuedenVotar = [];
    const noPuedenVotar = [];

    for (let i = 0; i < nombres.length; i++) {
        
        const persona = {
            nombre: nombres[i],
            edad: edades[i]
        };

        if (persona.edad >= 18) {
            siPuedenVotar.push(persona);
        } else {
            noPuedenVotar.push(persona);
        }
    }

    console.log("");
        for (const persona of siPuedenVotar) {
            console.log(`${persona.nombre} ${persona.edad} años si puede votar.`);
            }
            console.log("");
            for (const persona of noPuedenVotar) {
                console.log(`${persona.nombre} ${persona.edad} años no puede votar.`);
            }
            console.log(`\nTotal Si Votan: ${siPuedenVotar.length}`);
            console.log(`\nTotal No Votan: ${noPuedenVotar.length}`);
        }
main ();

