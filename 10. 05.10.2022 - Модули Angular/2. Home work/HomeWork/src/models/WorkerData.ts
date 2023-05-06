import {Worker} from "./Worker";

// Класс для доступа к данным о работниках
export class WorkerData {

    // данные
    static get data(): Worker[] {
        let json = localStorage.getItem("workerList");

        if (json === null) {
            let id = 1;
            this.data = [...Array(10)].map(() => Worker.generate(id++))

            return this.data;
        }

        return JSON.parse(json).map((w: Worker) => new Worker().assign(w));
    }

    static set data(value: Worker[]) {
        localStorage.setItem("workerList", JSON.stringify(value));
    }
}
