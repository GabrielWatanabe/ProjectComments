const Comment = require('../models/Comment');
const TextToSpeech = require('../../textToSpeech/text_to_speech')

class CommentController {
    async store(req, res) {
        console.log(req.body)
        const text = await Comment.create(req.body);
        const audio = TextToSpeech.create(req.body);
        return res.json(text);
    }

    async index(req, res) {
        const comments = await Comment.findAll();

        return res.json(comments);
    }
}

module.exports = new CommentController();