'use strict';
var test = require('ava');
var cheese = require('./');

test('returns a random name', function (t) {
	t.assert(cheese().length > 0);
});

test('returns a two-part name', function (t) {
	t.assert(cheese().indexOf(' ') !== -1);
});

test('returns a different name each call', function (t) {
	// Make sure there's variety.
	const names = [cheese(), cheese(), cheese(), cheese(), cheese(), cheese()]
	const unique = names.filter((val, idx, arr) => arr.indexOf(val) === idx);
	t.assert(unique.length > 3);
})
