'use strict';

var Sequelize = require('sequelize');

var db = require('../index');

var Student = db.define('Student', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  }
});

Student.getAll = function () {
  return this.findAll();
};

Student.getAllOnCampus = function (campusId) {
  return this.findAll(
    // {
    // where: {
    //   campusId: campusId
    // }
    // }
);
};

module.exports = Student;
