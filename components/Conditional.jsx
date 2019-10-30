import React, {Component} from 'react';


class Conditional extends Component {
    constructor (){
        super()
        this.state = {
            unreadMessages: ["a","b","b",""]
        }
    }
    render (){
        return(
        <div>
       {this.state.unreadMessages.length > 0 && 
       <h2> You have {this.state.unreadMessages.length} undone items on your list </h2>
        }
       </div>
    )}
    }
    



export default Conditional;