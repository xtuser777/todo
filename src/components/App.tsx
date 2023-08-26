import React from "react";
import Navbar from "./Navbar";
import TodoList from "./TodoList";
import TodoContext from "../contexts/TodoContext";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import AddTodo from "./AddTodo";

const App = () => {
    return (
        <TodoContext>
            <BrowserRouter>
                <Navbar />
                <br />
                <div className="uk-container">
                    <Switch>
                        <Route path="/create"><AddTodo /></Route>
                        <Route path="/"><h4>Minha lista de tarefas</h4><TodoList /></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </TodoContext>
    );
};

export default App;
