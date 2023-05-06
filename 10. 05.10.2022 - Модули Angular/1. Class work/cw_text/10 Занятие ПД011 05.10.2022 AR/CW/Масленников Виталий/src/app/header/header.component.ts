import { Component } from '@angular/core';
import { ActivationStart, Router } from "@angular/router";

@Component({
    selector: 'app-header',
    template: `
        <header class="container-fluid">
            <div class="top-bar row align-items-center ps-4">
                <h1> {{title}}</h1>
            </div>
        </header>
    `,
    styles: []
})
export class HeaderComponent {

    title: string = '';

    constructor(private router: Router) {
        // Получение данных из маршрута
        this.router.events.subscribe(data => {
            if (data instanceof ActivationStart) {
                this.title = data.snapshot.data['title'];
            }
        });
    }
}
