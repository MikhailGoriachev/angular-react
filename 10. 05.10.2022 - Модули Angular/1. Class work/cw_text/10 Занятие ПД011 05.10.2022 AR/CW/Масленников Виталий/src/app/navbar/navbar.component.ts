import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-sm navbar-main bg-body sticky-top shadow mb-2">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#appNavbarMain">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="appNavbarMain">
          <ul class="navbar-nav ms-3">
            
            <li class="nav-item nav-item-my me-2">
              <a routerLink="/"
                 routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"
                 class="nav-link nav-link-my" title="Перейти на страницу">
                Главная </a>
            </li>
            <li class="nav-item nav-item-my me-2">
              <a routerLink="workers" routerLinkActive="active" class="nav-link nav-link-my" title="Перейти на страницу">
                Работники </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
