const {mongoose } = require("./../server/db/mongoose");

const {Todo} = require("./../server/models/todo")
const {User} = require("./../server/models/user");
const {ObjectID} = require("mongodb");

/* Todo.remove({}).then((result)=>{
    console.log(result);
})
 */

//Both return the doc
//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id: '5b52088c3eb62e27754da46e'}).then((todo)=>{

})

Todo.findByIdAndRemove("5b52088c3eb62e27754da46e").then((todo)=>{
    console.log(todo)
})