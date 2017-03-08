'use strict';
var test = require('ava');
var cheese = require('./');

test('returns a random name', function (t) {
	t.assert(cheese().length > 0);
});

test('returns a two-part name', function (t) {
	t.assert(cheese().indexOf(' ') !== -1);
});
