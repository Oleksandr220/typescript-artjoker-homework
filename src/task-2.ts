// Функуция коструктор треугольника
const Tringle = function ( this:any, name: string, sideA: number, sideB: number, sideC: number, height:number) {
    
  this.name = name;
  this.sideA = sideA;
  this.sideB = sideB;
    this.sideC = sideC;
    this.height = height;

    this.perimetr = () => {
        if (this.sideA > 0 && this.sideB > 0 && this.sideC > 0) {
            const valuePerimetr:number = this.sideA + this.sideB + this.sideC
          return valuePerimetr
        }
        return console.log('Something went wrong')
  };

    this.square = () => {
        if (this.sideA > 0 && this.height > 0 && this.sideA !== this.height) {
            const valueSquare:number =  0.5 * this.sideA * this.height
            return valueSquare
        }
      return console.log('Something went wrong ')
  };
};

const tringle = new (Tringle as any)("треугольник", 3, 5, 6, 5);

// Функуция коструктор прямоугольника
const Rectangle = function ( this:any, name: string, sideA: number, sideB: number) {
    
  this.name = name;
  this.sideA = sideA;
  this.sideB = sideB;

    this.perimetr = () => {
        if (this.sideA > 0 && this.sideB > 0) {
            const valuePerimetr:number = this.sideA * 2 + this.sideB * 2
          return valuePerimetr
        }
        return console.log('Something went wrong')
  };

    this.square = () => {
        if (this.sideA > 0 && this.sideB > 0 && this.sideA !== this.sideB) {
            const valueSquare:number = this.sideA * this.sideB
            return valueSquare
        }
      return console.log('Something went wrong ')
  };
};
const rectangle = new (Rectangle as any)("прямоугольник", 4, 6);

// Функуция коструктор круга
const Circle = function ( this:any, name: string, radius: number) {
    
  this.name = name;
  this.radius = radius;

    this.square = () => {
        if (this.radius > 0) {
            const valueSquare:number = Math.PI * this.radius * this.radius
            return valueSquare
        }
      return console.log('Something went wrong ')
  };
};
const circle = new (Circle as any)("круг", 9);

// Класс треугольник
class TringleClass { 
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
            const valuePerimetr:number = this.sideA + this.sideB + this.sideC
          return valuePerimetr
        }
        return console.log('Something went wrong')
  };

    square = () => {
        if (this.sideA > 0 && this.height > 0 && this.sideA !== this.height) {
            const valueSquare:number =  0.5 * this.sideA * this.height
            return valueSquare
        }
      return console.log('Something went wrong ')
  };
};
// Класс прямоугольника

class RectangleClass {
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
            const valuePerimetr:number = this.sideA * 2 + this.sideB * 2
          return valuePerimetr
        }
        return console.log('Something went wrong')
  };

    square = () => {
        if (this.sideA > 0 && this.sideB > 0 && this.sideA !== this.sideB) {
            const valueSquare:number = this.sideA * this.sideB
            return valueSquare
        }
      return console.log('Something went wrong ')
  };
}

// Класс круг

class CircleClass {
    name;
    radius;
    constructor(name: string, radius: number) {
        this.name = name;
      this.radius = radius;
    }

    square = () => {
        if (this.radius > 0) {
            const valueSquare:number = Math.PI * this.radius * this.radius
            return valueSquare
        }
      return console.log('Something went wrong ')
  };
}