import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ShowTaskComponent} from "./showTask/showTask.component";
import {AppComponent} from "./app.component";
import {CreateTaskComponent} from "./createTask/createTask.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {AppService} from "./app.service";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, ShowTaskComponent, CreateTaskComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ AppService ]
})
export class AppModule { }
