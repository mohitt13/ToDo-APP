import React from "react";

export const todo = (props) => {
    return {
        type: props.type,
        username: props.username,
        date: props.date,
        text: props.text,
        label: props.label,
        completed: props.completed,
        id: props.id
    }
}

export const toggleTodo = (id) => {
    return {
        type: "TOGGLE-TODO",
        id: id
    }

}

