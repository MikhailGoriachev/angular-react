// Этот файл собственно определяет действия.
// Каждое действие определяется в виде функции, в которую могут
// передаваться параметры. В нашем случае список объектов будет
// представлять набор строк, поэтому в действия добавления и удаления
// элемента передается строка - добавляемый или удаляемый объект.
// В самом действии вызывается метод dispatch. В качестве параметра этот
// метод принимает объект, в котором передаем тип действия и собственно
// данные. Но вообще в объекте можно определить любые данные, которые
// нам необходимы.
// При вызове действия этот объект будет передаваться в хранилище.

import {ActionTypes} from "./ActionTypes.js";
import AppointmentsDispatcher from "./AppointmentsDispatcher.js";

const Actions = {
    
    // добавление элемента
    addItem(appointment) {
        AppointmentsDispatcher.dispatch({
            type: ActionTypes.ADD_ITEM,
            appointment,
        });
    },

    // изменение элемента
    editItem(appointment) {
        AppointmentsDispatcher.dispatch({
            type: ActionTypes.EDIT_ITEM,
            appointment,
        });
    },
    
    // удаление элемента
    removeItem(appointment) {
        AppointmentsDispatcher.dispatch({
            type: ActionTypes.REMOVE_ITEM,
            appointment,
        });
    }
};

export default Actions;