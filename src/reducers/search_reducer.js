import search from "../actions/search";
import React from "react";

const searchReducer = (state = "", action) => {
    switch (action.type) {
        case "SEARCH": {
            console.log("HERE ", action.payload);
            return (action.payload);
        }
        default:
            return state;

    }

}

export default searchReducer;