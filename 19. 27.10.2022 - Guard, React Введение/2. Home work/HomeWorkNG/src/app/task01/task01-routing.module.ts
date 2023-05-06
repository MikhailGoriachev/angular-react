import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Task01Component} from "./task01.component";
import {StudentFormComponent} from "./student-form/student-form.component";

const routes: Routes = [
    {path: "", component: Task01Component},
    {path: "student", component: StudentFormComponent},
    {path: "student/:id", component: StudentFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Task01RoutingModule { }
