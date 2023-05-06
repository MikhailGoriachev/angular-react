// Задача 2. Моделирование работы автобусного парка (при начальном заполнении коллекций использовать не менее
// 15 автобусов, не менее 5и маршрутов). Сведения о каждом автобусе содержат: государственный номер автобуса,
// водитель (объект класса Person из задачи 1), номер маршрута (учтите, что номер может быть вида «42а», «121в»).
// Реализуйте выбор с помощью интерфейса пользователя и выполнение одной из следующих функций:
// •	начальное формирование данных обо всех автобусах в парке в виде коллекции (генерация или инициализацию)
// •	имитация выезда автобуса из парка: задается номер автобуса; код удаляет данные об этом автобусе из
//      коллекции автобусов, находящихся в парке, и записывает эти данные в коллекцию автобусов, находящихся
//      на маршруте;
// •	имитация въезда автобуса в парк: задается номер автобуса; код удаляет данные об этом автобусе из
//      коллекции автобусов, находящихся на маршруте, и записывает эти данные в коллекцию автобусов,
//      находящихся в парке;
// •	вывод сведений об автобусах, находящихся в парке, и об автобусах, находящихся на маршруте,
//      упорядоченных по номерам автобусов;
// •	вывод сведений об автобусах, находящихся в парке, и об автобусах, находящихся на маршруте,
//      упорядоченных по номерам маршрутов
import { TransportCompany } from "./models/task02/TransportCompany.js";
import { BusState } from "./models/task02/BusState.js";
import { Utils } from "./Utils.js";
// обработка по заданию 2
export class Task02 {
    // конструктор
    constructor(output, company = new TransportCompany()) {
        this.output = output;
        this.company = company;
        company.init();
    }
    // вывод всех автобусов
    showBuses() {
        let n = 1, res = "";
        let isState = (p) => this.company.busFleet.has(p) ? BusState.busFleet : BusState.busRoute;
        for (const bus of this.company)
            res += bus.toTableRow(n++, isState);
        this.output.busTbody.html(res);
    }
    // вывод всех упорядоченных по номерам автобусов
    showBusesOrderByPlate() {
        let n = 1, res = "";
        let isState = (p) => this.company.busFleet.has(p) ? BusState.busFleet : BusState.busRoute;
        for (const bus of this.company.generatorBusOrderByPlate())
            res += bus.toTableRow(n++, isState);
        this.output.busTbody.html(res);
    }
    // вывод всех упорядоченных по номерам маршрутов
    showBusesOrderByRoute() {
        let n = 1, res = "";
        let isState = (p) => this.company.busFleet.has(p) ? BusState.busFleet : BusState.busRoute;
        for (const bus of this.company.generatorBusOrderByRoute())
            res += bus.toTableRow(n++, isState);
        this.output.busTbody.html(res);
    }
    // вывод автобусов в парке
    showBusFleet() {
        let n = 1, res = "";
        for (const bus of this.company.generatorBusFleet())
            res += bus.toTableRow(n++, (p) => BusState.busFleet);
        this.output.fleetTbody.html(res);
    }
    // вывод автобусов на маршруте
    showBusRoute() {
        let n = 1, res = "";
        for (const bus of this.company.generatorBusRoute())
            res += bus.toTableRow(n++, (p) => BusState.busRoute);
        this.output.routeTbody.html(res);
    }
}
// инициализация страницы
export function pageInitTask02() {
    $(() => {
        // задание
        let task = new Task02({
            busTbody: $("#busTbodyId"),
            fleetTbody: $("#fleetBusTbodyId"),
            routeTbody: $("#routeBusTbodyId")
        });
        // элемененты GUI
        let initBtn = $("#initTask02Id");
        let body = $("#modalBodyId");
        let title = $("#modalTitleId");
        let modal = $("#modalDialogId");
        let listModal = $("#modalListId");
        let btnOk = $("#modalBtnOkId");
        // вкладка со всеми автобусами
        let busesTab = $("#buses-tab");
        // сортировки
        $("#orderByRouteId").on("click", () => {
            busesTab.trigger("click");
            task.showBusesOrderByRoute();
        });
        $("#orderByPlateId").on("click", () => {
            busesTab.trigger("click");
            task.showBusesOrderByPlate();
        });
        // инициализация
        initBtn.off("click");
        initBtn.on("click", () => {
            task.company.init();
            // task.showBuses();
            busesTab.trigger("click");
        });
        // установка вкладки со всеми автобусами
        busesTab.on("click", () => {
            // вывод автобусов
            task.showBuses();
        });
        // вызов события click для инициалиазции первой вкладки
        busesTab.trigger("click");
        // установка вкладки с автобусами в парке
        $("#buses-fleet-tab").on("click", () => {
            // вывод автобусов
            task.showBusFleet();
        });
        // установка вкладки с автобусами на маршруте
        $("#buses-route-tab").on("click", () => {
            // вывод автобусов
            task.showBusRoute();
        });
        // обработка клика по таблицам
        $("tbody").on("click", (e) => {
            let target = $(e.target);
            if (typeof target.data("state") === "undefined")
                return;
            let state = +target.data("state");
            let plate = target.data("plate");
            switch (state) {
                case BusState.busFleet:
                    task.company.gotoBus(plate, BusState.busFleet);
                    task.showBusFleet();
                    break;
                case BusState.busRoute:
                    task.company.gotoBus(plate, BusState.busRoute);
                    task.showBusRoute();
                    break;
            }
            task.showBuses();
        });
        // отправка автобуса на маршрут
        $("#gotoRouteModalBtnId").on("click", () => {
            title.html("Отправка автобуса на маршрут");
            listModal.html(Array.from(task.company.busFleet.values())
                .sort((a, b) => Utils.compareToRoute(a.routeNumber, b.routeNumber))
                .reduce((p, v) => p +
                `<option value="${v.plate}">Маршрут: ${v.routeNumber}; Номер: ${v.plate}</option>`, ""));
            btnOk.off("click");
            btnOk.on("click", () => {
                task.company.gotoBus(listModal.val().toString(), BusState.busFleet);
                busesTab.trigger("click");
            });
        });
        // отправка автобуса в парк
        $("#gotoFleetModalBtnId").on("click", () => {
            title.html("Отправка автобуса а парк");
            listModal.html(Array.from(task.company.busRoute.values())
                .sort((a, b) => Utils.compareToRoute(a.routeNumber, b.routeNumber))
                .reduce((p, v) => p +
                `<option value="${v.plate}">Маршрут: ${v.routeNumber}; Номер: ${v.plate}</option>`, ""));
            btnOk.off("click");
            btnOk.on("click", () => {
                task.company.gotoBus(listModal.val().toString(), BusState.busRoute);
                busesTab.trigger("click");
            });
        });
    });
}
//# sourceMappingURL=task02.js.map