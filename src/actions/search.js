import React from "react";

const search = (props) => {
    return {
        type: "SEARCH",
        payload: props.payload
    }
}

export default search;