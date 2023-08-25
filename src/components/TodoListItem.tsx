import React, { useContext } from "react";
import { Todo } from "../models/Todo";
import { TodoContext } from "../contexts/TodoContext";
import { TodoContextType } from "../contexts/TodoContextType";

interface ITodoListItemProps {
    todo: Todo;
}

const TodoListItem = (props: ITodoListItemProps) => {
    const { removeTodo, toggle } = useContext<TodoContextType>(TodoContext);

    const handleChange = (event: any) => {
        toggle(props.todo);
    };

    const onRemove = (todo: Todo) => {
        removeTodo(todo);
    };

    return (
        <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
                <label>
                    <input 
                        className="uk-checkbox" 
                        type="checkbox" 
                        checked={props.todo.done} 
                        onChange={handleChange} 
                    />
                </label>
            </td>
            <td className="uk-width-expand">{props.todo.description}</td>
            <td className="uk-width-auto">
                <button 
                    className="uk-icon-button uk-button-danger" 
                    uk-icon="trash" 
                    onClick={() => onRemove(props.todo)}
                >
                </button>
            </td>
        </tr>
    );
}

export default TodoListItem;