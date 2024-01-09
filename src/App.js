import { useEffect, useState } from "react";
import "./App.scss";
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

    const addTodo = async (title, description, list_type, tags) => {
        let parseTags = tags.split(", ");
        parseTags = parseTags.map((tag) => tag.replace(/,$/, ""));
        const response = addTodoHelper(
            title,
            description,
            list_type,
            parseTags
        );
        await response;
        setTodos(await getAllTodosHelper());
    };
    const editTodo = async (id, title, description, list_type, tags) => {
        const response = editTodoHelper(
            id,
            title,
            description,
            list_type,
            tags
        );
        await response;
        setTodos(await getAllTodosHelper());
    };
    const deleteTodo = async (id) => {
        const response = deleteTodoHelper(id);
        await response;
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
                        addTodo={addTodo}
                        editTodo={editTodo}
                        deleteTodo={deleteTodo}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
