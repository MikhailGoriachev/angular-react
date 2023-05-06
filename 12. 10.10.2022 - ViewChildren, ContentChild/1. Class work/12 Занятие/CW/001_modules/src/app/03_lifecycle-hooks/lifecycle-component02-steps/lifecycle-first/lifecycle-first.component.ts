import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-lifecycle-first',
  templateUrl: './lifecycle-first.component.html'
})
export class LifecycleFirstComponent implements OnInit,
                                                DoCheck,
                                                AfterContentInit,
                                                AfterContentChecked,
                                                AfterViewInit,
                                                AfterViewChecked,
                                                OnDestroy {
      constructor(){
          console.log("01-FIRST - constructor");
      }
      ngOnChanges() {
          console.log("01-FIRST - ngOnChanges");
      }

      ngOnInit() {
          console.log("01-FIRST - ngOnInit");
      }

      ngDoCheck() {
          console.log("01-FIRST - ngDoCheck");
      }

      ngAfterContentInit() {
          console.log("01-FIRST - ngAfterContentInit");
      }

      ngAfterContentChecked() {
          console.log("01-FIRST - ngAfterContentChecked");
      }

      ngAfterViewInit() {
          console.log("01-FIRST - ngAfterViewInit");
      }

      ngAfterViewChecked() {
          console.log("01-FIRST - ngAfterViewChecked");
      }

      ngOnDestroy() {
          console.log("01-FIRST - ngOnDestroy");
      }

}
