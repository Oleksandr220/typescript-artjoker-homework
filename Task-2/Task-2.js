console.log("Вычисление периметра и площади с помощью коструктора");
const GeometricFigure = function (name, sideA, sideB, sideC) {
  this.name = name;
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;

  this.perimetr = function (value) {
    return `Периметр ${name}а равен ${value} см.`;
  };

  this.square = function (value) {
    return `Площадь ${name}а равна ${value} cм^2`;
  };
};

//Вычисление периметра треугольника
const tringle = new GeometricFigure("треугольник", 3, 5, 6);

const searchTringlePerimetr = () => {
  const { sideA, sideB, sideC, perimetr } = tringle;

  const tringlePerimetr = sideA + sideB + sideC;

  console.log(perimetr(tringlePerimetr));
};

// Вычисление площади треугольника
const searchTringleSquare = () => {
  const { sideA, sideB, square } = tringle;

  const tringleSquare = 0.5 * sideA * sideB;

  console.log(square(tringleSquare));
};
searchTringlePerimetr();
searchTringleSquare();

// Вычисление периметра прямоугольника
const rectangle = new GeometricFigure("прямоугольник", 4, 6);

const searchRectanglePerimetr = () => {
  const { sideA, sideB, perimetr } = rectangle;

  const rectanglePerimetr = sideA * 2 + sideB * 2;

  console.log(perimetr(rectanglePerimetr));
};

// Вычисление площади прямоугольника
const searchRectangleSquare = () => {
  const { sideA, sideB, square } = rectangle;

  const rectangleSquare = sideA * sideB;

  console.log(square(rectangleSquare));
};
searchRectanglePerimetr();
searchRectangleSquare();

// Вычисление площади круга
const circle = new GeometricFigure("круг");

const searchCircleSquare = () => {
  const numberPi = 3.14;
  const r = 13;

  const circleSquare = numberPi * r * r;

  console.log(circle.square(circleSquare));
};
searchCircleSquare();

console.log("Вычисление периметра и площади с помощью классов");

class Figure {
  constructor(name, sideA, sideB, sideC) {
    this.name = name;
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  perimetr(value) {
    console.log(`Периметр ${this.name}а равен ${value} см.`);
  }

  square(value) {
    console.log(`Площадь ${this.name}а равна ${value} cм^2`);
  }
}

//Вычисление периметра треугольника
const classTringle = new Figure("треугольник", 7, 6, 12);

const searchClassTringlePerimetr = () => {
  const { sideA, sideB, sideC } = classTringle;

  const tringlePerimetr = sideA + sideB + sideC;

  classTringle.perimetr(tringlePerimetr);
};
//Вычисление площади треугольника
const searchClassTringleSquare = () => {
  const { sideA, sideB } = classTringle;

  const tringleSquare = 0.5 * sideA * sideB;

  classTringle.square(tringleSquare);
};

searchClassTringlePerimetr();
searchClassTringleSquare();

//Вычисление периметра прямоугольника
const classRectangle = new Figure("прямоугольник", 7, 9);

const searchClassRectanglePerimetr = () => {
  const { sideA, sideB, perimetr } = classRectangle;

  const rectanglePerimetr = sideA * 2 + sideB * 2;

  classRectangle.perimetr(rectanglePerimetr);
};

//Вычисление площади прямоугольника
const searchClassRectangleSquare = () => {
  const { sideA, sideB } = classRectangle;

  const rectangleSquare = sideA * sideB;

  classRectangle.square(rectangleSquare);
};

searchClassRectanglePerimetr();
searchClassRectangleSquare();

//Вычисление площади круга
const classCircle = new Figure("круг");

const searchClassCircleSquare = () => {
  const numberPi = 3.14;
  const r = 9;

  const circleSquare = numberPi * r * r;

  classCircle.square(circleSquare);
};

searchClassCircleSquare();
