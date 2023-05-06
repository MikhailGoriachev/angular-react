// первая перегрузка функции, которая принимает один параметр типа string
function showMessage(message: string);

// вторая перегрузка функции, которая принимает один параметр типа number
function showMessage(message: number);

// вторая перегрузка функции, которая принимает один параметр типа boolean
function showMessage(message: boolean);

// непосредственно реализация функции, не является перегрузкой
function showMessage(message: any) {

    if (typeof message == "number") {
        switch (message) {
            case 1: {
                console.log("Hello, world");
            } break;
            case 2: {
                console.log("Привет, мир");
            } break;
        }
    }

    else if (typeof message == "string") {
        console.log(message);
    }    else if (typeof message == "boolean") {
        console.log(message?'да':'нет');
    }
}

showMessage(1);
showMessage("test");
showMessage(2);
showMessage(true); // compile error