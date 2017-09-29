import { enableProdMode } from '@angular/core';
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModuleAdam } from './app/adam/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

//--------------
declare var Reflect : any;

export function CustomNgModule(annotation: any) {

  return function (target: Function) {
    var parentTarget = Object.getPrototypeOf(target.prototype).constructor,
      parentAnnotations = Reflect.getMetadata('annotations', parentTarget),
      parentAnnotation = parentAnnotations[0];

    console.log(annotation);
    console.log(parentAnnotation);
    // delete annotation.parent;
    console.log(parentAnnotation['declarations']);
    //
    Object.keys(parentAnnotation).forEach(key => {
      console.log(key);

      annotation[key] = parentAnnotation[key];
      // if (parentAnnotation[key] != "undefined") {
      //   // verify is annotation typeof function
      //   if(typeof annotation[key] === 'function'){
      //     annotation[key] = annotation[key].call(this, parentAnnotation[key]);
      //   }else if( key in annotation){
      //
      //   }
      // }
    });

    console.log(annotation);

    var metadata = new Component(annotation);

    Reflect.defineMetadata('annotations', [ metadata ], target);
  }
}





platformBrowserDynamic().bootstrapModule(AppModuleAdam)
  .catch(err => console.log(err));
