class Tringle { 
    name;
    sideA;
    sideB;
    sideC;
    height;
  constructor(name:string, sideA:number, sideB:number, sideC:number, height:number) {
    this.name = name;
    this.sideA = sideA;
    this.sideB = sideB;
      this.sideC = sideC;
      this.height = height;
  }

    perimetr = () => {
        if (this.sideA > 0 && this.sideB > 0 && this.sideC > 0) {
            const Perimetr: number = this.sideA + this.sideB + this.sideC
          return Perimetr;
        }
      return undefined;
  };

    square = () => {
        if (this.sideA > 0 && this.height > 0 && this.sideA !== this.height) {
            const Square:number =  0.5 * this.sideA * this.height
          return Square;
        }
      return undefined;
  };
};

class Rectangle {
    name;
sideA;
sideB;
constructor(name: string, sideA: number, sideB: number) {
    this.name = name;
  this.sideA = sideA;
  this.sideB = sideB;
}
      perimetr = () => {
        if (this.sideA > 0 && this.sideB > 0) {
            const Perimetr:number = this.sideA * 2 + this.sideB * 2
          return Perimetr
        }
        return undefined;
  };

    square = () => {
        if (this.sideA > 0 && this.sideB > 0 && this.sideA !== this.sideB) {
            const Square:number = this.sideA * this.sideB
            return Square
        }
      return undefined;
  };
}

class Circle {
    name;
    radius;
    constructor(name: string, radius: number) {
        this.name = name;
      this.radius = radius;
    }

    square = () => {
        if (this.radius > 0) {
            const Square:number = Math.PI * this.radius * this.radius
            return Square
        }
      return undefined;
  };
}