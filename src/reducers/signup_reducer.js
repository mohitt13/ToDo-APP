import React from "react";
import signup from "../actions/signup";

let initialState = {
    username: "",
    password: ""
}
const signupReducer = (state = {}, action) => {

    switch (action.type) {
        case 'SIGN-UP':
            return (
                {
                    username: action.username,
                    password: action.password
                }
            );
        default:
            return state;

    }

}

export default signupReducer;