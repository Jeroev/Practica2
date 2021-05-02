'use strict'


import {createElement} from '../utils/createdElements.js'
import {createdInput} from '../components/Input.js'
import {Description} from '../components/text.js'
import {Button} from '../components/botton.js'
import {Title} from '../components/title.js'

var main = document.getElementById('main')

//se crea el title
var titleE1 = Title('Welcome JavaScript')
main.appendChild(titleE1)

//se crea el input
var __Input1__ = createdInput('input', {})
main.appendChild(__Input1__)

//Se crea el boton
var button = Button(__Input1__)
main.appendChild(button)

//Se crea la variable description el cual es el p
var description = Description('p', {id:'description'})
main.appendChild(description)






