import { TodoItem } from "./todoItem";

export class TodoCollection {
    private nextId: number = 1;

    constructor(public userName: string,
                public todoItems: TodoItem[] = []) { }
}