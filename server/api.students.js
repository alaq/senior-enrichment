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

studentRouter.delete('/:id', (req, res) => {
	req.requestedStudent.destroy()
		.then(() => res.send(req.requestedStudent))
		.catch(console.error);
});

studentRouter.put('/:id', (req, res) => {
	req.requestedStudent.update(req.body.student)
		.then(() => res.json(req.body))
		.catch(console.error);
});

studentRouter.post('/', (req, res) => {
	Student.create(req.body.student)
		.then((what) => {
			console.log('response from db', what);
			res.json(req.body)
		})
		.catch(console.error);
});

module.exports = studentRouter;
