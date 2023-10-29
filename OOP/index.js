"use strict";
// interface shape {
//     getArea():number;
// }
// class Circle implements shape{
// constructor(protected radius:number){}    
//  getArea(): number {
//      return Math.round(this.radius*this.radius * Math.PI) ;
//  }
// }
// class RectAngle implements shape {
//     constructor(protected length:number, protected width:number) {}
//     getArea(): number {
//         return this.length * this.width;
//     }
// }
// const shape : shape[] = [new Circle(5) , new RectAngle(2 , 3)];
// shape.forEach((shapes) =>{
//     console.log(shapes.getArea());  
// });
class Ashape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
class RectAngle extends Ashape {
    getArea() {
        return this.width * this.height;
    }
}
let r1 = new RectAngle(2, 3);
console.log(r1.getArea());
