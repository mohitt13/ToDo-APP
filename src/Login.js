import React from "react";
import "./Login.css"
function login() {
        return(
            < div className={"back"}>
                <div className={"f"}>
                <form action={"http://localhost:3001/login"} method={"post"}>
                    <input type={"String"}  placeholder={"Username"} name={"username"} className={"textarea"}/><br/><br/>
                    <input type={"String"}  placeholder={"Password"} name={"pass"} className={"textarea"}/><br/>
                    <input type={"submit"}  placeholder={"Login"} className={"butt"}/>
                </form>
                </div>

            </div>
        );
}
export default login;