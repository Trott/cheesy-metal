'use strict';
const metal = require('metal-name');
const cheese = require('cheese-name');

const last = (text) => {
  return text.split(' ').pop();
};

module.exports = function () {
  if (Math.random() < 0.5)
	 return `${metal({fragment: 'start'})} ${cheese()}`;
  return `${cheese()} ${metal({fragment: 'end'})}`;
};
