class TodoStorage {
    setTodos(todos) {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    getTodos() {
        return JSON.parse(localStorage.getItem("todos")) || [];
    }
}
