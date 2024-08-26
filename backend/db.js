const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://kshitij:esdXfLs$ywF42a.@cluster0.ampvoxv.mongodb.net/simple-todo-app");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}
