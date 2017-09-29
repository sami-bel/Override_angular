import { enableProdMode } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/base/app.module';
import { environment } from './environments/environment';
import {ComponentMetadata} from "codelyzer/angular/metadata";
import {until} from "selenium-webdriver";
import alertIsPresent = until.alertIsPresent;





if (environment.production) {
  enableProdMode();
}
declare var Reflect : any;

export function CustomComponent(annotation: any) {
  return function (target: Function) {
    var parentTarget = Object.getPrototypeOf(target.prototype).constructor,
        parentAnnotations = Reflect.getMetadata('annotations', parentTarget),
        parentAnnotation = parentAnnotations[0];

    console.log(parentAnnotation);
    delete annotation.parent;
    Object.keys(parentAnnotation).forEach(key => {
      console.log(key);
      if (parentAnnotation[key] != "undefined") {
        // verify is annotation typeof function

        annotation[key] = parentAnnotation[key];
        // if(typeof annotation[key] === 'function'){
        //   annotation[key] = annotation[key].call(this, parentAnnotation[key]);
        // }else if( key in annotation){
        //   annotation[key] = parentAnnotation[key];
        // }
      }
    });

    console.log(annotation);

    var metadata = new Component(annotation);

    Reflect.defineMetadata('annotations', [ metadata ], target);
  }
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
