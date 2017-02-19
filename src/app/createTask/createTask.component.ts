import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {AppService} from "../app.service";
import {Data} from "../data";

@Component ({
  selector: 'createTask',
  templateUrl: './app/createTask/createTask.component.html',
  styleUrls: ['./app/createTask/createTask.component.css']
})

export class CreateTaskComponent implements OnInit {

  toDoList: Data[];
  editRow: Data;
  private sub: any;

  constructor(private router: Router, private route: ActivatedRoute, private service: AppService) {
    this.toDoList = this.service.lists;
  }

  ngOnInit() {
    this.toDoList = this.service.lists;
    this.sub = this.route.params.subscribe(params => {
        this.editRow = params['editRow'];
      });

  }

  submit(date: Date, title: string, description: string, priority: string) {
    this.service.addTask(date, title, description, priority)
    this.router.navigate(['showTask'])
  }

}
