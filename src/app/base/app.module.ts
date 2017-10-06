import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { PaneauModule } from './Paneau/paneau.module';
import { AppComponent } from './app.component';




@NgModule({

  imports: [
    BrowserModule,FormsModule,PaneauModule
  ],
  declarations: [
    AppComponent
  ],

  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {

}
