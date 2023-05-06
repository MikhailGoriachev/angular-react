// компонент форма для ввода данных о приёме
import React, {useEffect, useState} from "react";
import {createRef} from "react";
import {getDoctorList, getInitialsList, getRandomItem, getSpecialities} from "../../../infrastructure/utils";
import {Appointment} from "../../../models/Appointment";
import {Link, useNavigate, useParams} from "react-router-dom";

export function AppointmentForm(props) {

    const [appointments] = useState(props.appointments);
    const {id} = useParams();

    const navigate = useNavigate();

    // текущий приём
    let app = new Appointment();

    // режим измения записи
    if (!props.isAdd) 
        app = appointments.find(a => a.id === +id);

    // ссылки на поля формы
    const doctorField = createRef(null);
    const patientField = createRef(null);
    const specialityField = createRef(null);
    const consultingRoomField = createRef(null);
    const costField = createRef(null);
    const interestPercentField = createRef(null);
    const incomeTaxField = createRef(null);
    const dateField = createRef(null);

    useEffect(() => {

        if (!props.isAdd) {
            doctorField.current.value = app.doctor;
            patientField.current.value = app.patient;
            specialityField.current.value = app.speciality;
            consultingRoomField.current.value = app.consultingRoom;
            costField.current.value = app.cost;
            interestPercentField.current.value = app.interestPercent;
            incomeTaxField.current.value = app.incomeTax;
            dateField.current.value = app.date.toISOString().substring(0, 10);
        }
    }, []);

    // список врачей
    let doctorList = getDoctorList().map((v, k) => <option key={k}>{v}</option>);
    let specList = getSpecialities().map((v, k) => <option key={k}>{v}</option>);


    // обработка события добавления
    const onSubmit = (e) => {
        e.preventDefault();
        
        let item = new Appointment(
            props.isAdd ? (appointments.count() > 0 ? Math.max(...appointments.map(d => d.id)) + 1 : 1) : +id,
            doctorField.current.value,
            patientField.current.value,
            +consultingRoomField.current.value,
            specialityField.current.value,
            +costField.current.value,
            +interestPercentField.current.value,
            +incomeTaxField.current.value,
            new Date(dateField.current.value)
        );

        if (props.isAdd)
            props.onAdd(item);
        else
            props.onEdit(item);

        navigate("/appointments");
    }

    return (
        <form onSubmit={onSubmit} className="w-50 mx-auto">
            <h4 className="text-center">{props.isAdd ? "Добавление" : "Изменение"} приёма</h4>

            <div className={`form-floating my-2`}>

                <div className={`form-floating my-2`}>
                    <select ref={doctorField}
                            className="form-select"
                            placeholder="Доктор" required>
                        {doctorList}
                    </select>
                    <label className="form-label">Доктор</label>
                </div>

                <div className={`form-floating my-2`}>
                    <input type="text" ref={patientField}
                           className="form-control"
                           placeholder="Пациент" required/>
                    <label className="form-label">Пациент</label>
                </div>

                <div className={`form-floating my-2`}>
                    <select ref={specialityField}
                            className="form-select"
                            placeholder="Специальность" required>
                        {specList}
                    </select>
                    <label className="form-label">Специальность</label>
                </div>

                <div className={`form-floating my-2`}>
                    <input type="number" ref={consultingRoomField}
                           className="form-control"
                           min={1}
                           placeholder="Кабинет" required/>
                    <label className="form-label">Кабинет</label>
                </div>

                <div className={`form-floating my-2`}>
                    <input type="number" ref={costField}
                           className="form-control"
                           min={1}
                           placeholder="Стоимость приёма" required/>
                    <label className="form-label">Стоимость приёма</label>
                </div>

                <div className={`form-floating my-2`}>
                    <input type="number" ref={interestPercentField}
                           className="form-control"
                           min={1} max={100}
                           placeholder="Процент отчисления врачу" required/>
                    <label className="form-label">Процент отчисления врачу</label>
                </div>

                <div className={`form-floating my-2`}>
                    <input type="number" ref={incomeTaxField}
                           className="form-control"
                           min={0}
                           placeholder="Подоходный налог" required/>
                    <label className="form-label">Подоходный налог</label>
                </div>

                <div className={`form-floating my-2`}>
                    <input type="date" ref={dateField}
                           className="form-control"
                           placeholder="Дата приёма" required/>
                    <label className="form-label">Дата приёма</label>
                </div>

                <div>
                    <input type="submit" className="btn btn-success w-10rem me-3"
                           value={props.isAdd ? "Добавить" : "Сохранить"}/>
                    <Link className="btn btn-primary w-10rem" to={`/appointments`}>Назад</Link>
                </div>
            </div>
        </form>
    )
}