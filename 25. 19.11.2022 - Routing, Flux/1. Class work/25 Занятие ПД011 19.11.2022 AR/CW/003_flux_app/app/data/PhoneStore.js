// Хранилище представляет собой класс, унаследованный от класса ReduceStore
// из пакета "flux/utils".

import Immutable from "immutable";
import {ReduceStore} from "flux/utils";
import ActionTypes from "./ActionTypes.js";
import PhonesDispatcher from "./PhonesDispatcher.js";

class PhonesStore extends ReduceStore
{

    // В конструкторе хранилища в конструктор базового
    // класса передается объект диспетчера.
    constructor() {
        super(PhonesDispatcher);
    }

    // С помощью метода getInitialState() устанавливается состояние хранилища.
    // В данном случае это список - объект Immutable.List. Он во многом аналогичен
    // массиву javascript за тем исключением, что он является неизменяемым списком,
    // а все операции с ним возвращают новый обновленный список.
    getInitialState() {
        return Immutable.List.of("Apple iPhone 14 Pro", "Google Pixel 6", "Samsung Galaxy A72");
    } // getInitialState

    // В унаследованном методе reduce() получаем два объекта - state (текущее состояние хранилища,
    // то, что изначально возвращается методом getInitialState) и action (тот объект, который
    // передается в действии - то есть тип действия, добавляемый или удаляемый элемент).
    reduce(state, action) {
        switch (action.type) {
            case ActionTypes.ADD_ITEM:
                if (action.text) {
                    return state.push(action.text);
                }
                return state;
            case ActionTypes.REMOVE_ITEM:
                let index = state.indexOf(action.text);
                if (index > -1) {
                    return state.delete(index);
                } // if
                return state;
            default:
                return state;
        } // switch
    } // reduce
} // class PhonesStore

export default new PhonesStore();