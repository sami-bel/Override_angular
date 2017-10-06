import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {PartageComponent} from "./partage.component";


@NgModule({
  imports: [
    BrowserModule,FormsModule,
  ],
  declarations: [
    PartageComponent
  ],

  providers: [],
  exports:[
    PartageComponent
  ]

})
export class PartageModule { }
