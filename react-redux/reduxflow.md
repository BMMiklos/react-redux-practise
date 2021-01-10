index.js

```js
// Provider
/* Az alkalmazás belépési pontjához kell */


<Provider store={configureStore()} >
        <App />
</Provider>,


//configreStore() nevű függvény kapcsolja össze a felhasználni kívánt store-al
```

store.js

```js
//Store

import { createStore, combineReducers } from 'redux';

//itt kerülnek regisztrációra azok az objektumok amiket szeretnénk szétosztani a többi komponensnek
import { todos } from './todos/reducers';

const reducers = {
    todos,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);

```

reducers.js

```js
//Reducers

//A reducer fogja átadni a komponensnek azt az átalakított statet ami alapján az átalakítás végbe fog menni

//Általunk definiált típusok behívása, ezek alapján fog eldőlni, hogy az üzleti logika melyik ága valósuljon meg
import { CREATE_TODO, REMOVE_TODO } from './actions';

export const todos = (state = [], action) => {

    // A type általunk definiált típust foglalja magában, a payload a kívánt objektum (bármilyen lehet)
    const { type, payload } = action;

    //Típus alapján futtatja mag a logikát
    switch (type) {

        case CREATE_TODO: {

            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false
            }
            return state.concat(newTodo);

        }

        case REMOVE_TODO: {

            const { text } = payload;
            return state.filter(todo => todo.text !== text);

        }
        //Mindig tovább ekell adni a state-et még akkor is, ha nem történt változás, fontos, hogy a state soha ne okozzon memória tulcsordulást
        default:
            return state;
    }

};
```

actions.js
```js
//Actions

// Saját típus definiálása, ezzel fogunk majd rá hivatkozni
export const CREATE_TODO = 'CREATE_TODO';

//Objektum összekapcsolása a típussal
export const createTodo = text => ({
    type: CREATE_TODO, //típus
    payload: { text } //objektum amit majd szeretnénk változtatni
});

...
```

component.js
```js
//Komponens

import { createTodo } from './actions';
import React, { useState } from 'react';

//redux meghívása
import { connect } from 'react-redux';
//hozzátartozó action meghívása
import { createTodo } from './actions';

//propként átadjuk a kívánt state-et
const NewTodoForm = ({ todos, onCreatePressed }) => {

    //useState() (funkcionális komponenseknél tárolja le az adatot)
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
        </div>
    );
};

// Ez egy callback, amint a storban megváltozik valami, abban a pillanatban frissíti a komponenst, az új adattal
const mapStateToProps = state => ({
    todos: state.todos,
});

// [1] https://stackoverflow.com/questions/39419237/what-is-mapdispatchtoprops
// függvényt lehet átküldeni, egy gyerek komponensnek referencia alapján
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text))
});

//komponens tényleges összekapcsolása a store-al
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);

```
