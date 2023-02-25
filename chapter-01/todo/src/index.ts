import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos = [
    new TodoItem(1, "Estudar Typescript", true),
    new TodoItem(2, "Estudar Java"),
    new TodoItem(3, "Tocar Violão"),
    new TodoItem(4, "Aprender Inglês")
];

let collection = new TodoCollection("Fabio", todos);

console.clear();
console.log(`Lista TODO de ${collection.userName}`);

let newId = collection.addTodo("Bora pras cabeça!");
let todoItem = collection.getTodoById(newId);
console.log(JSON.stringify);