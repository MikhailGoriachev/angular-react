import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {Task01Component} from "./task01/task01.component";
import {Task02Component} from "./task02/task02.component";
import {Task03Component} from "./task03/task03.component";

const routes: Routes = [
    {path: "", component: MainComponent},
    {path: "task01", component: Task01Component},
    {path: "task02", component: Task02Component},
    {path: "task03", component: Task03Component},
    {path: "**", redirectTo: "/"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
