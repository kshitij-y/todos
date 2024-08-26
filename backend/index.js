const express = require("express")
const app = express();
const {createTodo, updateTodo} = require("./types")
const { todo } =  require("./db")
const cors = require("cors");
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));

//expected input
// body {
    // title: string,
    // description: string
//}
app.post("/todo", async function(req, res){
    const input = req.body;
    const isValid = createTodo.safeParse(input);
    console.log("request came");
    if(!isValid.success){
        res.status(411).json({
            msg: "Oops! you sent wrong inputs"
        })
        return;
    }
    //put in mongo
    await todo.create({
        title: input.title,
        description: input.description,
        completed: false
    })

    res.json({
        msg: "todo created"
    });
});

app.get("/todos", async function(req, res){
    const todos = await todo.find({});
    res.json({
        todos
    })

});

app.put("/completed", async function(req, res){
    const input = req.body;
    const isValid = updateTodo.safeParse(input);
    if(!isValid.success){
        res.status(411).json({
            msg: "Oops! you sent wrong inputs"
        })
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    });
    res.json({
        msg: "Todo mark as completed"
    })
    
});
app.delete("/remove", async function(req, res){
    const input = req.body;
    const isValid = updateTodo.safeParse(input);
    if(!isValid.success){
        res.status(411).json({
            msg: "Oops! you sent wrong inputs"
        })
        return;
    }
    await todo.deleteOne({
        _id: req.body.id
    });
    res.json({
        msg: "Todo deleted"
    })
})
app.listen(3000);
console.log("Server running on port 3000");