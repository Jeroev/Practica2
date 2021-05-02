'use strict'
// jsdoc
/**
 * create a HTML element with attributes and children
 * @param {string} tagName HTML tag
 * @param {Object} attributes HTML atributes
 * @param {Array} children HTML child elements
 * @returns {HTMLElement} DOM instance of HTMLElement
 * @example
 *
 * const el = createElement('h1', {class: 'title'}, ['Hi createElement'])
 * console.log(el)
 *
 * /<h1 class="title">Hi createElement</h1>
 */

export function createElement(tagName, attributes, children){
    if (typeof tagName !== 'string') throw new Error('tagname must be an string')

    const el = document.createElement(tagName)

    if (attributes) {
        if (Object.prototype.toString.call(attributes) !== '[object Object]') {//verificaqueseaunobjeto
            throw new Error('atributte must be an Object')
        }
        Object.keys(attributes).forEach(attr => {
            el.setAttribute(attr, attributes[attr])
        })
    }

    if (!Array.isArray(children)) throw new Error('children must be an Array')

    addChild(el, children)
    return el
}
/**
 *
 * @param {HTMLElement} parent
 * @param {Array} children
 */

export function addChild(parent, children){
    if (!Array.isArray(children)) throw new Error('children must be an Array')

    if (!(parent instanceof window.HTMLElement)) throw new Error('Parent must be an instance of HTMLElement')

    children.forEach(child => {
        if (child instanceof window.HTMLElement) {
            parent.appendChild(child)
        } else {
            parent.innerHTML = parent.innerHTML + child
        }
    })
}