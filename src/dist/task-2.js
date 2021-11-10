"use strict";
class Tringle {
    constructor(sideA, sideB, sideC, height) {
        this.getPerimetr = () => this.sideA + this.sideB + this.sideC;
        this.getSquare = () => 0.5 * this.sideA * this.height;
        if (sideA <= 0 && sideB <= 0 && sideC <= 0 && sideA !== height) {
            throw new Error('Wrong data');
        }
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        this.height = height;
    }
}
;
class Rectangle {
    constructor(sideA, sideB) {
        this.getPerimetr = () => this.sideA * 2 + this.sideB * 2;
        this.getSquare = () => this.sideA * this.sideB;
        if (sideA <= 0 && sideB <= 0 && sideA !== sideB) {
            throw new Error('Wrong data');
        }
        this.sideA = sideA;
        this.sideB = sideB;
    }
}
class Circle {
    constructor(radius) {
        this.getSquare = () => Math.PI * this.radius * this.radius;
        if (radius <= 0) {
            throw new Error('Wrong data');
        }
        this.radius = radius;
    }
}
