// Класс Пост
export class Post {
    constructor(public userId: number | undefined,
                public id: number | undefined,
                public title: string | undefined,
                public body: string | undefined) {
    }
}
