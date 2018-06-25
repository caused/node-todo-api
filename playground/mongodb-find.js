// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

var obj = new ObjectID();
console.log(obj);


MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client)=>{
    if(err){
        return console.log("Unable to connect to MongoDB Server");
    }
    console.log("Connected to MongoDB server");

    const db = client.db("TodoApp");

    /* db.collection("Todos").find({
        _id: new ObjectID("5afdbed2b43f192e04d36d08")
    }).toArray().then((docs)=>{
        console.log("Todos")
        console.log(JSON.stringify(docs, undefined, 2));
    },(err) =>{
        console.log("Unable to fetch todos")
    }) */

    /* db.collection("Todos").find().count().then((count)=>{
        console.log(`Todos count: ${count} `)
    },(err) =>{
        console.log("Unable to fetch todos", err)
    }) */

    db.collection("Users").find({
        name:"Gustavo"
    }).to().then((users)=>{
        console.log("Users")
        console.log(JSON.stringify(users, undefined, 2))
    }, (err)=>{
        console.log("Unable to fetch todos", err)
    })

    //client.close();
})
