import { Component, OnInit, AfterViewInit, AfterViewChecked, ChangeDetectorRef, ViewChild } from '@angular/core';
import { ShowViewPropComponent } from './show-view-prop/show-view-prop.component';

@Component({
  selector: 'app-lifecycle-component06-ng-after-view-checked',
  templateUrl: './lifecycle-component06-ng-after-view-checked.component.html'
})
export class LifecycleComponent06NgAfterViewCheckedComponent implements OnInit,
                                                                        AfterViewInit,
                                                                        AfterViewChecked {
  @ViewChild(ShowViewPropComponent) showViewComp: ShowViewPropComponent = new ShowViewPropComponent();
  constructor(private cdRef:ChangeDetectorRef) {}
  ngAfterViewChecked(){
    console.log(`ngAfterViewChecked - `,this.showViewComp)
    this.cdRef.detectChanges();
    this.showViewComp.editSomeValue();
    // this.cdRef.detectChanges();
  }

  ngOnInit() {
    console.log(`ngOnInit - `,this.showViewComp)
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit - `,this.showViewComp)
  }

}
