function repeatOperation(count: number, callback: () => void): void {
    console.log("repeatOperation: start");
    for (let i = 0; i < count; i++) {
        callback();
        // контекст данной функции - глобальный объект.
        // Если в функции callback используется контекст
        // он тоже будет ссылаться на глобальный объект.
    }
    console.log("repeatOperation: stop");
}

// объект
let settings = {
    displayName: "test object",

    test1: function () {
        // прием сохранения контекста внешенй функции в замыкании
        // использовался до стрелочных функций
        // let that = this;
        repeatOperation(3, (function () {
            // второя часть прием с использованем сохраненного контекста
            // console.log(that.displayName);

            // это собственный this функции, не объека settingd
            console.log(this.displayName);
        }));
    },

    // пример современного решения проблемы сохраненич контекста - стрелочная
    // без собственного this (контекста)
    test2: function() {
        // arrow function захватывает контекст, в котором была создана)
        // this - то и есть объекь settings
        repeatOperation(3, () => console.log(this.displayName))
    } 
};

settings.test1();
settings.test2();