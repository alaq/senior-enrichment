'use strict';

var Sequelize = require('sequelize');

var db = require('../index');

var Campus = db.define('campus', {
  name: Sequelize.STRING
});

Campus.getAll = function () {
  return this.findAll();
};

module.exports = Campus;
