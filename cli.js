#!/usr/bin/env node
'use strict'
var meow = require('meow')
var cheese = require('./')

meow({
  help: [
    'Examples',
    '  $ cheesy-metal',
    '  Queso Cult'
  ].join('\n')
})

console.log(cheese())
