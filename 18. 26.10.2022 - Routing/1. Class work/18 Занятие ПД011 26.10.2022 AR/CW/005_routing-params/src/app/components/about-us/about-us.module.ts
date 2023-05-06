import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';

// !!! ВАЖНО
// В app-routing.module.ts указаны способы динамической подгрузки модулей
// При таком способе в файле app.module.ts НЕ регистрируем этот модуль!!!
const routes: Routes = [
    // path пустой потому что в модуле app-routing.module.ts его уже указали
    // Как только путь 'about-us', этот модуль загружается и по настройке ниже указывает что нужно выводить
    {path: '', component: AboutUsComponent}
];
@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutUsModule { }
