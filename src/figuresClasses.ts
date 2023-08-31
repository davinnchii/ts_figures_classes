type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

const ERROR_MESSAGE = 'Invalid sides for this figure';

export interface Figure {
  shape: Shape,
  color: Color,

  getArea(): number
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error(ERROR_MESSAGE);
    }

    const sides = [a, b, c];
    const biggestSide = Math.max(...sides);
    const sumOfOtherSides = sides.reduce((acc, value) => {
      if (value !== biggestSide) {
        return acc + value;
      }

      return acc;
    });

    if (biggestSide >= sumOfOtherSides) {
      throw new Error(ERROR_MESSAGE);
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const triangleSquareFormula = Math.sqrt(p * (p - this.a)
    * (p - this.b) * (p - this.c));

    return Math.floor((triangleSquareFormula) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(ERROR_MESSAGE);
    }
  }

  getArea(): number {
    const circleSquareFormula = Math.PI * this.radius * this.radius;

    return Math.floor((circleSquareFormula) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(ERROR_MESSAGE);
    }
  }

  getArea(): number {
    const rectangleSquareFormula = this.width * this.height;

    return Math.floor((rectangleSquareFormula));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
