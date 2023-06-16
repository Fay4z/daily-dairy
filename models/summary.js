const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const summarySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    emotion: {
        type: String,
        required: true
    },
    mostConsumed: {
        type: String,
        required: true
    },
    leastConsumed: {
        type: String,
        required: true
    },
    change: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const Summary = mongoose.model("Summary", summarySchema);

module.exports = Summary ;
