import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

import { PaneauModuleTest } from './Paneau/paneau.module';

// import { PaneauModule as PaneauModule } from '../base/Paneau/paneau.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule,PaneauModuleTest,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModuleAdam { }
