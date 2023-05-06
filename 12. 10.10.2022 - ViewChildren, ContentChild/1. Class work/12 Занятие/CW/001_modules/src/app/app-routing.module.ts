import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent, TemplateComponent, ContainerComponent } from './01_component-styles/index';
import { DataPass01InputComponent,
         DataPass02OutputComponent,  
         DataPass03NgContentComponent, 
         DataPass04ViewChildComponent, 
         DataPass05ViewChildrenComponent, 
         DataPass06ContentChildComponent, 
         DataPass07ContentChildrenComponent 
      } from './02_parameter-passing/index';
import { LifecycleComponent01AllComponent, 
         LifecycleComponent02StepsComponent, 
         LifecycleComponent03OnChangeComponent, 
         LifecycleComponent04NgAfterContentInitComponent, 
         LifecycleComponent05NgAfterViewInitComponent, 
         LifecycleComponent06NgAfterViewCheckedComponent 
        } from './03_lifecycle-hooks/index';


const routes: Routes = [
  {path: '', component: ParentComponent},
  {path: 'component-css', component: TemplateComponent},
  {path: 'view-encapsulation', component: ContainerComponent},
  {path: 'input', component: DataPass01InputComponent},
  {path: 'output', component: DataPass02OutputComponent},
  {path: 'ng-content', component: DataPass03NgContentComponent},
  {path: 'view-child', component: DataPass04ViewChildComponent},
  {path: 'view-children', component: DataPass05ViewChildrenComponent},
  {path: 'content-child', component: DataPass06ContentChildComponent},
  {path: 'content-children', component: DataPass07ContentChildrenComponent},
  {path: 'lifecycle-component', component: LifecycleComponent01AllComponent},
  {path: 'lifecycle-steps', component: LifecycleComponent02StepsComponent},
  {path: 'ng-on-changes', component: LifecycleComponent03OnChangeComponent},
  {path: 'ng-after-content', component: LifecycleComponent04NgAfterContentInitComponent},
  {path: 'ng-after-view-init', component: LifecycleComponent05NgAfterViewInitComponent},
  {path: 'ng-after-view-checked', component: LifecycleComponent06NgAfterViewCheckedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
