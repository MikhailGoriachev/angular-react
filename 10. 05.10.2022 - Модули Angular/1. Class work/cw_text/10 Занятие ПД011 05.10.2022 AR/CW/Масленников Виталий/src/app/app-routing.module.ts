import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { WorkersComponent } from "./workers/workers.component";

const routes: Routes = [
    { path: '', component: HomeComponent, data: { title: 'Главная' } },
    { path: 'workers', component: WorkersComponent, data: { title: 'Работники' } },
    { path: '**', redirectTo: '/' },];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    
}
