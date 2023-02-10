export function agregarCard(lista, elemento){
    if( !lista ) return
    elemento.innerHTML = ''
    let template = ''
    for( let personaje of lista ){
        template += crearCard(personaje)
    }
    elemento.innerHTML += template
}

export function crearCard( personaje ){
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

export function agregarOption(lista, elemento){
    let fragment = document.createDocumentFragment()
    lista.forEach( rol => fragment.appendChild( crearOption(rol) ) )
    elemento.appendChild(fragment)
}

export function crearOption( rol ){

    let option = document.createElement('option')
    option.value = rol
    option.textContent = rol
    return option

}

export function filtrarPersonajesSelect( personajes, value ){
    if( value == 'all' ) return personajes
    return personajes.filter( personaje => personaje.role.displayName == value ) 
}   

export function filtrarPersonajesRadio( personajes, value){
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


