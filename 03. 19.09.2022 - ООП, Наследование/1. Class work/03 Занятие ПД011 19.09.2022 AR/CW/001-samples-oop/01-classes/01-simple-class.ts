class User {
    firstName: string; // свойство 
    lastName: string;  // свойство

    print() : void {   // метод
        console.log(this.firstName + " " + this.lastName);
    }
}

// создаем экземпляр класса User вызывая конструктор и инициализируем переменную user1
let user1: User = new User();

// присвоение значения свойству firstName на экземпляре user1
user1.firstName = "Иван";
user1.lastName = "Иванов";

// создаем экземпляр класса User вызывая конструктор и инициализируем переменную user2
let user2: User = new User();

// присвоение значения свойству firstName на экземпляре user2
user2.firstName = "Ирина";
user2.lastName = "Боровлева";

user1.print(); // вызов метода print на экземпляре user1
user2.print(); // вызов метода print на экземпляре user2
