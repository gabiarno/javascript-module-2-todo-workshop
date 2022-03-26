let todos = [];

const createtodo = (text) => {
    todos.push(text);
}
document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const textFromForm = e.target.elements.text.value.trim()
    
    if (textFromForm.length > 0) {
        createtodo(textFromForm);
        console.log("todo",todos);
        e.target.elements.text.value = "";
        renderTodos(todos);
    }else{
        console.log("have no text");
    }

});

const removeTodo = (todoEl) => {
    const todoIndex = todos.findIndex ((todo) => {
        return todo.toLowerCase() === todoEl.textContent.toLowerCase();
    });
    if (todoIndex > -1){
        todos.splice(todoIndex, 1);
    }
}

function generateTodoDOM (todo) {
    const todoEl = document.createElement("label");
    const containerEl = document.createElement("div");
    const todoText = document.createElement("span");
    const removeTodoButton = document.createElement("button");

    removeTodoButton.textContent = "remove";
    removeTodoButton.classList.add("button","button--text")
    todoEl.appendChild(removeTodoButton);

    removeTodoButton.addEventListener("click", () =>{
        removeTodo(todoText);
        console.log("todo",todos);
        renderTodos(todos);
    })
    todoText.textContent = todo;
    todoEl.classList.add("list-item");
    containerEl.classList.add("list-item_container");

    containerEl.appendChild(todoText);
    todoEl.appendChild(containerEl);
    console.log(todoEl);
    return todoEl;
}

function renderTodos(todos) {
    const todoList = document.querySelector("#todos");
    console.log("todos",todos);
    todoList.innerHTML = "";
    if (todos.length > 0){
        todos.forEach(todoeE => {
            console.log("element",todoeE);
            todoList.appendChild(generateTodoDOM(todoeE));
        });
        
    
} else {
    const noTodoMEssage = document.createElement("p");
    noTodoMEssage.textContent = "There are no todo to show";
    noTodoMEssage.classList.add("empty-message");
    todoList.appendChild(noTodoMEssage);
}
}

renderTodos(todos);