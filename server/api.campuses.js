const campusRouter = require('express').Router();

const { Campus, Student } = require('../db/models');


campusRouter.param('id', (req, res, next, id) => {
	Campus.findById(id)
		.then(campus => {
			if (!campus) {
				const err = new Error('Not Found');
				err.status = 404;
				throw err;
			}
			req.requestedCampus = campus;
			console.log('campus found', campus);
			next();
		})
		.catch(next);
});

campusRouter.get('/', (req, res) => {
	Campus.getAll({})
		.then(campuses => {
			res.json(campuses);
		}
		);
});

campusRouter.get('/:id', (req, res) => {
	res.send(req.requestedCampus);
});

campusRouter.delete('/:id', (req, res) => {
	req.requestedCampus.destroy()
		.then(() => res.send(req.requestedCampus))
		.catch(console.error);
});

campusRouter.put('/:id', (req, res) => {
	console.log(req.body.campus);
	req.requestedCampus.update(req.body.campus)
		.then((what) => {
			console.log('response from db', what);
			res.json(req.body)
		})
		.catch(console.error);
});

campusRouter.post('/', (req, res) => {
	console.log(req.body);
	Campus.create(req.body.campus)
		.then((what) => {
			console.log('response from db', what);
			res.json(req.body)
		})
		.catch(console.error);
});


module.exports = campusRouter;
