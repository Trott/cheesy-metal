'use strict';
const metal = require('metal-name');
const cheese = require('cheese-name');

module.exports = function () {
  if (Math.random() < 0.5)
	 return `${metal({fragment: 'start'})} ${cheese()}`;
  return `${cheese()} ${metal({fragment: 'end'})}`;
};
