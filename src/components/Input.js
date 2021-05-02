'use strict'

import {createElement, addChild} from '../utils/createdElements.js'
import {addData, searchPhrase, deletePhrase} from '../components/Http.js'

//Se crea el input, con atributos de type y id text
export function createdInput(tagName, attributtes) {
    var __Input1__ = createElement('input', {type: 'text',id:'inputs'}, [])
    //funcion donde, si se da enter, se busca o se eliminan palabras llamando a las otras funciones.
    __Input1__.addEventListener('keyup', function(Stanby){
        if (Stanby.code == 'Enter'){
            deletePhrase()
            searchPhrase(__Input1__)
            }
    })
    return __Input1__
}

