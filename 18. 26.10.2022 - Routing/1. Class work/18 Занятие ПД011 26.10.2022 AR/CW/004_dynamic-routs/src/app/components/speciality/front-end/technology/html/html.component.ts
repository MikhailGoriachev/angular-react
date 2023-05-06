import { Component, OnInit } from '@angular/core';
import { FrontEndServerService } from './../../../shared/front-end-server.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {

  constructor(
    private frontServer: FrontEndServerService,
    private activatedRoute: ActivatedRoute
    ) { }

  // ссылка на описание HTML
  htmlTags: any;

  ngOnInit(): void {
    this.frontServer.getTags().subscribe(data => this.htmlTags = data)
    console.log(this.activatedRoute)
  }

}
