// компонент для вывода списка приёмов
import React, {useEffect} from "react";
import {useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import {InfoCircleFill, PencilFill, PlusLg, TrashFill} from "react-bootstrap-icons";

export function AppointmentList(props) {

    // данные
    const data = props.appointments;

    let rows = () => props.appointments.map((c, k) => {
        return (
            <tr key={k}>
                <th>{c.id}</th>
                <td>{c.doctor}</td>
                <td>{c.speciality}</td>
                <td>{c.patient}</td>
                <td>{c.cost}</td>
                <td className="text-center">
                    <Link className={'btn btn-primary mx-1'} to={`/appointments/details/${c.id}`} title="Детально...">
                        <InfoCircleFill/>
                    </Link>

                    <Link className={'btn btn-success mx-1'} to={`/appointments/form/edit/${c.id}`} title="Изменить...">
                        <PencilFill/>
                    </Link>

                    <Button className={'btn-danger mx-1'} onClick={() => props.onDelete(c.id)} title="Удалить">
                        <TrashFill/>
                    </Button>
                </td>
            </tr>
        )
    });

    // общая стоимость
    const [cost, setCost] = useState(0);

    // обновление общей стоимости
    useEffect(() => setCost(data.reduce((p, c) => p + c.cost, 0)), [data]);

    return (
        <>
            <h4 className="text-center">
                Список приёмов <small className='text-black-50'>(Общая стоимость: {cost}&#8381;)</small>
            </h4>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Врач</th>
                    <th>Специальность</th>
                    <th>Пациент</th>
                    <th>Стоимость приёма (&#8381;)</th>
                    <td className="text-center">
                        <Link className={'btn btn-success w-10rem'} to={`/appointments/form/add`}>
                            <PlusLg/> Добавить
                        </Link>
                    </td>
                </tr>
                </thead>
                <tbody>{rows()}</tbody>
            </table>
        </>
    );
}