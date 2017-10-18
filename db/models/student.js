'use strict';

var Sequelize = require('sequelize');

var db = require('../index');

var Student = db.define('Student', {
  name: Sequelize.STRING
});

Student.getAll = function () {
  return this.findAll();
}

module.exports = Student;
