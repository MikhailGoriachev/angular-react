import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent,
         ChildComponent,
         DescendantComponent,
         TemplateComponent,
         ContainerComponent,
         CardComponent,
         BlockComponent } from './index';


@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    DescendantComponent,
    TemplateComponent,
    ContainerComponent,
    CardComponent,
    BlockComponent
  ],
  exports: [],
  imports: [
    CommonModule
  ]
})
export class ComponentStylesModule { }
