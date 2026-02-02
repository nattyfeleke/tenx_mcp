import average from '../math';

describe('average', () => {
  test('calculates mean of numeric array', () => {
    expect(average([1, 2, 3, 4])).toBeCloseTo(2.5);
  });

  test('ignores non-numeric values', () => {
    expect(average([1, 'a', null, 3] as unknown[])).toBeCloseTo(2);
  });

  test('returns NaN for empty array', () => {
    expect(Number.isNaN(average([]))).toBe(true);
  });

  test('returns NaN when no valid numbers present', () => {
    expect(Number.isNaN(average([null, 'x', {}] as unknown[]))).toBe(true);
  });

  test('ignores Infinity and NaN', () => {
    expect(average([1, Infinity, NaN, 3] as unknown[])).toBeCloseTo(2);
  });
});
