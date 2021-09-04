/* eslint-disable no-unused-vars */
export class Fraction {
  constructor(readonly numerator: number, readonly denominator: number = 1) {}

  public add(that: Fraction): Fraction {
    return new Fraction(
      this.numerator * that.denominator + that.numerator * this.denominator,
      this.denominator * that.denominator
    );
  }
}
