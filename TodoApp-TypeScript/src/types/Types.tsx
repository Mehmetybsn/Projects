export interface TodoInitialState {
    todos: todoType[]
}

export interface todoType {
    id: number,
    content: string
}