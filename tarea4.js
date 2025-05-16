//📘 Tarea: Análisis de calificaciones

//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja

const { ask } = require(`../helpers/input`)


async function main(){
    const analizarCalificaciones = [75, 80, 60, 100, 90, 70, 100, 65, 50, 80];

        const aprobados = [];
        const reprobados = [];
   

    for (let i = 0; i < analizarCalificaciones.length; i++) {
        
        const calificacion = {
            numero: analizarCalificaciones[i]
        };


        if (calificacion.numero > 70) {
            aprobados.push(calificacion);
        } else {
            reprobados.push(calificacion);
    }

    //*******FUNCION DEL PROMEDIO **************/

function obtenerPromedio(numeros) {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }
  const promedio = total / numeros.length;

  return promedio;

}
// ***********FUNCION CALIFICACION MAS ALTA/BAJA***********


function masAlta(nums) {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
  }
  return max;
}

function masBaja(nums) {
  let min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i];
  }
  return min;
}


//*********************************************** */
    
  
}



// **********IMPRIMIR TODAS LAS CALIFICACIONES**************

//      console.log("");
//         for (const calificacion of aprobados) {
//             console.log(`${calificacion.numero} está aprobado.`);
//             }
//             console.log("");
//             for (const calificacion of reprobados) {
//                 console.log(`${calificacion.numero} está reprobado.`);
//             }

            console.log(`\nTotal Alumnos: ${analizarCalificaciones.length} Evaluados.`);
            console.log(`\nTotal Aprobados: ${aprobados.length} Alumnos.`);
            console.log(`\nTotal Reprobados: ${reprobados.length} Alumnos.`);
            console.log(`\nPromedio General: ${obtenerPromedio(analizarCalificaciones)}.`);
            console.log(`\nCalificación Mas Alta: ${masAlta(analizarCalificaciones)}.`);
            console.log(`\nCalificación Mas Baja: ${masBaja(analizarCalificaciones)}.`);
        }
    
main ();
