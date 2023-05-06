import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Binding01InterpolationComponent } from './01_binding/binding01interpolation/binding01interpolation.component';
import { Binding02PropertyComponent } from './01_binding/binding02property/binding02property.component';
import { Binding03EventsComponent } from './01_binding/binding03events/binding03events.component';
import { Binding04ReferenseComponent } from './01_binding/binding04referense/binding04referense.component';
import { Binding05KeyboardsComponent } from './01_binding/binding05keyboards/binding05keyboards.component';
import { Binding06AttributeComponent } from './01_binding/binding06attribute/binding06attribute.component';
import { Binding07ClassComponent } from './01_binding/binding07class/binding07class.component';
import { Binding08StyleComponent } from './01_binding/binding08style/binding08style.component';

 
const routes: Routes = [
  // Bindings
  {path: '', component: Binding01InterpolationComponent},
  {path: 'property_binding', component: Binding02PropertyComponent},
  {path: 'event_binding', component: Binding03EventsComponent},
  {path: 'referense', component: Binding04ReferenseComponent},
  {path: 'kbd_events', component: Binding05KeyboardsComponent},
  {path: 'attribute_binding', component: Binding06AttributeComponent},
  {path: 'class_binding', component: Binding07ClassComponent},
  {path: 'style_binding', component: Binding08StyleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
