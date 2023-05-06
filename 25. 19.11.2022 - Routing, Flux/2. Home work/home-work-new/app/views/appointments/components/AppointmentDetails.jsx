import React from "react";
import {useState} from "react";
import {Link, useParams} from "react-router-dom";

// компонент дополнительной информации о приёме
export function AppointmentDetails(props) {
    
    const [appointments] = useState(props.appointments); 
    
    let {id} = useParams();
    
    let item = appointments.find(a => {
        return a.id === +id;
    });
    
    // если данные отсутствуют 
    if (!item) {
        return (
            <div className='alert alert-danger w-35rem' role="alert">
                Данные не найдены! Вернуться к <Link to='/appointments'>списку приёмов</Link>
            </div>
        )
    }

    return (
        <>
            <h4 className="text-center">Детальная информация о приёмах</h4>

            <div className="card w-22rem col m-2 shadow">

                <div className="card-header">
                    <h5 className="text-center">Медицинский приём: {item.id}</h5>
                </div>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Доктор: <b>{item.doctor}</b></li>
                    <li className="list-group-item">Специальность: <b>{item.speciality}</b></li>
                    <li className="list-group-item">Стоимость приёма: <b>{item.cost.toFixed(2)}&#8381;</b></li>
                    <li className="list-group-item">Подоходный налог: <b>{item.incomeTax}%</b></li>
                </ul>

                <div className={"card-footer px-0"}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Кабинет: <b>{item.consultingRoom}</b></li>
                        <li className="list-group-item">Процент отчисления врачу: <b>{item.interestPercent}%</b></li>
                        <li className="list-group-item">Начисление врачу: <b>{item.getInterest().toFixed(2)}&#8381;</b></li>
                        <li className="list-group-item">Дата приёма: <b>{item.date.toISOString().substring(0, 10)}</b></li>
                        <li className="list-group-item text-center"><Link className={'btn btn-success'} to={`/appointments`}>Вернуться к списку</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}