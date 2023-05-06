// В TypeScript все параметры функции являются обязательными.
// но если после имени параметра указать символ ? параметр становится опциональным,
// и если при вызове его не предоставить
// значение этого параметра будет undefined 
// Опциональные параметры могут быть только последними параметрами в списке параметров метода.

// optional parameters
function getFullName(firstName: string, lastName?: string): string { 
    if (lastName) {
        return `${firstName} ${lastName}`;
    }
    return firstName;
}

let fullName1: string = getFullName("Иван", "Иванов");
let fullName2: string = getFullName("Иван");

console.log(fullName1);
console.log(fullName2);

// Параметры со значением по умолчанию - параметры метода, для которых в объявлении
// функции присвоено значение, которое будет использоваться если функция будет вызвана
// без указания значения для данного параметра или если в качестве значение будет
// передано undefined

// default-iniatialize parametes
function getDisplayName(firstName: string, lastName: string = "Сидоров-Атос") {
    return `Display Name: ${firstName} ${lastName}`;
}

let fullNmae3: string = getDisplayName("Иван", "Иванов");
let fullNmae4: string = getDisplayName("Иван");
let fullNmae5: string = getDisplayName("Иван", undefined); // идентичен предыдущему вызову

console.log(fullNmae3);
console.log(fullNmae4);
console.log(fullNmae5);
