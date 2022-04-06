let todos = [];

const createtodo = (text) => {
    todos.push({
        title: text,
        completed: false,
    });
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
    console.log("todoEl",todoEl);
    "hol".toLowerCase();
    console.log("todoEl.textContent",todoEl.textContent);
    const todoIndex = todos.findIndex ((todo) => {
        return todo.title.toLowerCase() === todoEl.textContent.toLowerCase();
    });
    if (todoIndex > -1){
        todos.splice(todoIndex, 1);
    }
}

const toggleTodo = (title) => {
    const todo = todos.find((todo) => todo.title.toLowerCase() === title.toLowerCase())

    if (todo) {
        todo.completed = !todo.completed
    }
}

function generateTodoDOM (todo) {
    const todoEl = document.createElement("label");
    const containerEl = document.createElement("div");
    const todoText = document.createElement("span");
    const removeTodoButton = document.createElement("button");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    checkbox.checked = todo.completes;

    containerEl.appendChild(checkbox);
    checkbox.addEventListener("change", e => {
        console.log("check changed");
        toggleTodo(todoObj.title);
        renderTodos(todos);
    })

    removeTodoButton.textContent = "remove";
    removeTodoButton.classList.add("button","button--text")
    todoEl.appendChild(removeTodoButton);

    removeTodoButton.addEventListener("click", () =>{
        removeTodo(todoText);
        console.log("todo",todos);
        renderTodos(todos);
    })
    todoText.textContent = todo.title;
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