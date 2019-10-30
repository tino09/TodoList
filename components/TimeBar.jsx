import React, { Component } from 'react';
import ReactDOM from 'react-dom';

Opay = () =>{
    const date = new Date();
    const hours = date.getHours();
    styles = {fontSize: 20}

    let timeOfDay;

    if (hours < 12) {
        timeOfDay = "Morning";
        styles.color ={fd2fd2}
    }else if (hours >= 12 && hours < 17){
        timeOfDay = "Afternoon";
        styles.color ={fd2f3e}
    }else {
        timeOfDay ="Night";
        styles.color ={fd2f1a}
    }

    return (
        <h1 style={styles}>Good {timeOfDay}</h1>
    )
}
ReactDOM.render(<TimeBar />, document.getElementById('root'))

export default TimeBar