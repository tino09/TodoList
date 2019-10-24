import React, {Component} from 'react';
import './App.css';
import NavBar from './components/navbar'
import Header  from './components/Header'
import TodoItem from './components/TodoItem'
import todosData from './components/todosData'


class App extends Component {

  constructor(){
    super();
    this.state = {
      answer: "yes"
    }
  }

  render() { 
    const todosItems = todosData.map(item => <TodoItem key={item.id} item={item} />)

    return ( 
      <div>
        <NavBar />
        <Header />
      <div className="todo-list">
       {todosItems}
       
      
      </div> 
      <p> states are important {this.state.answer}</p>   
      </div>
     );
  }
}
 
export default App;