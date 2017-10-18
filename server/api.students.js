const studentRouter = require('express').Router();

const { Student } = require('../db/models');


studentRouter.param('id', (req, res, next, id) => {
	Student.findById(id)
		.then(student => {
			if (!student) {
				const err = new Error('Not Found');
				err.status = 404;
				throw err;
			}
			req.requestedStudent = student;
			next();
		})
		.catch(next);
});

studentRouter.get('/', (req, res) => {
	Student.getAll({})
		.then(students => {
			res.json(students);
		}
		);
});

studentRouter.get('/:id', (req, res) => {
	res.send(req.requestedStudent);
});

module.exports = studentRouter;
