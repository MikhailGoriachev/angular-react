// Для соединения хранилищ, действий и представлений во Flux применяются контейнеры.
import {Container} from "flux/utils";
import React from "react";
import AppointmentStore from "../data/AppointmentStore.js";
import Actions from "../data/Actions.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navigation} from "../views/Navigation.jsx";
import {Main} from "../views/Main.jsx";
import {Appointments} from "../views/appointments/Appointments.jsx";
import {AppointmentList} from "../views/appointments/components/AppointmentList.jsx";
import {AppointmentForm} from "../views/appointments/components/AppointmentForm.jsx";
import {AppointmentDetails} from "../views/appointments/components/AppointmentDetails.jsx";

// главный контейнер приложения
class AppContainer extends React.Component {
    
    // получить хранилище
    static getStores() {
        return [AppointmentStore];
    }

    // получить состояние
    static calculateState() {
        return {
            appointments: AppointmentStore.getState(),
            onAddAppointment: Actions.addItem,
            onEditAppointment: Actions.editItem,
            onRemoveAppointment: Actions.removeItem
        };
    }

    render() {
        return (
            <BrowserRouter>
                <Navigation/>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/appointments' element={<Appointments/>}>

                        <Route index element={<AppointmentList
                            appointments={this.state.appointments}
                            onDelete={this.state.onRemoveAppointment}
                        />}/>

                        <Route path='/appointments/form/add' element={<AppointmentForm
                            appointments={this.state.appointments}
                            onAdd={this.state.onAddAppointment}
                            onEdit={this.state.onEditAppointment}
                            isAdd={true}
                        />}/>

                        <Route path='/appointments/form/edit/:id' element={<AppointmentForm
                            appointments={this.state.appointments}
                            onAdd={this.state.onAddAppointment}
                            onEdit={this.state.onEditAppointment}
                            isAdd={false}
                        />}/>

                        <Route path='/appointments/details/:id' element={<AppointmentDetails
                            appointments={this.state.appointments}
                        />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Container.create(AppContainer);