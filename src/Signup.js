import React, {useState} from "react";
import {useDispatch} from "react-redux";
import signup from "./actions/signup";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Todo from "./Todo";
import * as axios from "axios";
import "./Signup.css"

function Signup() {
    const dispatch = useDispatch();
    const [statusText, setStatusText] = useState("");

    const sign = (props) => {

        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        dispatch(signup({type: "SIGN-UP", username: username, password: password}));

        axios.post('http://localhost:4000/signUp', {
            name: name,
            username: username,
            password: password,
            email: email
        }).then(res => setStatusText(res.statusText));
    }


    return (
        <Router>
            <Switch>
                <Route exact path={'/todo'} component={Todo}></Route>
                <div className={"back"}>
                        <div className={"contain"}>
                            <input className={"text1"} name={'name'} id={'name'} placeholder={'Enter name'}/><br/>
                            <input className={"text1"} name={'username'} id={'username'} placeholder={'Enter username'}/><br/>
                            <input className={"text1"} name={'password'} id={'password'} placeholder={'Enter password'}/><br/>
                            <input className={"text1"} name={'email'} id={'email'} placeholder={'Enter email'}/><br/>
                            <Link to={'/todo'}>
                                <button className={"b"} type={'submit'} onClick={sign}>Submit</button>
                            </Link>
                            <br/>
                        </div>
                </div>
            </Switch>
        </Router>
    );
    // {
    //     console.log(variable.username)
    //     console.log(variable.password)
    // }
}

export default Signup;