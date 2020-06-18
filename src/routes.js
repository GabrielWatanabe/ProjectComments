const { Router } = require('express');

const routes = new Router();

const CommentController = require('./app/Controllers/CommentController');

routes.post('/comments', CommentController.store);
routes.get('/comments', CommentController.index);

routes.get('/', (req, res) => {
    res.json({ message: 'testando'})
})

module.exports = routes;