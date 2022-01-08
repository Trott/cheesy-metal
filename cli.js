#!/usr/bin/env node
import meow from 'meow'
import cheese from './index.js'

meow({
  help: [
    'Examples',
    '  $ cheesy-metal',
    '  Queso Cult'
  ].join('\n'),
  importMeta: import.meta
})

console.log(cheese())
