const mongoose = require('mongoose');

const card_schema = new mongoose.Schema({
    title: {type: String, default: null},
    summary: {type: String, default: null},
    button1Text: {type: String, default: null},
    button1Link: {type: String, default: null},
    button2Text: {type: String, default: null},
    button2Link: {type: String, default: null},
    longDescription: {type: String, default: null},
    cardType: {type: String, default: null, enum: ['project','work','activity']},
    image: {data: Buffer, contentType: String},
    date: {type: String, default: null}
});

mongoose.model('Card', card_schema);

module.exports = mongoose.model('Card');