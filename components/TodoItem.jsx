import React from 'react';


const TodoItem = (props) =>{
    const completedStyle = {
        fontStyle: "italic",
        color: "cdcdcd",
        textDecoration: "line-through",
    }

    const inCompletedStyle = {
        backgroundColor:"light-green",
        fontWeight: "bold"
    }
    return (
        <div className="todo-item">
            <input className="" 
            type="checkbox" 
            checked={props.item.completed}
            onChange={()=>props.handleChange(props.item.id)} 
            />
            <p className="text-item" style={props.item.completed ? completedStyle :inCompletedStyle}>
            {props.item.text}</p>
        </div>
    )
}

export default TodoItem; 