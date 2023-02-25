import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos = [
    new TodoItem(1, "Estudar Typescript", true),
    new TodoItem(2, "Estudar Java"),
    new TodoItem(3, "Tocar Violão"),
    new TodoItem(4, "Aprender Inglês")
];

console.clear();
console.log("Lista TODO de Fabio");
