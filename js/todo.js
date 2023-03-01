const toDoForm = document.getElementById("todo-form");
//const toDoInput = toDoForm.querySelector("input");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //object나 array를 string으로 바꿔준다.
}

function deleteToDo(event) {
    //console.log(event.target);
    //console.dir(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    //console.log(li.id); string
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    //console.log(li);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    //console.log(toDoInput.value);
    toDoInput.value = "";
    //console.log(newTodo, toDoInput.value);
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//     console.log("this is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
//console.log(savedToDos);
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); //JSON.stringify()의 반대
    //console.log(parsedToDos);
    toDos = parsedToDos;
    //parsedToDos.forEach((item) => console.log("this is the turn of ", item));
    parsedToDos.forEach(paintToDo);
}
