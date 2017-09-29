import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import {paneauInfoComponent,listComponent} from '../import/impot.moduleOpen';

@NgModule({
  imports: [
    BrowserModule,FormsModule,
  ],
  declarations: [
    listComponent,paneauInfoComponent
  ],

  providers: [],
  exports:[
    paneauInfoComponent,listComponent
  ]

})
export class PaneauModule { }
