
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {PaneauModule as PaneauModuleBase} from "../../base/Paneau/paneau.module";
import {CustomNgModule} from '../../config/costumDecorator'
import { BrowserModule } from '@angular/platform-browser';
import { PartageModule} from "./Partage/partage.module";
import { storyBoardModule} from './StroyBoard/storyBoard.module'

@CustomNgModule({
  imports: [PartageModule,storyBoardModule],
  declarations: [],
  providers: [],
  exports:[
  ]

})
export class PaneauModuleTest extends PaneauModuleBase { }
