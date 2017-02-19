import {Injectable} from "@angular/core";
import {Data} from "./Data";

@Injectable()
export class AppService {

  lists: Data[] = [];

  addTask(date: Date, title: string, description: string, priority: string) {
    this.lists.push(new Data(date, title, description, priority))
  }

}
