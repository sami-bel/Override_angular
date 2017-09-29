import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { PaneauModule } from './Paneau/paneau.module';
import { AppComponent } from './app.component';
import { FilsComponent } from './fils.component';



@NgModule({

  imports: [
    BrowserModule,FormsModule,PaneauModule
  ],
  declarations: [
    AppComponent,FilsComponent
  ],

  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
