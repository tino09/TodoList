import React from 'react'




function Joke(props) {
   
       
    return(
        <div>
            <h6 style={{display: props.question ? "block" : "none"}}>Question: {props.question} </h6>
            <h6 style={{color: !props.answer && "#888888"}}>Answer: {props.answer} </h6>
        </div>
    )
    
}

export default Joke;