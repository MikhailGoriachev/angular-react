import {DescrArticleComponent} from './../front-end/technology/descr-article/descr-article.component';
import {JavaScriptComponent} from './../front-end/technology/java-script/java-script.component';
import {CssComponent} from './../front-end/technology/css/css.component';
import {HtmlComponent} from './../front-end/technology/html/html.component';
import {BackendComponent} from './../backend/backend.component';
import {FrontEndComponent} from './../front-end/front-end.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ResolveForCssService} from '../shared/resolve-for-css.service';

// Модуль был создан командой ng g m components/speciality/speciality-route --routing

const routes: Routes = [
  {
    path: 'front-end', component: FrontEndComponent,
    children: [
      {path: "html", component: HtmlComponent},
      {path: 'html/:article-tag', component: DescrArticleComponent},
      {
        // для этого маршрута подключен Resolve-Guard
        path: 'css', component: CssComponent,

        // объект для подключения Resolve-Guard'а
        resolve: {
          // имена полей объекта - на усмотрение программиста
          // прочитать это свойство можно будет подписавшись на
          // activatedRoute.data в компоненте  CssComponent
          // в ngOnInit
          cssProperties: ResolveForCssService
        }
      },      // http://localhost:4200/front-end/css
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
export class SpecialityRouteRoutingModule {
}
