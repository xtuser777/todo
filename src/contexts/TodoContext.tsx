import React, { createContext } from 'react';
import { TodoContextType } from './TodoContextType';
import { Todo } from '../models/Todo';

export const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () => { },
    removeTodo: () => { },
    toggle: () => { },
});

const TodoProvider = (props: any) => {
    const todos: Todo[] = [
        { id: 1, description: 'Ir ao supermercado', done: false },
        { id: 2, description: 'Ir a igreja', done: false },
    ];

    const addTodo = (title: string) => {
        console.log('Adicionando ' + title);
    }

    const removeTodo = (todo: Todo) => {
        console.log('Removendo ' + todo.description);
    }

    const toggle = (todo: Todo) => {
        console.log('Alterando ' + todo.description);
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggle }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export default TodoProvider;