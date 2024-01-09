import { useEffect, useState } from "react";
import "./App.scss";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos/ListTodos";
import {
    getAllTodosHelper,
    addTodoHelper,
    editTodoHelper,
    deleteTodoHelper,
} from "./helpers";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const getAllTodos = async () => {
            const response = await getAllTodosHelper();
            setTodos(response);
        };
        getAllTodos();
    }, []);

    const addTodo = async (description) => {
        const response = await addTodoHelper(description);
        setTodos(await getAllTodosHelper());
    };
    const editTodo = async (id, description) => {
        const response = await editTodoHelper(id, description);
        setTodos(await getAllTodosHelper());
    };
    const deleteTodo = async (id) => {
        const response = await deleteTodoHelper(id);
        setTodos(await getAllTodosHelper());
    };

    return (
        <div className="website-container">
            <div className="todo-container">
                <Sidebar />
                <div className="main-content-container">
                    <div className="sticky-wall-title">Sticky Wall</div>
                    <ListTodos
                        todos={todos}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                </div>
            </div>
            {/* <InputTodo onAddTodo={addTodo} /> */}
            {/* <ListTodos
                todos={todos}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
            /> */}
        </div>
    );
}

export default App;
