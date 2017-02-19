import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {Data} from "./data";

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent implements OnInit {

  toDoList: Data[];

  constructor(private service: AppService) {}

  ngOnInit() {
    this.toDoList = this.service.lists;
  }
}
