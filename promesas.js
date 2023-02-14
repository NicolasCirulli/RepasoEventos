
/* console.log(' inicio ')
login('nico',123)
    .then( ( resolve ) => console.log(resolve) )
    .catch( ( error ) => console.log(error) )

console.log(' fin ')

function login(user, pass){
    return new Promise( (resolve, reject) => {
        if( user && pass ){
            resolve('bienvenido')
        }else{
            reject( {error:'Datos invalidos'} )
        }
    }) 
} */

import { agregarCard } from './module/funciones.js'
const cardContainer = document.getElementById('card-container')
console.log('inicio')
let datos;
fetch('https://valorant-api.com/v1/agents')
    .then( response => response.json() )
    .then( ( {data} ) => {
        console.log('data',data)
        datos = data
        console.log('datos', datos)
        agregarCard(datos, cardContainer )
    } )
    .catch( error => console.log('el error es', error) )
    
    
    
console.log(datos)


console.log('fin')

