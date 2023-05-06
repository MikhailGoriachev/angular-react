import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationComponent, ProgramingComponent, TripsComponent } from './index';

@NgModule({
  declarations: [
    EducationComponent,
    ProgramingComponent,
    TripsComponent],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
