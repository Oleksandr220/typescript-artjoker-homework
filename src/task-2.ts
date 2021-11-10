class Tringle { 
    sideA: number;
    sideB: number;
    sideC: number;
    height: number;
  constructor(sideA: number, sideB: number, sideC: number, height: number) {
    if (sideA <= 0 && sideB <= 0 && sideC <= 0 && sideA !== height) {
      throw new Error('Wrong data');
    }
    this.sideA = sideA;
    this.sideB = sideB;
      this.sideC = sideC;
      this.height = height;
  }

  getPerimetr = ():number => this.sideA + this.sideB + this.sideC;

  getSquare = (): number => 0.5 * this.sideA * this.height;
};

class Rectangle {
sideA: number;
sideB: number;
  constructor(sideA: number, sideB: number) {
   if (sideA <= 0 && sideB <= 0 && sideA !== sideB) {
            throw new Error('Wrong data')
        }
  this.sideA = sideA;
  this.sideB = sideB;
}
      getPerimetr = (): number => this.sideA * 2 + this.sideB * 2

    getSquare = (): number => this.sideA * this.sideB
}

class Circle {
    radius: number;
  constructor(radius: number) {
      if (radius <= 0) {
            throw new Error('Wrong data')
        }
      this.radius = radius;
    }

    getSquare = (): number => Math.PI * this.radius * this.radius
}