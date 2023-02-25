import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos: TodoItem[] = [
    new TodoItem(1, "Estudar Typescript", true),
    new TodoItem(2, "Estudar Java"),
    new TodoItem(3, "Tocar Violão"),
    new TodoItem(4, "Aprender Inglês")
];

let collection: TodoCollection = new TodoCollection("Fabio", todos);

console.clear();
console.log(`Lista TODO de ${collection.userName}`);

let newId: number = collection.addTodo("Fazer academia");
let todoItem: TodoItem = collection.getTodoById(newId);
todoItem.printDetails();