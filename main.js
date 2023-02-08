import { agregarCard, agregarOption, filtrarPersonajesSelect, filtrarPersonajesRadio } from './module/funciones.js'

const $container = document.getElementById('card-container')
const $select = document.getElementById( 'select' )
const $radioContainer = document.getElementById('radio-container')

const datos = personajes.data.filter( personaje => personaje.isAvailableForTest )

const rolesRepetidosArray = datos.map( personaje => personaje.role.displayName )

const rolesSinRepetidosSet = new Set( rolesRepetidosArray )

const rolesSinRepetidosArray = [ ...rolesSinRepetidosSet ]

agregarCard( datos, $container )
agregarOption( rolesSinRepetidosArray, $select )


// eventos

$radioContainer.addEventListener( 'change', (e) => {
    const filtrados = filtrarPersonajesRadio( datos, e.target.value )
    const filtradosPorSelect = filtrarPersonajesSelect( filtrados, $select.value )
    agregarCard( filtradosPorSelect, $container )
   
})

$select.addEventListener( 'change', (e) =>{
    const radioChecked = document.querySelector('input[type="radio"]:checked')
    const filtrados = filtrarPersonajesSelect( datos, $select.value )
    const filtradosRadio = filtrarPersonajesRadio( filtrados, radioChecked.value )
    agregarCard( filtradosRadio, $container )
})


/* function agregarOptionInner(lista, elemento){
    lista.forEach( rol => elemento.innerHTML += crearOptionInner(rol) )
}

function crearOptionInner( rol ){
    return `<option value=${rol}>${rol}</option>`
}
 */


