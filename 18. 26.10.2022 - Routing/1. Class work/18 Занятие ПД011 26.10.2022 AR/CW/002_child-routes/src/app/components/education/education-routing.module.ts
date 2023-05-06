import { PracticeComponent } from './practice/practice.component';
import { TheoryComponent } from './theory/theory.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Модули были созданы вручную но есть специальная команда
// ng g m components/specialty/specialty-route --routing

const routes: Routes = [
  {path: 'theory', component: TheoryComponent},
  {path: 'practice', component: PracticeComponent},
];

@NgModule({
  // !!! Метод forChild использовать в приложении можно сколько угодно раз !!!
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule { }
