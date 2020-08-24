const express = require('express');
const router = express.Router();
const Todo = require('../Model/Todo');

router.post('/todo-create', (req, res) => {
    const todoCreate = new Todo({
        id: req.body.id,
        name: req.body.name,
        detail: req.body.detail
    });
    todoCreate.save((err, todo) => {
        if(err)
        {
            res.status(500).json({ errmsg: err });
        }
        else{
            res.status(200).json({ msg: todo })
        }
        
    })
});

router.get('/todo-read', (req, res) => {
    Todo.find({}, (err, todos) => {
        if(err){
            res.status(500).json({ errmsg: err });
        }
       else{
        res.status(200).json({ msg: todos })
       }
        
    })
});

router.put('/todo-update', (req, res) => {
    Todo.findById(req.body._id, (err, todo) => {
        if(err){
            res.status(500).json({ errmsg: err })
        }
        else{
            todo.id = req.body.id;
            todo.name = req.body.name;
            todo.detail = req.body.detail;
            todo.save((err, todo) => {
                if(err)
                {
                    res.status(500).json({ errmsg: err })
                }
                else{
                    res.status(200).json({ msg: todo })
                }
                
            })
        }
       
    })
})

router.delete('/todo-delete/:id', (req, res) => {
    Todo.findByIdAndDelete({ _id: req.params.id }, (err, todo) => {
        if (err)
        {
            res.status(500).json({ errmsg: err })
        }
        else{
            res.status(200).json({ msg: todo })
        }
        
    })
});

module.exports = router;