// Для соединения хранилищ, действий и представлений во Flux применяются контейнеры.
import AppView from "../views/AppView.js";
import {Container} from "flux/utils";
import React from "react";
import PhoneStore from "../data/PhoneStore.js";
import Actions from "../data/Actions.js";

// Класс контейнера AppContainer, с одной стороны, представляет компонент
// React. Но в то же время он реализует два необходимых метода:
// getStores() и calculateState().
class AppContainer extends React.Component
{
    // Метод getStores() возвращает набор харнилищ, которые используются в приложении.
    // В нашем случае это только одно хранилище PhoneStore.
    static getStores() {
        return [PhoneStore];
    }

    // Метод calculateState() возвращает состояние контейнера. Здесь состояние
    // контейнера включает список phones, причем этот список мы будем получать
    // из состояния хранилища, т.е. свойство phones будет содержать ImmutableLis
    static calculateState() {
        return {
            phones: PhoneStore.getState(),
            tablets: PhoneStore.getState(),
            onAddPhone: Actions.addItem,
            onRemoveTablet: Actions.removeItem
        };
    }

    render() {
        return <AppView phones={this.state.phones}
                        onRemoveItem={this.state.onRemoveItem}
                        onAddItem={this.state.onAddItem}  />;
    }
}

export default Container.create(AppContainer);