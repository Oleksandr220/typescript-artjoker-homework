"use strict";
class Tringle {
    constructor(name, sideA, sideB, sideC, height) {
        this.perimetr = () => {
            if (this.sideA > 0 && this.sideB > 0 && this.sideC > 0) {
                const valuePerimetr = this.sideA + this.sideB + this.sideC;
                return valuePerimetr;
            }
            return undefined;
        };
        this.square = () => {
            if (this.sideA > 0 && this.height > 0 && this.sideA !== this.height) {
                const valueSquare = 0.5 * this.sideA * this.height;
                return valueSquare;
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
                const valuePerimetr = this.sideA * 2 + this.sideB * 2;
                return valuePerimetr;
            }
            return undefined;
        };
        this.square = () => {
            if (this.sideA > 0 && this.sideB > 0 && this.sideA !== this.sideB) {
                const valueSquare = this.sideA * this.sideB;
                return valueSquare;
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
                const valueSquare = Math.PI * this.radius * this.radius;
                return valueSquare;
            }
            return undefined;
        };
        this.name = name;
        this.radius = radius;
    }
}
