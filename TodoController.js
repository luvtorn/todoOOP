class TodoList {
    constructor(view, storage) {
        this.inputText = view.getInputText();
        this.form = view.getForm();
        this.list = view.getList();
        this.view = view;
        this.storage = storage;
        this.todos = this.getTodos();

        this.form.addEventListener("submit", this.addTodo.bind(this));

        this.showTodos()
    }

    setTodos(todos) {
        storage.setTodos(todos);
    }

    getTodos() {
        return storage.getTodos() || [];
    }

    addTodo(e) {
        e.preventDefault();
        const todo = {
            id: Date.now(),
            text: this.inputText.value,
            checked: false,
        };
        this.todos.push(todo);
        this.setTodos(this.todos);
        this.showTodos();
        this.inputText.value = "";
    }

    deleteTodo(todoId) {
        this.todos = this.todos.filter((todo) => todo.id !== todoId);
        this.setTodos(this.todos);
        this.showTodos();
    }

    toggleTodo(todoId) {
        this.todos = this.todos.map((todo) => {
            if (todo.id === todoId) {
                return {
                    id: todo.id,
                    text: todo.text,
                    checked: !todo.checked,
                };
            }
            return todo;
        });
        this.setTodos(this.todos);
        this.showTodos();
    }

    showTodos() {
        this.view.updateList(this.todos);
    }
}