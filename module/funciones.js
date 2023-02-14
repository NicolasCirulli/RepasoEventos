export function agregarCard(lista, elemento, favoritos){
    if( !lista ) return
    elemento.innerHTML = ''
    let template = ''
    for( let personaje of lista ){
        template += crearCard(personaje, favoritos)
    }
    elemento.innerHTML += template
}

export function crearCard( personaje, favoritos){
    let aux = favoritos.some( fav => fav.uuid == personaje.uuid) ? "btn-danger" : "btn-primary"
    return  `
    <div class="card col-9 col-md-3">
        <img class="card-img-top" src="${personaje.fullPortraitV2}" alt="Title">
        <div class="card-body">
            <h4 class="card-title text-center">${personaje.displayName}</h4>
            <p class="card-text text-center">${personaje.description}</p>
            <div class="col-10 d-flex gap-5"> 
            <a class="btn btn-secondary col-5" href="./details.html?id=${personaje.uuid}&name=${personaje.displayName}" > details </a> 
            <button class="btn ${aux} col-5" id=${personaje.uuid} > fav </button>
            </div>
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

export async function traerDatos(){
    try{
        let response = await fetch( 'https://valorant-api.com/v1/agents' )
        let data = await response.json()
        return data
    }catch(error){
        console.log(error)
    }
}
