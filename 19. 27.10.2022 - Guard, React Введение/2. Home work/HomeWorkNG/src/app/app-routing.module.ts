import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./main/main.component";
import {AuthorizationCanLoadGuard} from "./guards/authorization-can-load-guard.service";
import {AuthorizationCanActivateGuard} from "./guards/authorization-can-activate.guard";

const routes: Routes = [
    {path: "", redirectTo: "main", pathMatch: "full"},
    {path: "main", component: MainComponent},
    {
        path: "task01",
        loadChildren: () => import("./task01/task01.module").then(m => m.Task01Module),
        canLoad: [AuthorizationCanLoadGuard],
        canActivate: [AuthorizationCanActivateGuard]
    },
    {path: "**", redirectTo: "/"}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
