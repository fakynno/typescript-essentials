import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from "inquirer";

let todos: TodoItem[] = [
    new TodoItem(1, "Estudar Typescript"),
    new TodoItem(2, "Estudar Java"),
    new TodoItem(3, "Tocar Violão", true),
    new TodoItem(4, "Aprender Inglês"),
    new TodoItem(5, "Aprender Espanhol", true),
    new TodoItem(6, "Aprender Francês"),
    new TodoItem(7, "Aprender Alemão")
];

let collection: TodoCollection = new TodoCollection("Fabio", todos);
let showCompleted = true;

function displayTodoList() : void {
    console.log(`Lista de itens TODO de ${ collection.userName }`
                + `(${ collection.getItemCounts().incomplete } itens para fazer)`);
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}

enum Commands {
    Add = "Adicionar nova tarefa",
    Complete = "Completar uma tarefa",
    Toggle = "Exibir/Ocultar concluídos",
    Purge = "Remover tarefas concluídas",
    Quit = 'Sair'
}

function promptAdd() : void {
    console.clear();
    inquirer.prompt({
        type: "input",
        name: "add",
        message: "Informe uma tarefa"
    }).then(answers => {
        if(answers["add"] !== "") {
            collection.addTodo(answers["add"]);
        }
        promptUser();
    })
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
        switch (answers["comando"]) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
        }        
    })
}

promptUser();