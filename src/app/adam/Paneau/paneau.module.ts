import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import {listComponent} from '../import/impot.moduleOpen';
import {PaneauModule as PaneauModuleBase} from "../../base/Paneau/paneau.module";
import {CustomNgModule} from "../../../main2";
//
// @NgModule({
//   imports: [
//     BrowserModule,FormsModule,
//   ],
//   declarations: [
//     listComponent
//   ],
//
//   providers: [],
//   exports:[
//     listComponent
//   ]
//
// })

@CustomNgModule({

  declarations: [
    listComponent
  ],
  exports:[
     listComponent
  ]


})
export class PaneauModule extends PaneauModuleBase{ }
