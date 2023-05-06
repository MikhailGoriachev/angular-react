// Класс Пользователь
// id, name, username, email, phone, website
export class User {
    constructor(public id: number | undefined,
                public name: string | undefined,
                public username: string | undefined,
                public email: string | undefined,
                public phone: string | undefined,
                public website: string | undefined) {
    }
}
