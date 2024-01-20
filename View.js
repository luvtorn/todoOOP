class View {
  constructor() {
    this.inputText = document.querySelector(".text_input");
    this.form = document.querySelector(".test_local");
    this.list = document.querySelector(".list");
  }

  getInputText() {
    return this.inputText;
  }

  getForm() {
    return this.form;
  }

  getList() {
    return this.list;
  }

  updateList(todos) {
    this.list.innerHTML = todos
      .map((todo) => {
        return `<li class="todos">
                <input type="checkbox" class="css-checkbox" onchange="todoList.toggleTodo(${
                  todo.id
                })" id="item${todo.id}" ${todo.checked && "checked"}>
                <p class="todo_text ${todo.checked ? "checked" : ""}">${
          todo.text
        }</p>
                <button class="deleteButton" onclick="todoList.deleteTodo(${
                  todo.id
                })">Delete</button>
            </li>`;
      })
      .join("");
  }
}
