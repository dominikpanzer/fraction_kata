import { Fraction } from '../index';

test('0 + 0 = 0', () => {
  const firstFraction = new Fraction(0);
  const secondFraction = new Fraction(0);
  const expectedFraction = new Fraction(0);

  const resultFraction = firstFraction.add(secondFraction);

  expect(resultFraction).toEqual(expectedFraction);
});

test('add different integers > zero', () => {
  const firstFraction = new Fraction(5);
  const secondFraction = new Fraction(10);
  const expectedFraction = new Fraction(15);

  const resultFraction = firstFraction.add(secondFraction);

  expect(resultFraction).toEqual(expectedFraction);
});

test('add negative integers', () => {
  const firstFraction = new Fraction(5);
  const secondFraction = new Fraction(-10);
  const expectedFraction = new Fraction(-5);

  const resultFraction = firstFraction.add(secondFraction);

  expect(resultFraction).toEqual(expectedFraction);
});

test('add fractions with same denominator without simplifying', () => {
  const firstFraction = new Fraction(1, 5);
  const secondFraction = new Fraction(2, 5);
  const expectedFraction = new Fraction(15, 25);

  const resultFraction = firstFraction.add(secondFraction);

  expect(resultFraction).toEqual(expectedFraction);
});

test('add fractions with different denominator without simplifying', () => {
  const firstFraction = new Fraction(1, 5);
  const secondFraction = new Fraction(1, 6);
  const expectedFraction = new Fraction(11, 30);

  const resultFraction = firstFraction.add(secondFraction);

  expect(resultFraction).toEqual(expectedFraction);
});

test('add fractions with zero', () => {
  const firstFraction = new Fraction(0);
  const secondFraction = new Fraction(1, 6);
  const expectedFraction = new Fraction(1, 6);

  const resultFraction = firstFraction.add(secondFraction);

  expect(resultFraction).toEqual(expectedFraction);
});
