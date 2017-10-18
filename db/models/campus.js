'use strict';

var Sequelize = require('sequelize');

var db = require('../index');

var Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  image: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  }
});

Campus.getAll = function () {
  return this.findAll();
};

module.exports = Campus;
