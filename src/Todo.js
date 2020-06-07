import React, {useEffect, useMemo, useState} from 'react';
import {todo, toggleTodo} from "./actions/todo";
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import * as axios from "axios";
import {Card, CardBody, CardTitle, CardText} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import App from "./App";
import search from "./actions/search";
import "./Todo.css"

function Todo() {
    const val = useSelector(state => state.signup);
    const searchVal = useSelector(state => state.search);
    let username = val.username;
    let a = [], label = [];
    let attr;
    useEffect(async () => {
            let url = "http://localhost:4000/todo/" + username;
            await axios.get(url).then(res => attr = res.data);
            if (attr !== "User logged in for first time") {
                a = attr.todos;
                await a.map((props) => {
                    // noinspection JSValidateTypes
                    if (props.status !== true) {

                        dispatch(todo({
                            type: "TODO",
                            username: username,
                            text: props.todo,
                            date: props.date,
                            label: props.label,
                            completed: props.status,
                            id: ++element
                        }));
                    }
                })
            }
        }
        , [val]);

    let i = 1, j = 1;
    let element = 0;
    const dispatch = useDispatch();
    const variable = useSelector(state => state.todo);
    const [inputData, setInputData] = useState("");


    function foo(e) {

        const newDate = document.getElementById("date").value;
        let labelValue = document.getElementById("scripts").value;
        if (labelValue === "Other") {
            const otherValue = document.getElementById("option").value;
            labelValue = otherValue;
            let inputOption = document.getElementById("option");
            inputOption.remove();
        }
        // noinspection JSValidateTypes
        dispatch(todo({
            type: "TODO",
            username: username,
            text: inputData,
            date: newDate,
            label: labelValue,
            completed: false,
            id: ++element
        }));
        axios.post("http://localhost:4000/", {
            username: username,
            todo: {
                text: inputData,
                date: newDate,
                label: labelValue,
                completed: false
            }
        }).then(res => console.log(res.data))

        setInputData("");
        document.getElementById("input").value = " ";
        document.getElementById("date").value = "";
        document.getElementById("scripts").value = "Personal";

    }


    function add() {
        if (document.getElementById("scripts").value === "Other") {
            let element = document.createElement("input");
            element.setAttribute("type", "text");
            element.setAttribute("id", "option");
            element.setAttribute("value", "");
            element.setAttribute("name", "other");
            element.setAttribute("style", "width:200px");
            document.body.appendChild(element);
        }

    }

    function checkboxListener(e) {
        const strTemplate = "checkz";
        let str = e.target.id;
        if (str[5] !== 'z') {
            str = strTemplate + str[5];
        }
        const value = (e.target.value);
        console.log("Value " + value);
        document.getElementById(str).style.textDecoration = "line-through";
        const id = (e.target.getAttribute("commonattribute"));
        // noinspection JSValidateTypes
        dispatch(toggleTodo({id}))
        axios.put("http://localhost:4000/update", {
            username: username,
            task: value
        }).then(res => console.log(res.data));

    }

    return (

        <Router>
            <Switch>
                <Route exact path={'/'} component={App}/>
                <div className={"background"}>

                    <div >

                        <select className={"searchBar"} id={"search"}>
                            <option defaultValue={""}>Search</option>
                            <option value={"Date"}>Date</option>
                            <option value={"Label"}>Label</option>
                            <option value={"Task"}>Task Name</option>
                        </select>

                        <Link to={'/'}>
                            <button className={"logOut"}>Logout</button>
                        </Link>
                        <br/><br/><br/><br/>
                    </div>

                    {variable.map((props) => {
                            return (
                                    <div >
                                    <CardBody id={"card"} className={"card"} body inverse style={{ backgroundColor: '#373939', borderColor: '#373939' }}>

                                        <label  className={"label"} commonattribute={props.id} htmlFor={"check" + i.toString()}
                                               onClick={checkboxListener}
                                               id={"checkz" + i.toString()} value={props.text}><input commonattribute={props.id} type={"checkbox"} onClick={checkboxListener}
                                                                                                      id={"check" + i.toString()} value={props.text} /> {props.text} </label>
                                        <CardText>Due Date {props.date}</CardText>
                                        <CardText>{props.label}</CardText><br/>
                                        <div style={{display:"none"}}>
                                        {i++}

                                        </div>
                                    </CardBody>
                                        <br/>
                                    </div>




                            )

                        }
                    )
                    }

                    <input className={"addTask"} id={"input"} placeholder={"ADD Task"} onChange={(e) => setInputData(e.target.value)}/>
                    <input className={"date"} id={"date"} type={"date"}/>
                    <select className={"dropdown"} id={"scripts"} onChange={add} name={"label"}>
                        <option value={"Personal"}>Personal</option>
                        <option value={"Company"}> Company</option>
                        <option value={"Shopping"}>Shopping</option>
                        <option value={"Other"}>Other</option>
                    </select>

                    <button className={"add"} onClick={foo}>+</button>
                    <br/><br/>

                </div>
            </Switch>
        </Router>
    );
}

export default Todo;