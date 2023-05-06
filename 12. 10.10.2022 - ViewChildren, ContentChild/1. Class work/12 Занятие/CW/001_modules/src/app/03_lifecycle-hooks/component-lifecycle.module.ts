import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
        LifecycleComponent01AllComponent,
        LifecycleFullComponent,
        LifecycleComponent02StepsComponent,
        LifecycleFirstComponent,
        LifecycleSecondComponent,
        LifecycleThirdComponent,
        LifecycleComponent03OnChangeComponent,
        ChildComponentComponent,
        LifecycleComponent04NgAfterContentInitComponent,
        OneComponent,
        TwoComponent,
        LifecycleComponent05NgAfterViewInitComponent,
        ViewFieldComponent,
        LifecycleComponent06NgAfterViewCheckedComponent
} from "./index";
import { ShowViewPropComponent } from './lifecycle-component06-ng-after-view-checked/show-view-prop/show-view-prop.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        LifecycleComponent01AllComponent,
        LifecycleFullComponent,
        LifecycleComponent02StepsComponent,
        LifecycleFirstComponent,
        LifecycleSecondComponent,
        LifecycleThirdComponent,
        LifecycleComponent03OnChangeComponent,
        ChildComponentComponent,
        LifecycleComponent04NgAfterContentInitComponent,
        OneComponent,
        TwoComponent,
        LifecycleComponent05NgAfterViewInitComponent,
        ViewFieldComponent,
        LifecycleComponent06NgAfterViewCheckedComponent,
        ShowViewPropComponent,
    ]
})
export class ComponentLifecycleModule {
// Component Interaction
}