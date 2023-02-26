import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos: TodoItem[] = [
    new TodoItem(1, "Estudar Typescript"),
    new TodoItem(2, "Estudar Java"),
    new TodoItem(3, "Tocar Violão", true),
    new TodoItem(4, "Aprender Inglês")
];

let collection: TodoCollection = new TodoCollection("Fabio", todos);

console.clear();
console.log(`Lista de itens TODO de ${ collection.userName }`
            + `(${ collection.getItemCounts().incomplete } itens para fazer)`);
collection.getTodoItems(true).forEach(item => item.printDetails());