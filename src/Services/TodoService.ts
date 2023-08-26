import { Todo } from "../models/Todo";

const TODO_STORE = 'todos';

export const get = (): Todo[] => {
    const data = localStorage.getItem(TODO_STORE) || '';
    try { 
        return JSON.parse(data);
    } catch {
        return [];
    }
};

export const save = (data: Todo[]) => {
    if (data?.length > 0) localStorage.setItem(TODO_STORE, JSON.stringify(data));
};