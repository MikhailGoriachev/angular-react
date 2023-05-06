import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-lifecycle-third',
  templateUrl: './lifecycle-third.component.html'
})
export class LifecycleThirdComponent implements OnInit,
                                                DoCheck,
                                                AfterContentInit,
                                                AfterContentChecked,
                                                AfterViewInit,
                                                AfterViewChecked,
                                                OnDestroy {
          constructor(){
              console.log("03____THIRD - constructor");
          }
          ngOnChanges() {
              console.log("03____THIRD - ngOnChanges");
          }

          ngOnInit() {
              console.log("03____THIRD - ngOnInit");
          }

          ngDoCheck() {
              console.log("03____THIRD - ngDoCheck");
          }

          ngAfterContentInit() {
              console.log("03____THIRD - ngAfterContentInit");
          }

          ngAfterContentChecked() {
              console.log("03____THIRD - ngAfterContentChecked");
          }

          ngAfterViewInit() {
              console.log("03____THIRD - ngAfterViewInit");
          }

          ngAfterViewChecked() {
              console.log("03____THIRD - ngAfterViewChecked");
          }

          ngOnDestroy() {
              console.log("03____THIRD - ngOnDestroy");
          }

}
