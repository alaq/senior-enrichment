'use strict';

var Sequelize = require('sequelize');
var db = require('../index');
var Student = require('./student');

var Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    // unique: true,
    validate: {
      notEmpty: true,
    }
  },
  image: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  }
},
{
  defaultScope: {
    include: [Student]
  }
});

Campus.getAll = function () {
  return this.findAll();
};

module.exports = Campus;
