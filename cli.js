#!/usr/bin/env node
'use strict'
const meow = require('meow')
const cheese = require('./')

meow({
  help: [
    'Examples',
    '  $ cheesy-metal',
    '  Queso Cult'
  ].join('\n')
})

console.log(cheese())
