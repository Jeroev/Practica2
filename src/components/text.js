'use strict'

import {createElement} from '../utils/createdElements.js'


export function Description(tagName, attributtes) {
    var description = createElement('p', {id:'description'}, [])
    return description
}