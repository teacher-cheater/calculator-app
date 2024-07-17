import { parseAndCalculate } from '../Calculator/calculator';

describe('parseAndCalculate', () => {
  test('ошибка для недопустимого выражения', () => {
    expect(() => parseAndCalculate('2+')).toThrow('Недопустимое выражение');
  });

  test('получение процента', () => {
    expect(parseAndCalculate('100-5%')).toBe(95);
  });

  test('вычисление квадратного корня', () => {
    expect(parseAndCalculate('√4')).toBe(2);
  });

  test('деление на 0', () => {
    expect(() => parseAndCalculate('4/0')).toThrow('Ошибка');
  });

  test('сложные выражения', () => {
    expect(parseAndCalculate('3+5×2-4/2')).toBe(11);
  });
  test('выражение со скобками', () => {
    expect(parseAndCalculate('4+(3+4)/2')).toBe(7.5);
  });
});
