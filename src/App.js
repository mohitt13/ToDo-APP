import React, {useState} from "react";
import Login from "./Login";
import Signup from "./Signup";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import "./App.css";

function App() {

    return (
        <Router>
            <Switch>
                <Route exact path={'/signup'} component={Signup}/>
                <Route exact path={'/login'} component={Login}/>
                <div className={"but"}>
                    <h1 className={"header"}>2Do App</h1>
                    <Link to={'/signup'}>
                        <button className={"bt"}>SignUp</button>
                    </Link>
                    <Link to={'login'}>
                        <button className={"bt"}>Login</button>
                    </Link>

                </div>

            </Switch>
        </Router>
    );
}

export default App;