import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import {paneauInfoComponent,listComponent} from "../import/import.moduleOpen";

import {CommentaireModule} from "./Commentaire/commentaire.module";
import {InfoModule} from "./Info/info.module";
import {PartageModule} from "./Partage/partage.module";


@NgModule({
  imports: [
    BrowserModule,FormsModule,CommentaireModule,InfoModule,PartageModule
  ],
  declarations: [
    listComponent,paneauInfoComponent
  ],

  providers: [],
  exports:[
    paneauInfoComponent,listComponent,
  ]

})
export class PaneauModule { }
