import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// --------------------------------------------------
// Импорт компонентов из папки "cards" по отдельности
import { CardPhoneComponent } from './cards/card-phone/card-phone.component';
import { CardNotebookComponent } from './cards/card-notebook/card-notebook.component';
import { CardTVComponent } from './cards/card-tv/card-tv.component';
//--------------------------------------------------
// Импорт компонентов из lists/index.ts, имя index.ts можно не указывать
import { UlComponent, OlComponent, DlComponent} from './lists';
//--------------------------------------------------
// Импорт массива маршрутов из posts/routs.ts
import { postsRoutes } from './posts/routs';

const routes: Routes = [
  {path: 'notebook', component: CardNotebookComponent},
  {path: 'phone', component: CardPhoneComponent},
  {path: 'tv', component: CardTVComponent},

  // -----------------------
  {path: 'ul-list', component: UlComponent},
  {path: 'ol-list', component: OlComponent},
  {path: 'dl-list', component: DlComponent},

  // -----------------------
  // импорт маршрутов из массива в модуле posts/routes
  ...postsRoutes
]
// .concat(route);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
