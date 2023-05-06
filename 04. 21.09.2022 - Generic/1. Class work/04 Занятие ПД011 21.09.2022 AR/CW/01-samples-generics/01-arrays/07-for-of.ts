class User {
    constructor(public name: string, public age: number) {}
}

let users: User[] = [
    new User("Jim", 20),
    new User("Ivan", 25),
    new User("Bob", 23),
    new User("David", 30)
];

// Цикл for .. in - обход по свойствам объекта (в данном случае
// обход массива, свойства массива - индексы элементов)
console.log("users: for ... in");
for (let index in users) {
    console.log(`${index} --> ${users[index]}`);
}

// обход по свойствам объекта
console.log("users[0]: for ... in");
for (let prop in users[0]) {
    console.log(`${prop} --> ${users[0][prop]}`);
}

// Цикл for ... of - обход значений массива
console.log("users: for ... of");
for (let user of users) {
    console.log(user);
}

