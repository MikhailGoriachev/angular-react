import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent, TemplateComponent, ContainerComponent } from './01_component-styles';
import { DataPass01InputComponent,
         DataPass02OutputComponent,
         DataPass03NgContentComponent,
         DataPass04ViewChildComponent
      } from './02_parameter-passing';



const routes: Routes = [
  {path: '', component: ParentComponent},
  {path: 'component-css', component: TemplateComponent},
  {path: 'view-encapsulation', component: ContainerComponent},
  {path: 'input', component: DataPass01InputComponent},
  {path: 'output', component: DataPass02OutputComponent},
  {path: 'ng-content', component: DataPass03NgContentComponent},
  {path: 'view-child', component: DataPass04ViewChildComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
