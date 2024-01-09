const getAllTodosHelper = async () => {
    try {
        const response = await fetch("http://localhost:5000/todos");
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.log(error.message);
    }
};

const addTodoHelper = async (description) => {
    try {
        const body = { description };
        const response = await fetch("http://localhost:5000/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
    } catch (error) {
        console.log(error.message);
    }
};

const editTodoHelper = async (id, description) => {
    const body = { description };
    try {
        const response = await fetch(`http://localhost:5000/todos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
    } catch (error) {
        console.log("could not edit todo:", error.message);
    }
};

const deleteTodoHelper = async (id) => {
    try {
        const response = await fetch(`http://localhost:5000/todos/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.log(error.message);
    }
};

export { getAllTodosHelper, addTodoHelper, editTodoHelper, deleteTodoHelper };
