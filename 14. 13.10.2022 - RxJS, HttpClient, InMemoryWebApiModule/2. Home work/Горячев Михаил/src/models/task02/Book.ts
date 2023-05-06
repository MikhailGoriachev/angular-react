// Класс Книга
export class Book {
    constructor(public id?: number | undefined,
                public author?: string | undefined,
                public name?: string | undefined,
                public pubYear?: number | undefined,
                public  price?: number | undefined,
                public image?: string | undefined) {
    }
}
