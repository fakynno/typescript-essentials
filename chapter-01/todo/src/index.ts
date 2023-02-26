import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from "inquirer";

let todos: TodoItem[] = [
    new TodoItem(1, "Estudar Typescript"),
    new TodoItem(2, "Estudar Java"),
    new TodoItem(3, "Tocar Violão", true),
    new TodoItem(4, "Aprender Inglês")
];

let collection: TodoCollection = new TodoCollection("Fabio", todos);
let showCompleted = true;

function displayTodoList() : void {
    console.log(`Lista de itens TODO de ${ collection.userName }`
                + `(${ collection.getItemCounts().incomplete } itens para fazer)`);
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}

enum Commands {
    Quit = 'Sair'
}

function promptUser(): void {
    console.clear();
    displayTodoList();
    inquirer.prompt({        
        type: "list",
        name: "comando",
        message: "Escolha uma opção",
        choices: Object.values(Commands)
    }).then(answers => {
        if(answers["comando"] !== Commands.Quit) {
            promptUser();
        }
    })
}

promptUser();