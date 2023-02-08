const $container = document.getElementById('card-container')
const $select = document.getElementById( 'select' )
const $radioContainer = document.getElementById('radio-container')

const datos = personajes.data.filter( personaje => personaje.isAvailableForTest )

const rolesRepetidosArray = datos.map( personaje => personaje.role.displayName )

const rolesSinRepetidosSet = new Set( rolesRepetidosArray )

const rolesSinRepetidosArray = [ ...rolesSinRepetidosSet ]

console.log( datos[0] )

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


// funciones

function agregarCard(lista, elemento){
    elemento.innerHTML = ''
    let template = ''
    for( let personaje of lista ){
        template += crearCard(personaje)
    }
    elemento.innerHTML += template
}

function crearCard( personaje ){
    return  `
    <div class="card col-9 col-md-3">
        <img class="card-img-top" src="${personaje.fullPortraitV2}" alt="Title">
        <div class="card-body">
            <h4 class="card-title text-center">${personaje.displayName}</h4>
            <p class="card-text text-center">${personaje.description}</p>
            <a class="btn btn-secondary" href="./details.html?id=${personaje.uuid}&name=${personaje.displayName}" > details </a> 
        </div>
    </div>
`
}

function agregarOption(lista, elemento){
    let fragment = document.createDocumentFragment()
    lista.forEach( rol => fragment.appendChild( crearOption(rol) ) )
    elemento.appendChild(fragment)
}

function crearOption( rol ){

    let option = document.createElement('option')
    option.value = rol
    option.textContent = rol
    return option

}

function filtrarPersonajesSelect( personajes, value ){
    if( value == 'all' ) return personajes
    return personajes.filter( personaje => personaje.role.displayName == value ) 
}   

function filtrarPersonajesRadio( personajes, value){
    if( value == 'all'){
        return personajes
    }
    let aux = personajes.filter( personaje => {
        if( value == 'base' ){
            return personaje.isBaseContent
        }
        if( value == 'Contracts' ){
            return !personaje.isBaseContent
        }
    } )

    return aux
}


/* function agregarOptionInner(lista, elemento){
    lista.forEach( rol => elemento.innerHTML += crearOptionInner(rol) )
}

function crearOptionInner( rol ){
    return `<option value=${rol}>${rol}</option>`
}
 */


