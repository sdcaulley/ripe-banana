const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    }
});

const Actor = mongoose.model('Actor', schema);
module.exports = Actor;