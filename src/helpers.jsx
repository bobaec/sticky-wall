const getAllTodosHelper = async () => {
    const response = await fetch("http://localhost:5000/todos");
    const jsonData = await response.json();
    return jsonData;
};

const addTodoHelper = async (title, description, list_type, tags) => {
    const body = { title, description, list_type, tags };
    const response = fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    await response;
};

const editTodoHelper = async (id, title, description, list_type, tags) => {
    const body = { title, description, list_type, tags };
    const response = fetch(`http://localhost:5000/todos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    await response;
};

const deleteTodoHelper = async (id) => {
    const response = fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });
    await response;
};

const searchTodoHelper = async (value) => {
    const response = fetch("http://localhost:5000/todos/search", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
    });
    const jsonData = (await response).json();
    return jsonData;
};

export {
    getAllTodosHelper,
    addTodoHelper,
    editTodoHelper,
    deleteTodoHelper,
    searchTodoHelper,
};
