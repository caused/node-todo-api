const {mongoose } = require("./../server/db/mongoose");

const {Todo} = require("./../server/models/todo")
const {User} = require("./../server/models/user");
const {ObjectID} = require("mongodb");

//var id = "5b3a52982131333ea49a84a3";


/* if(!ObjectID.isValid(id)){
    console.log("ID not valid")
} */
/* Todo.find({
    _id: id
}).then((todos) =>{
    console.log("Todos", todos);
}).catch((err)=>{
    console.log("Error", err);
})

Todo.findOne({
    _id: id
}).then((todo) =>{
    console.log("Todo", todo);
}).catch((err)=>{
    console.log("Error", err);
}) */

/* Todo.findById(id).then((todo) =>{
    if(!todo){
        return console.log("Id not found")
    }
    console.log("Todo by id", todo);
}).catch((err)=>{
    console.log("Error", err);
}) */

var id = "5b28e34b7cfe0a0310df4afc"
User.findById(id).then((user)=>{
    if(!user){
        return console.log("User not found")
    }
    console.log("User", user)
}).catch((err)=>{
    console.log(err.message)
})