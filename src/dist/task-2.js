"use strict";
class Tringle {
    constructor(name, sideA, sideB, sideC, height) {
        this.perimetr = () => {
            if (this.sideA > 0 && this.sideB > 0 && this.sideC > 0) {
                const Perimetr = this.sideA + this.sideB + this.sideC;
                return Perimetr;
            }
            return undefined;
        };
        this.square = () => {
            if (this.sideA > 0 && this.height > 0 && this.sideA !== this.height) {
                const Square = 0.5 * this.sideA * this.height;
                return Square;
            }
            return undefined;
        };
        this.name = name;
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        this.height = height;
    }
}
;
class Rectangle {
    constructor(name, sideA, sideB) {
        this.perimetr = () => {
            if (this.sideA > 0 && this.sideB > 0) {
                const Perimetr = this.sideA * 2 + this.sideB * 2;
                return Perimetr;
            }
            return undefined;
        };
        this.square = () => {
            if (this.sideA > 0 && this.sideB > 0 && this.sideA !== this.sideB) {
                const Square = this.sideA * this.sideB;
                return Square;
            }
            return undefined;
        };
        this.name = name;
        this.sideA = sideA;
        this.sideB = sideB;
    }
}
class Circle {
    constructor(name, radius) {
        this.square = () => {
            if (this.radius > 0) {
                const Square = Math.PI * this.radius * this.radius;
                return Square;
            }
            return undefined;
        };
        this.name = name;
        this.radius = radius;
    }
}
