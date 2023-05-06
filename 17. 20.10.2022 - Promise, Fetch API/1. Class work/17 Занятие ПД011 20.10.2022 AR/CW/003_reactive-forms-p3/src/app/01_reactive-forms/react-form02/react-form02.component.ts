import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'app-react-form02',
  templateUrl: './react-form02.component.html'
})
export class ReactForm02Component implements OnInit {
  data = '125';

  ngOnInit(): void {}

  // Тема жизненного цикла компонента
  // Решение ошибки в консоли ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: 'my_field'. Current value: 'my_field ng-untouched ng-pristine ng-invalid'.
  // В ранних версиях Ангуляра до 9-й данной ошибки нет
  // Закомментировав код ниже можно обнаружить эту ошибку
  constructor(private cdr: ChangeDetectorRef) { }

  ngAfterContentChecked(){
    this.cdr.detectChanges();
  }
}
