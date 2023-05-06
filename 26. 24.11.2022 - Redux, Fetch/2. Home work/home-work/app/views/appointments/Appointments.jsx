// компонент "Медицинские приёмы"
import React from "react";
import {Outlet} from "react-router-dom";

export function Appointments() {
    return (
        <section className="mx-5 my-4 bg-light shadow-sm border rounded-3 min-vh-100 p-3">
            <Outlet/>
        </section>
    )
}