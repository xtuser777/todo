import React from "react";
import Navbar from "./Navbar";
import TodoList from "./TodoList";
import TodoContext from "../contexts/TodoContext";

const App = () => {
    return (
        <TodoContext>
            <div className="uk-container">
                <Navbar />
                <TodoList />
            </div>
        </TodoContext>
    );
};

export default App;
