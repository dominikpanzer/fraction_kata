/* eslint-disable no-unused-vars */
export class Fraction {
  constructor(readonly numerator: number, readonly denominator: number = 1) {}

  public add(that: Fraction): Fraction {
    const gcd = this.gcd(
      this.numerator * that.denominator + that.numerator * this.denominator,
      this.denominator * that.denominator
    );
    return new Fraction(
      (this.numerator * that.denominator + that.numerator * this.denominator) /
        gcd,
      (this.denominator * that.denominator) / gcd
    );
  }

  public gcd(firstNumber: number, secondNumber: number): number {
    if (!secondNumber) {
      return firstNumber;
    } else {
      return this.gcd(secondNumber, firstNumber % secondNumber);
    }
  }
}
