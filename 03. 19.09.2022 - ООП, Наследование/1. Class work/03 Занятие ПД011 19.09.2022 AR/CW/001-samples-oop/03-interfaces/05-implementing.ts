// интерфейс для реализации
interface Report {
    name: string;
    build: () => string;
} // interface Report

// implements - ключевое слово для реализации интерфейса в классе
// если члены интерфейса не будут определены в классе компилятор выдаст ошибку
class DailyReport implements Report {
    name: string = "Daily Report";

    build() : string {
        return "some daili report data";
    } // build
} // class DailyReport


// еще один пример реализации интерфейса
class WeeklyReport implements Report {
    name: string = "Weekly Report";

    build() : string {
        return "some weakly report data";
    } // build
} // class WeeklyReport

console.log(new DailyReport().build());
console.log(new WeeklyReport().build());