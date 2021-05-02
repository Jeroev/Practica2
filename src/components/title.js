'use strict'

import {createElement} from '../utils/createdElements.js'

export const Title = title => createElement('h1', {class: 'title', id: 'title'}, [title])