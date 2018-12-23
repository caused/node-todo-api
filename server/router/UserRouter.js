const userController = require("../controllers/UserController")

module.exports = (app) =>{

    app.post("/users",userController.createUser)
}