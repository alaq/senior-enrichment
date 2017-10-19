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

module.exports = campusRouter;
