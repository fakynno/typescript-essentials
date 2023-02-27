import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";
import * as inquirer from "inquirer";
import { JsonTodoCollection } from "./jsonTodoCollection";

let todos: TodoItem[] = [
    new TodoItem(1, "Estudar Typescript"),
    new TodoItem(2, "Estudar Java"),
    new TodoItem(3, "Tocar Violão", true),
    new TodoItem(4, "Aprender Inglês"),
    new TodoItem(5, "Aprender Espanhol", true),
    new TodoItem(6, "Aprender Francês"),
    new TodoItem(7, "Aprender Alemão")
];

let collection: TodoCollection = new JsonTodoCollection("Fabio", todos);
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

function promptComplete() : void {
    console.clear();
    inquirer.prompt({
        type: "checkbox",
        name: "completo",
        message: "Marcar tarefa como concluída",
        choices: collection.getTodoItems(showCompleted).map(item => 
            ({name: item.task, value: item.id, checked: item.complete}))
    }).then(answers => {
        let completedTasks = answers["completo"] as number[];
        collection.getTodoItems(true).forEach(item => 
            collection.markComplete(item.id,
                completedTasks.find(id => id === item.id) !== undefined));
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
            case Commands.Complete:
                if (collection.getItemCounts().incomplete > 0) {
                    promptComplete();
                } else {
                    promptUser();
                }
                break;
            case Commands.Purge:
                collection.removeComplete();
                promptUser();
                break;
        }        
    })
}

promptUser();