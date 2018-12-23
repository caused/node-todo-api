const todoController = require("../controllers/TodoController")

module.exports = (app) =>{

    app.post("/todos", todoController.createTodo)

    app.get("/todos", todoController.getTodos)

    app.get("/todos/:id", todoController.getTodoById)

    app.delete("/todos/:id", todoController.deleteById)

    app.patch("/todos/:id", todoController.updateTodo)
}