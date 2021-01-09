import React from 'react';
import './TodoList.css';

import { connect } from 'react-redux';
import { REMOVE_TODO } from './actions';

import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => (

    <div className="list-wrapper">
        {todos.map(todo => <TodoListItem todo={todo} />)}
        <NewTodoForm></NewTodoForm>
    </div>
)

const mapStateProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({

});

export default connect()(TodoList);
