import { FrontEndServerService } from './../../../shared/front-end-server.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-descr-article',
  templateUrl: './descr-article.component.html',
  styleUrls: ['./descr-article.component.css']
})
export class DescrArticleComponent implements OnInit {

  constructor(
    private frontServer: FrontEndServerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  tagHTML: any;

  ngOnInit(): void {
    let id;
    this.activatedRoute.params.subscribe(res=>{
      console.log(res);

      // имя параметра маршрута, маршрут определен в speciality-route-routing.module
      id = res['article-tag'];
      this.frontServer.getTag(id).subscribe(data => {
        console.log(data);
        this.tagHTML = data;
      })
    })
  }

  // программный переход по статическому пути заданному абсолютно
  visited(){
    this.router.navigate(["/front-end/html"]);
  }
}
