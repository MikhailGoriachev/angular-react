// Класс Запланированное дело
export class Todo {
    constructor(public id: number | undefined,
                public title: string | undefined,
                public completed: boolean | undefined) {
    }
}
