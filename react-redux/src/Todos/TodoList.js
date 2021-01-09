import React from 'react';
import './TodoList.css';

import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => (

    <div className="list-wrapper">
        {/* {todos.map(todo => <TodoListItem todo={todo} />)} */}
        <NewTodoForm></NewTodoForm>
    </div>
)


export default TodoList;
