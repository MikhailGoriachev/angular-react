import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
    DataPass01InputComponent,
    InputChildComponent,
    DataPass02OutputComponent,
    OutputChildComponent,
    DataPass03NgContentComponent,
    NgContentChildComponent,
    DataPass04ViewChildComponent,
    ViewChildComponent
} from "./index";

@NgModule({
    imports: [CommonModule],
    declarations: [
        DataPass01InputComponent,
        InputChildComponent,
        DataPass02OutputComponent,
        OutputChildComponent,
        DataPass03NgContentComponent,
        NgContentChildComponent,
        DataPass04ViewChildComponent,
        ViewChildComponent,
    ]
})
export class ComponentInteractionModule {
// Component Interaction
}
