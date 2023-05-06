import { CardDetailsComponent } from './theory/card-details/card-details.component';
import { PracticeComponent } from './practice/practice.component';
import { TheoryComponent } from './theory/theory.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Модули были созданы вручную но есть специальная команда
// ng g m components/specialty/specialty-route --routing

const routes: Routes = [
  {path: 'theory',  component: TheoryComponent},
  {path: 'theory/:id-lesson',  component: CardDetailsComponent},
  {path: 'practice', component: PracticeComponent},
];

@NgModule({
  // Метод forChild Сколько угодно много можно
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationRoutingModule { }
