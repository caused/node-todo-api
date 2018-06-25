const {MongoClient, ObjectID } = require("mongodb");

var db = null;
var connection = null;

function connect(callback){
    if(connection) return callback(null,connection)

    MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) =>{
        if(err){
           return callback(err, null);
        }else{
            connection = client;
            db = client.db("TodoApp");
            return callback(null, db);        
        }
    })
}

function disconnect(){
    if(!connection) return true;
    connection.close();
    connection = null;
    return true;
}

module.exports = {connect, disconnect}