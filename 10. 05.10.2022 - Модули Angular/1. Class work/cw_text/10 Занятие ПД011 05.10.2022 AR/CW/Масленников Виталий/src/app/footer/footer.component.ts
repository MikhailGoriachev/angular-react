import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="container-fluid mt-5">
      <div class="row align-items-center bg-light h-60-px">
        <h6 class="text-center">&copy;{{year}}, Масленников Виталий, г. Донецк, КА «ШАГ», ПД011.</h6>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  year: number;
  
  constructor() {
    this.year = new Date().getFullYear();
  }

  ngOnInit(): void {
  }
}
