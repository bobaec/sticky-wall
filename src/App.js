import { useEffect, useState } from "react";
import "./App.scss";
import ListTodos from "./components/ListTodos/ListTodos";
import {
    getAllTodosHelper,
    addTodoHelper,
    editTodoHelper,
    deleteTodoHelper,
    searchTodoHelper,
    filterTodoByListHelper,
} from "./helpers";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
    const [todos, setTodos] = useState([]);
    const [allTodos, setAllTodos] = useState([]);
    useEffect(() => {
        getAllTodos();
    }, []);

    const getAllTodos = async () => {
        const response = await getAllTodosHelper();
        // const filteredResponse = await
        setTodos(response);
        setAllTodos(response);
    };

    const addTodo = async (title, description, list_type, tags, list_color) => {
        let parseTags = tags.split(", ");
        parseTags = parseTags.map((tag) => tag.replace(/,$/, ""));
        const response = addTodoHelper(
            title,
            description,
            list_type,
            parseTags,
            list_color
        );
        await response;
        getAllTodos();
    };
    const editTodo = async (
        id,
        title,
        description,
        list_type,
        tags,
        list_color
    ) => {
        const response = editTodoHelper(
            id,
            title,
            description,
            list_type,
            tags,
            list_color
        );
        await response;
        getAllTodos();
    };

    const deleteTodo = async (id) => {
        const response = deleteTodoHelper(id);
        await response;
        getAllTodos();
    };

    const handleSearch = async (value) => {
        const response = await searchTodoHelper({ value });
        setTodos(response);
    };

    const handleFilteredList = async (value) => {
        if (value) {
            const response = await filterTodoByListHelper(value);
            setTodos(response);
        } else {
            getAllTodos();
        }
    };

    return (
        <div className="website-container">
            <div className="todo-container">
                <Sidebar
                    handleSearch={handleSearch}
                    todos={allTodos}
                    handleFilteredList={handleFilteredList}
                />
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
