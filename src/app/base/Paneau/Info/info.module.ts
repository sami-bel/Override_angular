import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {InfoComponent} from "./info.component";


@NgModule({
  imports: [
    BrowserModule,FormsModule,
  ],
  declarations: [
    InfoComponent
  ],

  providers: [],
  exports:[
    InfoComponent
  ]

})
export class InfoModule { }
