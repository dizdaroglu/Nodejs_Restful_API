'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    releaseYear: {
        type: String,
        default: ""
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    imageUrl: {
        type: String
    },
});
// a setter
MovieSchema.path('name').set((inputString) => {
    return inputString[0].toUpperCase() + inputString.slice(1);
});
module.exports = mongoose.model('Movie', MovieSchema);