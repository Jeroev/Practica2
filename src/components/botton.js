'use strict'

import {createElement} from '../utils/createdElements.js'
import {searchPhrase, deletePhrase} from '../components/Http.js'


export function Button(InsideLink) {
    var button = createElement('button', {id: 'button'}, ['Search'])
    //Se hace la función del boton cuando se le de clik busque palabras
    button.addEventListener('click', function () {
        deletePhrase()
        searchPhrase(InsideLink)
    })
    return button
}


