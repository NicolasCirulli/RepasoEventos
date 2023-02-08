
/* 
metodos string
    toUpperCase
    toLowerCase
    trim
    charAt
    slice
    substring
    replace
    split
    startWith

    const nombre = "NicoLas Catriel Cirulli"
    console.log( nombre.toUpperCase() )
    console.log( nombre.toLowerCase() )
    console.log( nombre.trim().charAt(0) )
    console.log( nombre.slice( 0, 4 ) )
    console.log( nombre.substring( 0, 4 ) )
    console.log( nombre.replace( " ", "-" ) )
    console.log( nombre.replaceAll( " ", "-" ) )
    console.log( nombre.split( " " ) )
    console.log( nombre.toLowerCase().startsWith( "niCo".toLowerCase() ) )
    console.log( nombre.toLowerCase().includes( "niCo".toLowerCase() ) )


metodos number

    parseInt
    parseFloat
    Number
    isNaN
    toFixed

    Math.min
    Math.max
    Math.random
    Math.ceil
    Math.floor
    Math.round

    const numero = 12.400
    const numeros = [7,2,3,20,6,16,23,20,6,16,23]
    const nombres = ['Nico', 'Jose','Lucre','Nico', 'Jose','Lucre', 'Nico', 'Jose','Lucre', 'Nico']
    console.log( parseInt( "12.234" ) )
    console.log( parseFloat( "12.234" ) )
    console.log( parseInt('hola') )
    console.log( Number( "12.234" ) )
    console.log( Number( "hola" ) )
    console.log( isNaN( Number( "hola" ) ) )
    console.log( numero.toFixed(3) )

    console.log( Math.min( ...numeros ) )
    console.log( Math.max( ...numeros ) )
    console.log( Math.random()  )
    console.log( nombres[ parseInt( Math.random() * 10 ) ] )

    console.log( Math.ceil( numero ) )
    console.log( Math.floor( numero ) )
    console.log( Math.round( numero ) )
*/


// location - url searchs params

const $container = document.getElementById( 'card-container' )

const params = new URLSearchParams(location.search )
const id = params.get( "id" ) 
const personaje = personajes.data.find( personaje =>  personaje.uuid == id)
/* const nombre = params.get( "name" )   */
/* const aux = personaje.displayName[0].toUpperCase() + personaje.displayName.slice(1).toLowerCase()
document.title = `${aux}'s details`  */


$container.innerHTML = `
    <div class="card border-secondary col-10">
    <img class="card-img-top" src="${personaje.fullPortraitV2}" alt="Title">
    <div class="card-body">
    <h4 class="card-title">${personaje.displayName}</h4>
    <p class="card-text">${personaje.description}</p>
    </div>
    </div>
`


