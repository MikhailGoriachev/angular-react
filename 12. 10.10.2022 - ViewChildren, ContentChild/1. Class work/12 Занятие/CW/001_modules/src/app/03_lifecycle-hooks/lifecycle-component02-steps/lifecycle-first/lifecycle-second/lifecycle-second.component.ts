import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-lifecycle-second',
  templateUrl: './lifecycle-second.component.html'
})
export class LifecycleSecondComponent implements OnInit,
                                                DoCheck,
                                                AfterContentInit,
                                                AfterContentChecked,
                                                AfterViewInit,
                                                AfterViewChecked,
                                                OnDestroy {
          constructor(){
              console.log("02__SECOND - constructor");
          }
          ngOnChanges() {
              console.log("02__SECOND - ngOnChanges");
          }

          ngOnInit() {
              console.log("02__SECOND - ngOnInit");
          }

          ngDoCheck() {
              console.log("02__SECOND - ngDoCheck");
          }

          ngAfterContentInit() {
              console.log("02__SECOND - ngAfterContentInit");
          }

          ngAfterContentChecked() {
              console.log("02__SECOND - ngAfterContentChecked");
          }

          ngAfterViewInit() {
              console.log("02__SECOND - ngAfterViewInit");
          }

          ngAfterViewChecked() {
              console.log("02__SECOND - ngAfterViewChecked");
          }

          ngOnDestroy() {
              console.log("02__SECOND - ngOnDestroy");
          }

}
