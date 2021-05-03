import {createElement, addChild} from '../utils/createdElements.js'



export function searchPhrase(InsideLink, paragraphClass){
    fetch('https://idwapi-juvasquez88.vercel.app/js')
        .then(response =>response.json())
        .then(receive => Object.values(receive['phrases']))
        .then(datos => {addData(datos, InsideLink, paragraphClass)})
}

//recorre el objeto que entrega la busqueda en el fetch,
// phrase: palabra
//entonces se abre dos veces la lista
export function addData(data, InsideLink, paragraphClass){
    let paragraph =  document.getElementById(paragraphClass)
    var pointer = 0
    for (const key in data){
        let match = InsideLink.value  //lo que esta en la barra de busqueda
        let listElement = String(Object.values(data[key])) //Segundo objeto
        let child = document.createElement('p', {}, [])
        let flag = true
        for (let i = 0; i < match.length; i++) {
            if (listElement[i].toUpperCase() != match[i].toUpperCase()) {
                flag = false
                break
            }
        }
        if (flag == false) {continue} //sigue con la otra iteracion
        child.appendChild(document.createTextNode(listElement))
        description.appendChild(child)
        pointer += 1
    }
    if (pointer == 0 && InsideLink.value.length > 0) {
        let child = createElement('p', {id: 'childNot'},[])
        child.appendChild(document.createTextNode('Word not found'))
        description.appendChild(child)
    }
}



export function deletePhrase() {
    description.innerHTML = ''
}