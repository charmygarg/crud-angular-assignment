import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Data} from "../data";
import {AppService} from "../app.service";

@Component({
  selector: 'showTask',
  templateUrl: './app/showTask/showTask.component.html',
  styleUrls: ['./app/showTask/showTask.component.css']

})

export class ShowTaskComponent implements OnInit {

  toDoList: Data[];
  index: number;
  editRow: Data;

  constructor(private router: Router, private route: ActivatedRoute, private service: AppService) {
    this.toDoList = this.service.lists;
  }

  ngOnInit() {
    this.toDoList = this.service.lists;
  }

  deleteToDo = function(index: number) {
    this.service.lists.splice(index,1)
  }

  editToDo(index: number) {
    this.index = index
    this.editRow  = this.service.lists[index]
    this.router.navigate(['createTask', this.editRow ])
  }

}
