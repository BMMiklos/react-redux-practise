import React from 'react';
import './TodoList.css';

import { connect } from 'react-redux';
import { removeTodo } from './actions';

import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos = [], onRemovePressed }) => (

    <div className="list-wrapper">
        <NewTodoForm></NewTodoForm>
        {todos.map(todo => <TodoListItem todo={todo} onRemovePressed={onRemovePressed} />)}
    </div>
)

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
