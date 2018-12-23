require("./config/config")

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

const port = process.env.PORT;
app.use(bodyParser.json())


require("./router/TodoRouter")(app);
require("./router/UserRouter")(app);

app.listen(port, ()=>{
    console.log(`Started on port ${port}`);
})

module.exports = {app}


