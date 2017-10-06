import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {storyBoardComponent} from "./storyBoard.component";


@NgModule({
  imports: [
    BrowserModule,FormsModule,
  ],
  declarations: [
    storyBoardComponent
  ],

  providers: [],
  exports:[
    storyBoardComponent
  ]

})
export class storyBoardModule { }
