import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { PaneauModule as PaneauModule } from '../adam/Paneau/paneau.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule,PaneauModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModuleAdam { }
