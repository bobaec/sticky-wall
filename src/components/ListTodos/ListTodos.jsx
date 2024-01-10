import React, { useState } from "react";
import "./ListTodos.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddModal from "../Modals/AddModal/AddModal";
import EditModal from "../Modals/EditModal/EditModal";

const ListTodos = ({ todos, addTodo, editTodo, deleteTodo }) => {
    const [showAddTodoModal, setShowAddTodoModal] = useState(false);
    const [showEditTodoModal, setShowEditTodoModal] = useState(false);
    const [specificTodo, setSpecificTodo] = useState(null);

    const handleAdd = (title, description, list_type, tags) => {
        addTodo(title, description, list_type, tags);
        setShowAddTodoModal(false);
    };

    const handleEdit = (id, title, description, list_type, tags) => {
        editTodo(id, title, description, list_type, tags);
        setShowEditTodoModal(false);
    };

    const handleDelete = (id) => {
        deleteTodo(id);
        setShowEditTodoModal(false);
    };

    const showAddModal = () => {
        setSpecificTodo(null);
        setShowAddTodoModal(true);
    };
    const showEditModal = (todo) => {
        setSpecificTodo(todo);
        setShowEditTodoModal(true);
    };

    return (
        <div className="list-todos-container">
            {todos.map((todo, index) => {
                return (
                    <div
                        className="single-todos-container"
                        key={index}
                        onClick={() => showEditModal(todo)}
                    >
                        <div className="todo-title">{todo.title}</div>
                        <div className="todo-description">
                            {todo.description.split("\n").map((line, index) => {
                                return (
                                    <div key={index}>
                                        {line}
                                        <br />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
            <div
                className="add-todos-container gray-background"
                onClick={() => showAddModal(null)}
            >
                <div className="todo-description">
                    <FontAwesomeIcon icon={faPlus} size="6x" />
                </div>
            </div>
            {showAddTodoModal ? (
                <AddModal
                    show={showAddTodoModal}
                    closeModal={() => setShowAddTodoModal(false)}
                    onSubmit={handleAdd}
                />
            ) : null}
            {showEditTodoModal ? (
                <EditModal
                    show={showEditTodoModal}
                    todo={specificTodo}
                    closeModal={() => setShowEditTodoModal(false)}
                    onSubmit={handleEdit}
                    handleDelete={handleDelete}
                />
            ) : null}
        </div>
    );
};

export default ListTodos;
