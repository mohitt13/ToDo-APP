import React from "react";
import {todo, toggleTodo} from "../actions/todo";

const to_reducer = (state = [], action) => {
    switch (action.type) {
        case 'TODO':
            return [
                ...state,
                {
                    username: action.username,
                    id: action.id,
                    text: action.text,
                    date: action.date,
                    label: action.label,
                    completed: action.completed
                }];
        case 'TOGGLE-TODO': {
            return state.map(todo => {
                    let c = JSON.stringify(action.id);
                    let d = parseInt(JSON.parse(c).id);
                    // console.log("D Value",d);
                    // console.log("D Type",typeof (d));
                    // console.log(d===(todo.id));
                    return (todo.id) === d ? {...todo, completed: !todo.completed} : todo
                }
            )

        }
        default :
            return state;
    }

}

export default to_reducer;