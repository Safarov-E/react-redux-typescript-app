import React from 'react';
import {useTypedSelector} from '../hooks/useTypedSelector';

const TodoList = () => {
    const {page, error, loading, todos, limit} = useTypedSelector(state => state.todo)
    if(loading) {
        return <h1>Идет загрузка...</h1>
    }
    if(error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {todos.map(todo => {
                return <div key={todo.id}>{todo.id} - {todo.name}</div> 
            })}
        </div>
    );
};

export default TodoList;