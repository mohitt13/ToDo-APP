const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/USER-TODO', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, () => console.log("Connected"));

const todoSchema = new mongoose.Schema({
    username: String,
    todos: [{todo: String, date: Date, status: Boolean, label: String}]

})

const signUpSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
    email: String
})

const todoModel = mongoose.model('Todo', todoSchema);

const signUpModel = mongoose.model('SignUp', signUpSchema);

app.post('/signUp', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    signUpModel.findOne({username: username, password: password}, (err, ans) => {
        if (ans != null) {
            // res.redirect("http://localhost:3000/");
            res.send("data already present")
        } else {
            const newUser = new signUpModel({
                name: req.body.name,
                username: req.body.username,
                password: req.body.password,
                email: req.body.email
            })
            newUser.save((err) => {
                if (!err)
                    res.status(200);
            })
        }

    });


});

app.post("/login", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    signUpModel.findOne({username: username, password: password}, (err, ans) => {
        if (ans != null)
            res.send("OK");
        else
            res.send("Account does not exist");

    })

})

app.post('/', async function (req, res) {
    const data = req.body.todo;
    let newTODO = {
        todo: data.text,
        date: data.date,
        status: data.completed,
        label: data.label
    }

    let to = [];
    await todoModel.findOne({username: req.body.username}, (err, ans) => {
        if (ans != null) {
            to = ans.todos;
        }
    })

    to.push(newTODO);
    // console.log("Array Length:",to.length);
    if (to.length > 1) {
        await todoModel.findOneAndUpdate({username: req.body.username}, {$set: {todos: to}});
        res.send("Data updated");
    } else {
        const va = new todoModel({
            username: req.body.username,
            todos: to
        })

        await va.save((err) => {
            if (!err)
                res.send("Data inserted")
            else
                res.send(err)
        })
    }
})

app.put('/update', async (req, res) => {
    const task = req.body.task;
    if (task === undefined) {
        console.log("undefined me");
    }
    const username = req.body.username;
    let todos = [];
    await todoModel.findOne({username: username}, async (err, ans) => {
        if (ans != null) {
            todos = ans.todos;
            todos.map((props) => {
                    if (task !== undefined && (props.todo).trim() === task.trim()) {
                        // console.log("Found Item");
                        let opp = !(props.status);
                        props.status = opp;
                    }
                }
            );
            // console.log(todos);
            await todoModel.findOneAndUpdate({username: username}, {$set: {todos: todos}});
            res.send("Data updated");
        } else
            res.send("Empty body");
    })
});

app.get('/todo/:username', (req, res) => {
    const username = req.params.username;
    // console.log(username);
    todoModel.findOne({username: username}, (err, ans) => {
        if (ans != null)
            res.send(ans);
        else
            res.send("User logged in for first time");
    });
})

app.get('/search/todos/:label', async (req, res) => {
    let label = req.params.label;
    let a = [], b = [];
    // console.log(label);
    await todoModel.findOne({}, (err, ans) => {
        if (ans != null)
            a = ans.todos;
    })

    a.map((props) => {
        if (props.label === label)
            b.push(props);
    })
    res.send(b);
})

app.get('/search/:date', (req, res) => {
    const date = req.params.date;
    todoModel.find({}, (err, ans) => {
        if (ans != null) {
            let a = [];
            for (let i = 0; i < ans.length; i++) {
                for (let j = 0; j < ans[i].todos.length; j++)
                    a.push({date: ans[i].todos[j].date, todo: ans[i].todos[j].todo});

            }
            a.sort((a, b) => {
                return a.date - b.date;
            });
            res.send(a);
        }
    })
});

app.listen(4000, () => {
    console.log("Server listening to port 4000");
})


module.exports = app;