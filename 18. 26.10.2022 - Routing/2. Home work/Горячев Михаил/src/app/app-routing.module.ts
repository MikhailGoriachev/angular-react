import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {Task01Component} from "./task01/task01.component";

const routes: Routes = [
    {path: "", redirectTo: "main", pathMatch: "full"},
    {path: "main", component: MainComponent},
    {path: "task01", component: Task01Component},
    {path: "**", redirectTo: "/"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
