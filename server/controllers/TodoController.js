var {mongoose} = require("../db/mongoose");
var {Todo} = require("../models/todo");
var {ObjectID} = require("mongodb");
const _ = require("lodash");

exports.createTodo = (req, res)=>{
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        res.status(200).json(doc);
    }, (err)=>{
        res.status(400).send(err);
    });
}

exports.getTodos = (req, res) =>{
    Todo.find().then((todos)=>{
        res.status(200).json({todos});
    }, (err)=>{
        res.status(400).send(err);
    })
}

exports.getTodoById = (req, res)=>{
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
       return res.status(404).send()
    }
    Todo.findById(id).then((todo)=>{
        if(!todo){
           return  res.status(404).send()
        }
        res.status(200).send({todo})
        
    }).catch((e)=>{
        res.status(400).send()
    })

}

exports.deleteById =  (req, res)=>{
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send()
    }

    Todo.findByIdAndRemove(id).then((todo)=>{
        if(!todo){
            return res.status(404).send()
        }

        res.status(200).send({todo});
    }).catch((e)=>{
        res.status(400).send()
    })
}

exports.updateTodo = (req, res)=>{
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if(!ObjectID.isValid(id)){
        return res.status(404).send()
    }

    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    }else{
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set:body}, {new:true}).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }
        res.send({todo});
    }).catch((e)=>{
        res.status(400).send();
    })
}