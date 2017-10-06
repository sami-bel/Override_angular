//--------------
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
declare var Reflect : any;

export function CustomNgModule(annotation: any) {

  return function (target: Function) {
    var parentTarget      = Object.getPrototypeOf(target.prototype).constructor,
        parentAnnotations = Reflect.getMetadata('annotations', parentTarget),
        parentAnnotation  = parentAnnotations[0];


    let  annotationNames = [];

    Object.keys(annotation).forEach(key => {

      Object.keys(annotation[key]).forEach( annotat => {

        let name = annotation[key][annotat].name;

        if( annotationNames[key] === undefined){
           annotationNames[key] = [];
        }
        annotationNames[key].push(name);
      })

      if(annotationNames[key] === undefined){
        annotationNames[key] = [];
      }
    });


    // console.log(annotationNames);

    Object.keys(parentAnnotation).forEach(key => {

      Object.keys(parentAnnotation[key]).forEach( annotat => {

        let name = parentAnnotation[key][annotat].name;

        if( annotation[key] !== undefined ){

          if(!annotationNames[key].includes(name)){
            if( annotation[key] !== undefined ){
              annotation[key].push(parentAnnotation[key][annotat]);
            }
          }

        }
      })


      // annotation[key] = parentAnnotation[key];
      // if (parentAnnotation[key] != "undefined") {
      //   // verify is annotation typeof function
      //   if(typeof annotation[key] === 'function'){
      //     annotation[key] = annotation[key].call(this, parentAnnotation[key]);
      //   }else if( key in annotation){
      //
      //   }
      // }
    });

    // console.log(annotation);

    // var metadata = new Component(annotation);
    var metadata = new NgModule(annotation);

    console.log(metadata);

    Reflect.defineMetadata('annotations', [ metadata ], target);
  }
}
