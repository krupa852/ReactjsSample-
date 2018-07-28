
import React from "react"

export class Todos extends React.Component{
    state = {
        todos:[
            {
                description: 'Buy grapes',
                isDone: false
            },
            {
                description: 'Buy oranges',
                isDone: false
            },

           ],

           newTodoDescription: "",
    };
    handleOnChange = event => {
        const {name, value} = event.target;
        //name = "newTodoDescription"
        //value = "something to do"
        this.setState({
          //newTodoDescription:something to do  
            [name]:value,
        });
    }
    //Changing current property of object
    handleTodoClick = (currentTodo) => {
       currentTodo.isDone = !currentTodo.isDone;

        const updatedState = {
            todos:this.state.todos
        }
        this.setState(updatedState)
    };

    handleAddTodo = () => {
        //step1 : get new todo description
        const newTodoDescription = this.state.newTodoDescription;
        //step2 : create new todo object from description
        const newTodo= {
            description:newTodoDescription,
            isDone:false,
        }
        //step3 : update react component state
        const newTodos = [
            ...this.state.todos,
            newTodo,
        ];
        this.setState({
            todos:newTodos
        })
    }
   render() {
       
       //jsx
       return <div>
           <h1> My Awesome todo list </h1>
           <label htmlfor = "newTodoDescription">Add Todo</label>
           <input 
           type = "text" 
           value = {this.state.newTodoDescription}
           name= "newTodoDescription"
           id = "newTodoDescription"
           onChange ={this.handleOnChange}/>
           
           <button onClick ={this.handleAddTodo}>+</button>
           <ul>
               {this.state.todos.map((todo) => {
                   let completeClass = "";
                   if(todo.isDone){
                       completeClass= "complete";
                   }
                   return <li 
                   className = {completeClass}
                   onClick={() => this.handleTodoClick(todo)}>{todo.description}</li> //register event handler to event
               })} 
               
           </ul>
           </div>
   }
}

