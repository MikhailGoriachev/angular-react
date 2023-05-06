import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ViewFieldComponent } from './view-field/view-field.component';


@Component({
  selector: 'app-lifecycle-component05-ng-after-view',
  templateUrl: './lifecycle-component05-ng-after-view.component.html'
})
export class LifecycleComponent05NgAfterViewInitComponent implements OnInit,
                                                                  DoCheck,
                                                                  AfterContentInit,
                                                                  AfterContentChecked,
                                                                  AfterViewInit,
                                                                  AfterViewChecked{


  @ViewChild(ViewFieldComponent) inputFiled: ViewFieldComponent = new ViewFieldComponent();
  @ViewChild('btn') btn: ElementRef = new ElementRef<any>("");
  constructor(){
    console.log(`ONE - constructor \n inputFiled`, this.inputFiled);
    console.log(` btn `, this.btn);
  }
  ngOnChanges() {
    console.log(`ONE - ngOnChanges \n inputFiled`, this.inputFiled);
    console.log(` btn `, this.btn);
  }

  ngOnInit() {
    console.log(`ONE - ngOnInit \n inputFiled`, this.inputFiled);
    console.log(`btn `, this.btn);
  }

  ngDoCheck() {
    console.log(`ONE - ngDoCheck \n inputFiled`, this.inputFiled);
    console.log(`btn `, this.btn);
  }

  ngAfterContentInit() {
    console.log(`ONE - ngAfterContentInit \n inputFiled`, this.inputFiled);
    console.log(`btn `, this.btn);
  }

  ngAfterContentChecked() {
    console.log(`ONE - ngAfterContentChecked \n inputFiled`, this.inputFiled);
    console.log(`btn `, this.btn);
  }

  ngAfterViewInit() {
    console.log(`ONE - ngAfterViewInit \n inputFiled`, this.inputFiled);
    console.log(` btn `, this.btn);
    // this.btn.nativeElement.innerText = this.inputFiled.getText();
    this.btn.nativeElement.innerText = this.inputFiled.updateProp()
  }

  ngAfterViewChecked() {
    console.log(`ONE - ngAfterViewChecked \n inputFiled`, this.inputFiled);
    console.log(` btn `, this.btn);
  }

}
