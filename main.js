import { agregarCard, agregarOption, filtrarPersonajesSelect, filtrarPersonajesRadio, traerDatos } from './module/funciones.js'

const $container = document.getElementById('card-container')
const $select = document.getElementById( 'select' )
const $radioContainer = document.getElementById('radio-container')

let favoritos = JSON.parse( localStorage.getItem( 'favoritos' ) ) || []
console.log( favoritos )
traerDatos()
    .then( ({data}) => {
        datos = data.filter( personaje => personaje.isAvailableForTest )
        agregarCard( datos, $container, favoritos )
        agregarOption( [ ...new Set( datos.map( personaje => personaje.role.displayName ) ) ], $select )
    })
let datos; 

/* fetch( 'https://valorant-api.com/v1/agents' )
    .then( response => response.json())
    .then( ({data}) => {
        datos = data.filter( personaje => personaje.isAvailableForTest )
        agregarCard( datos, $container, favoritos )
        agregarOption( [ ...new Set( datos.map( personaje => personaje.role.displayName ) ) ], $select )
    } )
    .catch( err => console.log(err) ) 
*/


// eventos

$select.addEventListener( 'change', (e) =>{
    const radioChecked = document.querySelector('input[type="radio"]:checked')
    const filtrados = filtrarPersonajesSelect( datos, $select.value )
    const filtradosRadio = filtrarPersonajesRadio( filtrados, radioChecked.value )
    agregarCard( filtradosRadio, $container )
})

$radioContainer.addEventListener( 'change', (e) => {
    const filtrados = filtrarPersonajesRadio( datos, e.target.value )
    const filtradosPorSelect = filtrarPersonajesSelect( filtrados, $select.value )
    agregarCard( filtradosPorSelect, $container )
})

$container.addEventListener( 'click', e => {
    if( e.target.localName === 'button' ){
        if( favoritos.some( fav => fav.uuid == e.target.id) ){
            favoritos = favoritos.filter( fav => fav.uuid != e.target.id )
            e.target.classList.replace("btn-danger", "btn-primary")
            localStorage.setItem( 'favoritos', JSON.stringify( favoritos ) )
        }else{
            favoritos.push( datos.find( personaje => personaje.uuid == e.target.id ) )
            e.target.classList.replace("btn-primary", "btn-danger")
            localStorage.setItem( 'favoritos', JSON.stringify( favoritos ) )
        }
    }
})


