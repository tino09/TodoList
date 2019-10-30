import React, {Component} from 'react';
import './App.css';
import NavBar from './components/navbar'
import TodoItem from './components/TodoItem'
import todosData from './components/todosData'



class App extends Component {

  constructor(){
    super();
    this.state = {
      todos : todosData,
      unreadMessages : todosData,
      character : {},
      
    }
    this.handleChange = this.handleChange.bind(this)
  } 

    
  
  handleChange(id){
    this.setState(prevState =>{
      const updatedTodos = prevState.todos.map(todo=>{
        if (todo.id === id ){
          todo.completed = !todo.completed
        }
        return todo
      })
      return {todos :updatedTodos
      }
    })
  }



  render() { 
    const todosItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} 
    handleChange = {this.handleChange} />)
   
   

    return ( 
      <div>
        <NavBar />
        <div>
          
          
       {this.state.unreadMessages.length > 0 && 
       <h5> You have {this.state.unreadMessages.length} undone items on your list </h5>
        }
       </div>

      <div className="todo-list">
       {todosItems}
      </div>
      
      </div>
      
     );
  }
}
 
export default App;