const mongoose = require('mongoose');

const todoSchemaModel = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    description:{
        type: String, 
    },
    dueDate:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("todos",todoSchemaModel);