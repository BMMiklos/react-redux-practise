import React, { useState } from 'react';

import { connect } from 'react-redux';
import { changeTodo, createTodo } from './actions';

const NewTodoForm = ({ todos, onCreatePressed, onButtonPressed }) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="new-todo-form">
            <input placeholder="type your new todo here" type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}></input>
            <button onClick={() => {

                const isDuplicateText = todos.some(todo => todo.text === inputValue);

                if (!isDuplicateText) {
                    onCreatePressed(inputValue);
                    setInputValue('');
                }

            }}
             className="new-todo-button">Create Todo</button>

            <button onClick={() => {
                onButtonPressed()
            }}
            >Reverse Todo</button>

        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
    onButtonPressed: () => dispatch(changeTodo())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
