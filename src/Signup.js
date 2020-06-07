import React from "react";
import "./Signup.css"
function signup() {
    return(
        <div className={"but"}>
            <div className={"contain"}>
                <form action={"http://localhost:3001/signup"} method={"post"}>
                    <input type={"String"}  placeholder={"Name"} name={"name"} className={"text1"}/>
                    <input type={"String"}  placeholder={"Username"} name={"username"} className={"text1"}/>
                    <input type={"String"}  placeholder={"Password"} name={"pass"} className={"text1"}/>
                    <input type={"String"}  placeholder={"Email"} name={"email"} className={"text1"}/>
                    <input type={"submit"} placeholder={"Login"} className={"b"}/>
                </form>
            </div>
        </div>
    );
}
export default signup;