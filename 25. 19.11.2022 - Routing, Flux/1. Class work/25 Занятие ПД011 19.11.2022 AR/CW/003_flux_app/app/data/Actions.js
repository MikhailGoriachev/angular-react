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

import ActionTypes from "./ActionTypes.js";
import PhonesDispatcher from "./PhonesDispatcher.js";

const Actions = {
    // добавление в коллекцию строки text
    // (м.б. любой объект)
    addItem(text) {
        PhonesDispatcher.dispatch({
            type: ActionTypes.ADD_ITEM,
            text,
        });
    },

    // удаление из коллекции строки текст
    removeItem(text) {
        PhonesDispatcher.dispatch({
            type: ActionTypes.REMOVE_ITEM,
            text,
        });
    }
};

export default Actions;