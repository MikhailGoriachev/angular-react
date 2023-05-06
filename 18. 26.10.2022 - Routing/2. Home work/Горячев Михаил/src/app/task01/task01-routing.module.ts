import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Chapter1Component} from "./components/book1/chapter1/chapter1.component";
import {Chapter2Component} from "./components/book1/chapter2/chapter2.component";
import {Chapter3Component} from "./components/book1/chapter3/chapter3.component";
import {Chapter4Component} from "./components/book1/chapter4/chapter4.component";
import {IntroductionComponent} from "./components/book1/introduction/introduction.component";
import {Book1Component} from "./components/book1/book1.component";
import {Task01Component} from "./task01.component";

const routes: Routes = [
    {path: "task01", redirectTo: "book", pathMatch: "full"},
    {
        path: "book", component: Book1Component,
        children: [
            {path: "", redirectTo: "introduction", pathMatch: "full"},
            {path: "introduction", component: IntroductionComponent},
            {path: "chapter1", component: Chapter1Component},
            {path: "chapter2", component: Chapter2Component},
            {path: "chapter3", component: Chapter3Component},
            {path: "chapter4", component: Chapter4Component}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Task01RoutingModule {
}
