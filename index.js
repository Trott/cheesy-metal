'use strict';
const metal = require('metal-name')();
const cheese = require('cheese-name')();

const first = (text) => {
  return text.split(' ')[0];
};

const last = (text) => {
  return text.split(' ').pop();
};

module.exports = function () {
  if (Math.random() < 0.5)
	 return `${first(cheese)} ${last(metal)}`;
  return `${first(metal)} ${last(cheese)}`;
};
