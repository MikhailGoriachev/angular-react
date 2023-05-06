import { JavaScriptComponent } from './../front-end/technology/java-script/java-script.component';
import { CssComponent } from './../front-end/technology/css/css.component';
import { HtmlComponent } from './../front-end/technology/html/html.component';
import { BackendComponent } from './../backend/backend.component';
import { FrontEndComponent } from './../front-end/front-end.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Модуль был создан командой ng g m components/speciality/speciality-route --routing

const routes: Routes = [
  {
    path: 'front-end', component: FrontEndComponent, 
    children:[
      // Если путь дочерний и пустой, то вывод указаного компонента происходит сразу
      // {path: "", component: HtmlComponent},     // http://localhost:4200/front-end
      {path: "html", component: HtmlComponent},    // http://localhost:4200/front-end/html
      {path: 'css', component: CssComponent},      // http://localhost:4200/front-end/css
      {path: 'js', component: JavaScriptComponent} // http://localhost:4200/front-end/js
    ]
  },
  {path: 'backend', component: BackendComponent},
];

@NgModule({
  // Метод forChild можно сколько угодно много на проекте
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialityRouteRoutingModule { }
