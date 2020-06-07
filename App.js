import React, {useState} from 'react';
import {todo, toggleTodo} from "./actions/todo";
import date from "./actions/date";
import {useDispatch, useSelector} from "react-redux";
import * as axios from "axios";
import date_reducer from "./reducers/date_reducer";


function App() {
    let i = 1;
    let element=0;
    const dispatch = useDispatch();
    const variable = useSelector(state => state.todo);
    const [inputData, setInputData] = useState("");

    function add() {

    }

    function foo() {

        const newDate = document.getElementById("date").value;
        const labelValue=document.getElementById("scripts").value;
        dispatch(todo({type: "TODO", text: inputData, date: newDate,label:labelValue, completed: false, id: ++element}));
        // dispatch(toggleTodo({inputData}));
        setInputData("");
        document.getElementById("input").value = " ";
        document.getElementById("date").value = "";
        document.getElementById("scripts").value="Personal";
    }

    function display() {

        axios.post("http://localhost:4000/", {
            'todo': variable,
        }).then(res => console.log(res.data));
    }

    function checkboxListener(e)
    {
        const strTemplate = "checkz";
        let str = e.target.id;
        if (str[5] !== 'z') {
            str = strTemplate + str[5];
        }
        const value=(e.target.value);
        console.log(value);
        document.getElementById(str).style.textDecoration = "line-through";
        const id=(e.target.getAttribute("commonattribute"));
        dispatch(toggleTodo({id}))
    }

    return (
        <div className="App">
            <input id={"input"} placeholder={"ADD TODO"} onChange={(e) => setInputData(e.target.value)}/>
            <input id={"date"} type={"date"} placeholder={"Set Date"}/>
            <select id={"scripts"}  name={"label"}>
                <option value={"Personal"}>Personal</option>
                <option value={"Company"}> Company </option>
                <option value={"Shopping"}>Shopping</option>
                <option value={"other"} id={"other"} onClick={add}>Other</option>
            </select><br/><br/>

            <button onClick={foo}>Click</button>


            <ul>
                {variable.map((props) =>
                    <li key={++element}>
                        <input commonattribute={props.id} type={"checkbox"} onClick={checkboxListener} id={"check" + i.toString()} value={props.text}/>
                        <label commonattribute={props.id} htmlFor={"check" + i.toString()} onClick={checkboxListener}
                               id={"checkz" + i.toString()}>
                                {props.text + " " + props.date} </label>
                        <label>{props.label}</label><br/>
                        {/*<label>{props.id}</label>*/}
                        {i++}
                    </li>

                )}
            </ul>

            <br/>

            <button onClick={display}>Final Submit</button>

        </div>
    );
}

export default App;
