import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
})
export class TwoComponent implements OnInit,
                                      DoCheck,
                                      AfterContentInit,
                                      AfterContentChecked,
                                      AfterViewInit,
                                      AfterViewChecked,
                                      OnDestroy {

        constructor(){
          console.log(`TWO - constructor tContentChild`);
        }
        ngOnChanges() {
          console.log("TWO - ngOnChanges");
        }

        ngOnInit() {
          console.log("TWO - ngOnInit");
        }

        ngDoCheck() {
          console.log("TWO - ngDoCheck");
        }

        ngAfterContentInit() {
          console.log(`TWO - ngAfterContentInit`);
        }

        ngAfterContentChecked() {
          console.log(`TWO - ngAfterContentChecked`);
        }

        ngAfterViewInit() {
          console.log("TWO - ngAfterViewInit");
        }

        ngAfterViewChecked() {
          console.log(`TWO - ngAfterViewChecked`);
        }

        ngOnDestroy() {
          console.log("TWO - ngOnDestroy");
        }

        showAlert(){
          setTimeout(function(){
            alert(`TWO component Alert`)
          }, 1000)
        }
}
