/* eslint-disable no-unused-vars */
export class Fraction {
  constructor(readonly numerator: number) {}

  public add(that: Fraction): Fraction {
    return new Fraction(this.numerator + that.numerator);
  }
}
