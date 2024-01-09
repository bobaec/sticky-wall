import React, { useState } from "react";

const InputTodo = ({ onAddTodo }) => {
    const [description, setDescription] = useState("");

    const onSubmitTodo = async (e) => {
        e.preventDefault(); // prevents refresh on submit
        onAddTodo(description);
        setDescription("");
    };

    return (
        <div>
            <h1 className="text-center mt-5">Pern Todo List</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitTodo}>
                <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button className="btn btn-success d-flex">Add</button>
            </form>
        </div>
    );
};

export default InputTodo;
