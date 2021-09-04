/* eslint-disable no-unused-vars */
export class Fraction {
  constructor(readonly numerator: number, readonly denominator: number = 1) {}

  public add(that: Fraction): Fraction {
    const newMultipliedNumerator = this.calculateNewMultipliedNumerator(that);
    const newMultipliedDenominator = this.calculateNewMultupliedDenominator(that);
    const gcd = this.gcd(newMultipliedNumerator, newMultipliedDenominator);
    const { newFinalNumerator, newFinalDenominator } = this.calculateFinalNumeratorAndDenominator(
      newMultipliedNumerator,
      gcd,
      newMultipliedDenominator
    );

    return new Fraction(newFinalNumerator, newFinalDenominator);
  }

  private calculateFinalNumeratorAndDenominator(
    newMultipliedNumerator: number,
    gcd: number,
    newMultipliedDenominator: number
  ) {
    const newFinalNumerator = newMultipliedNumerator / gcd;
    const newFinalDenominator = newMultipliedDenominator / gcd;
    return { newFinalNumerator, newFinalDenominator };
  }

  private calculateNewMultupliedDenominator(that: Fraction) {
    return this.denominator * that.denominator;
  }

  private calculateNewMultipliedNumerator(that: Fraction) {
    return this.numerator * that.denominator + that.numerator * this.denominator;
  }

  private gcd(firstNumber: number, secondNumber: number): number {
    if (!secondNumber) {
      return firstNumber;
    } else {
      return this.gcd(secondNumber, firstNumber % secondNumber);
    }
  }
}
