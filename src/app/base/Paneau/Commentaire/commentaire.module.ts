import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {CommentaireComponent} from "./commentaire.component";


@NgModule({
  imports: [
    BrowserModule,FormsModule,
  ],
  declarations: [
    CommentaireComponent
  ],

  providers: [],
  exports:[
    CommentaireComponent
  ]

})
export class CommentaireModule { }
