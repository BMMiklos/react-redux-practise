export const CREATE_TODO = 'CREATE_TODO';

export const createTodo = text => ({
    type: CREATE_TODO,
    payload: { text }
});

export const REMOVE_TODO = 'REMOVE_TODO';

export const removeTodo = text => ({
    type: REMOVE_TODO,
    payload: { text }
});

export const CHANGE_TODO = 'CHANGE_TODO';

export const changeTodo = () => ({
    type: CHANGE_TODO,
});

