const todo = require('../models/todo');

exports.getAllTodo = async (req, res) => {
    try {
        const Todos = await todo.find({});
        // console.log('Books:', books);
        res.json(Todos);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ message: error.message });
    }
};

exports.postNewTodo = async (req, res) => {
    try {
        const newtodo = new todo(req.body);
        await newtodo.save();
        res.status(201).json(newtodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.putUpdateTodo = async (req, res) => {
    try {
        const updatedTodo = await todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedTodo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        res.json(updatedTodo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.deleteTodo = async (req, res) => {
    try {
        await todo.findByIdAndDelete(req.params.id);
        res.json({ message: 'Todo deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
