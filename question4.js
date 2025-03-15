//Array to store todos
const todos = [];

function viewTodos() {
    console.log(todos);
}
//Function to add todo
function addTodo(title, description) {
    if (title && description) {
        const newTodo = { title, description };
        todos.push(newTodo);
        viewTodos();
    }
}


//Function to edit todo
function editTodo(index, title, description) {
    const todo = todos[index];
    if (title && description) {
        todo.title = title;
        todo.description = description;
        viewTodos();
    }
}

//Function to delete todo
function deleteTodo(index) {
    todos.splice(index, 1);
    viewTodos();
}


// Testing if functions work well
console.log("Adding first todo: ");
addTodo('Todo1', 'Mangumpra');
console.log("Adding second todo: ");
addTodo('Todo2', 'Magpa-laundry');
console.log("Editing first todo: ");
editTodo(0, 'Updated Todo1', 'Humana');
console.log("Todos after delete: ");
deleteTodo(1);
