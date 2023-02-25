import { TodoItem } from "./todoItem";

export class TodoCollection {
    private nextId: number = 1;

    constructor(public userName: string,
        public todoItems: TodoItem[] = []) { }

    getTodoById(id: number): TodoItem {
        return this.todoItems.find(item => item.id === id);
    }
}