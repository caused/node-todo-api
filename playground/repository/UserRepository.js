var mongodb = require("../config/mongoDb");

function getUsers(callback){
    mongodb.connect((err, db)=>{
        if(err)
            return console.log(err);

         db.collection("Users").find().toArray(callback);   
    })
}


module.exports ={getUsers}