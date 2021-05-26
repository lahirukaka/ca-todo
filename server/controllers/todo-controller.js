const mongoose = require('mongoose');
const Todo = require('../database/schema');

module.exports = function (app) {
    app.get('/todos/', (req, res) => {
        var todo = mongoose.model('Todo');
        todo.find(function (err, todos) {
            // if (err) return handleError(err);
            res.send(todos);
        })
    });

    app.post('/todos', (req, res) => {
        const body = req.body.todo;
        Todo.create({ text: body.text, deadline: body.deadline }, (err, response) => {
            // if (err) return handleError(err);
            res.send();
        });
    });

    app.patch('/todos/:todoId', (req, res) => {
        const body = req.body;
        const id = req.params.todoId;
        Todo.findById(id, (err, todo) => {
            todo.updateOne({ completed: body.completed }, (err, result) => {
                if (err) return handleError(err);
                res.send();
            });
        });
    });

    app.delete('/todos/:todoId', (req, res) => {
        const id = req.params.todoId;
        Todo.findById(id, (err, todo) => {
            if (todo === null) res.sendStatus(404);
            else {
                todo.delete();
                res.send();
            }
        });
    });
}