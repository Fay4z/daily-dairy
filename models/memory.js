const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    relive: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const Memory = mongoose.model("Memory", memorySchema);

module.exports = Memory ;
