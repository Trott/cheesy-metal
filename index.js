'use strict';
const metal = require('metal-name');
const cheese = require('cheese-name');

const first = (text) => {
  return text.split(' ')[0];
};

const last = (text) => {
  return text.split(' ').pop();
};

module.exports = function () {
  let cheeseName = cheese();
  let metalName = metal();

  if (Math.random() < 0.5)
	 return `${first(cheeseName)} ${last(metalName)}`;
  return `${first(metalName)} ${last(cheeseName)}`;
};
