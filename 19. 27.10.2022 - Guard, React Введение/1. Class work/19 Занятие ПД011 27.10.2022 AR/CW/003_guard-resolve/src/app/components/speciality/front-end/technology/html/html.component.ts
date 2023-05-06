import {Component, OnInit} from '@angular/core';
import {FrontEndServerService} from './../../../shared/front-end-server.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

// пример передачи параметров через динмический маршрут и через параметры
// адресной строки (строки запроса)
@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {

  constructor(
    private frontServer: FrontEndServerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  htmlTags: any;
  bgPairsTag: any;
  fragment: any;

  ngOnInit(): void {

    // обработчик параметра адресной строки pairs
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      console.log(params)
      this.bgPairsTag = params['pairs'];
    });

    // обработчик параметра fragment - строка block или inline
    this.activatedRoute.fragment.subscribe((frag) => {
      console.log(frag)
      this.fragment = frag;
    });

    // получение коллекции - фактически получаем после вывода компонента
    // чтобы ждать окончания получения данных рекомендуется Resolve Guard
    // (см. CssComponent)
    this.frontServer.getTags().subscribe(data => this.htmlTags = data)
    // console.log(this.activatedRoute)
  }

  // установить цвет фона в зависимости от типа элемента, для блочных
  // тегов - светлозеленый фон
  typeElement(tag: any) {
    return (tag.type === this.fragment)?'lightgreen':'';
  }

  // Программное формирование URL
  // http://localhost:4200/front-end/html#inline
  // строка 'inline' - параметр
  inlineTypeFragment() {
    this.router.navigate(['/front-end', 'html'], {
      fragment: 'inline'
    })
  }

  // программное формирование URL c параметром в адресной строке
  // http://localhost:4200/front-end/html?pairs=false
  notPairedTagsMethod() {
    this.router.navigate(['/front-end', 'html'], {
      queryParams: {pairs: false}
    })
  }

  // уствновить цвет фона в зависимости от типа тега
  addBgForTag(tag: any) {
    // console.log(this.bgPairsTag)
    return `${tag.paired}` === this.bgPairsTag;

  }

  isSelected(tag: any) {
    return this.activatedRoute.snapshot.params['id'] === tag.id
  }
}
