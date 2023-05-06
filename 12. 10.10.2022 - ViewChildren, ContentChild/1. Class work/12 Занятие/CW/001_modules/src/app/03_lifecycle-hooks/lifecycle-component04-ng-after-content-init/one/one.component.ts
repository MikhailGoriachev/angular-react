import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ContentChild, ElementRef } from '@angular/core';
import { TwoComponent } from '../two/two.component';


@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
})
export class OneComponent implements OnInit,
                                      DoCheck,
                                      AfterContentInit,
                                      AfterContentChecked,
                                      AfterViewInit,
                                      AfterViewChecked,
                                      OnDestroy {

        @ContentChild(TwoComponent) Content_twoComponent: TwoComponent = new TwoComponent();
        @ContentChild('element') pElementHTML: ElementRef = new ElementRef<any>("");

        constructor(){
          console.log(`ONE - constructor \n twoContentChild`, this.Content_twoComponent);
        }
        ngOnChanges() {
          console.log(`ONE - ngOnChanges \n twoContentChild`, this.Content_twoComponent);
        }

        ngOnInit() {
          // ERROR
          // this.Content_twoComponent.showAlert()
          console.log(`ONE - ngOnInit \n twoContentChild`, this.Content_twoComponent);
          console.log(`pElementHTML`, this.pElementHTML);
        }

        ngDoCheck() {
          console.log(`ONE - ngDoCheck \n twoContentChild`, this.Content_twoComponent);
          console.log(`pElementHTML`, this.pElementHTML);
        }

        ngAfterContentInit() {
          this.Content_twoComponent.showAlert()
          console.log(`ONE - ngAfterContentInit \n twoContentChild`, this.Content_twoComponent);
          console.log(`pElementHTML`, this.pElementHTML);
        }

        ngAfterContentChecked() {
          console.log(`ONE - ngAfterContentChecked \n twoContentChild`, this.Content_twoComponent);
        }

        ngAfterViewInit() {
          console.log(`ONE - ngAfterViewInit \n twoContentChild`, this.Content_twoComponent);
        }

        ngAfterViewChecked() {
          console.log(`ONE - ngAfterViewChecked \n tContentChild`, this.Content_twoComponent);
        }

        ngOnDestroy() {
          console.log("ONE - ngOnDestroy");
        }

}
