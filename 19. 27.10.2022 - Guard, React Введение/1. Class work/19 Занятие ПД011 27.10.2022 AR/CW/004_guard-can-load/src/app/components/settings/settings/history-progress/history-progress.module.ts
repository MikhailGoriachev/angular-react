import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HistoryProgressComponent } from './history-progress.component';

const routes: Routes = [
  {path: '', component: HistoryProgressComponent}
];

@NgModule({
  declarations: [
    HistoryProgressComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HistoryProgressModule { }
