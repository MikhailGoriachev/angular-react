import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {Task01Component} from "./task01/task01.component";
import {Task01HistogramComponent} from "./task01-histogram/task01-histogram.component";

const routes: Routes = [
    {path: "", component: MainComponent},
    {path: "task01", component: Task01Component},
    {path: "task01-histogram", component: Task01HistogramComponent},
    {path: "**", redirectTo: "/"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
