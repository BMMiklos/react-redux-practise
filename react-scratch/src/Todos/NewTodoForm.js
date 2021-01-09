import React, { useState } from 'react';
// import './NewTodoForm.css';

import { connect } from 'react-redux';
import { creatTodo } from './acitons';

const NewTodoForm = ({ todos }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="new-todo-form">
            <input placeholder="type your new todo here" type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}></input>
            <button className="new-todo-button">Create Todo</button>
        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
