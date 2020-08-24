import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodo, decrement, increment, removeLastTodo} from "./toolkitRedux/toolkitSlice";


const addAsyncTodo = () => {
    return async dispatch => {
        setTimeout(() => {
            dispatch(addTodo('ASYNC TODO'))
        }, 2000)
    }
}

function App() {
    const count = useSelector(state => state.toolkit.count)
    const todos = useSelector(state => state.toolkit.todos)
    const dispatch = useDispatch()


    return (
        <div className="App">
            <h1 style={styles.h1}>Счетчик {count}</h1>
            <button style={styles.btn} onClick={() => dispatch(increment())}>Икремент</button>
            <button style={styles.btn} onClick={() => dispatch(decrement())}>Декремент</button>
            <button style={styles.btn} onClick={() => dispatch(removeLastTodo())}>Удалить последний ТУДУ</button>
            <button style={styles.btn} onClick={() => dispatch(addTodo(prompt()))}>Добавить ТУДУ</button>
            <button style={styles.btn} onClick={() => dispatch(addAsyncTodo())}>Добавить АСИНК ТУДУ</button>
            <ul>
                {todos.map(todo =>
                    <li style={styles.item} key={todo}>{todo}</li>
                )}
            </ul>
        </div>
    );
}

export default App;

const styles = {
    h1: {
        margin: 20
    },
    btn: {
        margin: 20,
        padding: 5,
        color: 'orange',
        backgroundColor: 'black',
        fontSize: 25
    },
    item: {
        width: '800px',
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'gray',
        listStyleType: 'none',
        marginTop:5
    }
}
