import { Service05BusketExampleComponent } from './01_customServices/service05-busket-example/service05-busket-example.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Service01SimpleComponent } from './01_customServices/service01-simple/service01-simple.component';
import { Service02LocalComponent } from './01_customServices/service02-local/service02-local.component';
import { Service03ScopeComponent } from './01_customServices/service03-scope/service03-scope.component';
import { Service04ProvidedInComponent } from './01_customServices/service04-provided-in/service04-provided-in.component';


const routes: Routes = [
  {path: '', component: Service01SimpleComponent},
  {path: 'local-service', component: Service02LocalComponent},
  {path: 'scope-service', component: Service03ScopeComponent},
  {path: 'provided-in', component: Service04ProvidedInComponent},
  {path: 'example', component: Service05BusketExampleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
