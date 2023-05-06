import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// обычный импорт компонентов
import { CardPhoneComponent } from './card-phone/card-phone.component';
import { CardNotebookComponent } from './card-notebook/card-notebook.component';
import { CardTVComponent } from './card-tv/card-tv.component';


@NgModule({
  // импорт компонентов только в этом модуле
  declarations: [
    CardPhoneComponent,
    CardNotebookComponent,
    CardTVComponent],
  imports: [
    // требуется этот импорт для указания того факта, что это дополнительный модуль
    CommonModule
  ]
})
export class ElectronicsModule { }
