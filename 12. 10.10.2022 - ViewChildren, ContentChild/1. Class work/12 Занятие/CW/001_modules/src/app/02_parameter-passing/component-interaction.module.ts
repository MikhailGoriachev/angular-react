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
    ViewChildComponent,
    DataPass05ViewChildrenComponent,
    ViewChildrenComponent,
    DataPass06ContentChildComponent,
    ContentChildComponent,
    ContentGrandchildComponent,
    DataPass07ContentChildrenComponent,
    ContentChildrenContainerComponent,
    ContentChildrenBlockComponent
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
        DataPass05ViewChildrenComponent,
        ViewChildrenComponent,
        DataPass06ContentChildComponent,
        ContentChildComponent,
        ContentGrandchildComponent,
        DataPass07ContentChildrenComponent,
        ContentChildrenContainerComponent,
        ContentChildrenBlockComponent,
    ]
})
export class ComponentInteractionModule {
// Component Interaction
}