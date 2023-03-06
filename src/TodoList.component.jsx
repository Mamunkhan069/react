import React, { Component } from 'react';
import TodoHeader from './common/todohederComponent';
import Todo from './common/todoComponent';
import axios from 'axios';

class TodoList extends Component {
  state = {
    todoList: [],
  };

  componentDidMount() {
    axios
      .get('https://dummyjson.com/todos')
      .then((res) => {
        console.log(res.data.todos);
        this.setState({ todoList: res.data.todos });
      })
      .catch((err) => {
        console.log(err);
        alert('an error occurred');
      });
  }

  render() {
    return (
      <>
        <div className='container'>
          <div className='card'>
            <TodoHeader />
            {this.state.todoList.map((todo, index) => {
              return <Todo todo={todo.todo} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default TodoList;