const mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
    author: { type: String, default: 'anonymous' },
    rant: { type: Boolean, default: false },
    stars: { type: Number, required: true },
    content: { type: String, default: ''}
})

module.exports = mongoose.model('comment', commentSchema)