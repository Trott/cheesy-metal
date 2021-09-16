'use strict'
const cheese = require('./')
const assert = require('assert')

// returns a random name
assert.ok(cheese().length > 0)

// returns a two-part name
assert.notStrictEqual(cheese().indexOf(' '), -1)

// returns a different name each call
{
  const names = [cheese(), cheese(), cheese(), cheese(), cheese(), cheese()]
  const unique = names.filter((val, idx, arr) => arr.indexOf(val) === idx)
  assert.ok(unique.length > 3)
}
