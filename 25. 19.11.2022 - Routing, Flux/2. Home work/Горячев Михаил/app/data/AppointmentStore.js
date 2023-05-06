import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import {ActionTypes} from "./ActionTypes.js";
import AppointmentsDispatcher from "./AppointmentsDispatcher.js";
import {getAppointment} from "../infrastructure/utils.js";
import {Appointment} from "../models/Appointment";

// ключ данных в локальном хранилище
const dataKey = 'appointmentsData';

// хранилище данных
class AppointmentStore extends ReduceStore {

    // конструктор
    constructor() {
        super(AppointmentsDispatcher);
    }

    // начальное инициирующее состояние
    getInitialState() {

        let data = this.load();

        // если данные отсутствуют 
        if (!data) {
            this.save(Array(12).fill(0).map((_, k) => getAppointment(k)));
            data = this.load();
        }

        return Immutable.List.of(...data);
    } // getInitialState

    // обработка события для изменения данных
    reduce(state, action) {

        let index;

        switch (action.type) {
            case ActionTypes.ADD_ITEM:
                if (action.appointment)
                    return this.save(state.push(action.appointment));
                    
                return state;

            case ActionTypes.EDIT_ITEM:
                index = state.findIndex((v) => v.id === action.appointment.id);

                if (index > -1) 
                    return this.save(state.set(index, action.appointment));

                return state;

            case ActionTypes.REMOVE_ITEM:
                index = state.findIndex((v) => v.id === action.appointment);

                if (index > -1)
                    return this.save(state.delete(index));

                return state;

            default:
                return state;
        } // switch
    } // reduce

    // записать данные в локальное хранилище
    save(data) {
        localStorage.setItem(dataKey, JSON.stringify(data));
        return data;
    }

    // получить данные из локального хранилища
    load() {
        // список данных 
        let res = localStorage.getItem(dataKey);

        // если данные отсутствуют 
        if (!res) 
            return null;

        return JSON.parse(res).map(a => new Appointment().assign(a));
    }

}

export default new AppointmentStore();