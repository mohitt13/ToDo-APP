import React from "react";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import Todo from "./Todo";
import signup from "./actions/signup";
import {useDispatch} from "react-redux";
import * as axios from "axios";
import "./Login.css";

function Login() {
    const dispatch = useDispatch();
    const login = () => {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        dispatch(signup({type: "SIGN-UP", username: username, password: password}));

        axios.post("http://localhost:4000/login", {
            username: username,
            password: password
        }).then(res => console.log(res.data));
    }
    return (
        <Router>
            <Switch>
                <Route exact path={'/todo'} component={Todo}/>
                <div className={"back"}>

                    <div className={"f"}>

                        <input className={"logintext"} id={"username"} placeholder={"Enter username"} />
                        <input className={"logintext"} id={"password"} placeholder={"Enter password"}/>
                        <Link to={'/todo'}>
                            <button className={"butt"} onClick={login} type={"submit"}>Submit</button>
                        </Link>

                    </div>

                </div>
            </Switch>
        </Router>
    );

}

export default Login;