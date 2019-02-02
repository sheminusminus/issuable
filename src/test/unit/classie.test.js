import { classie } from '../../utils';

describe('classie util', () => {
  it('Concatenates array items', () => {
    const arrayArg = ['firstClass', 'secondClass'];
    const expected = 'firstClass secondClass';
    const result = classie(arrayArg);
    expect(result).toBe(expected);
  });

  it('Conditionally applies object items', () => {
    const arrayArg = ['firstClass', 'secondClass'];
    const objArg = { thirdClass: false, fourthClass: true };
    const expected = 'firstClass secondClass fourthClass';
    const result = classie(arrayArg, objArg);
    expect(result).toBe(expected);
  });

  it('Ignores non-strings', () => {
    const arrayArg = ['firstClass', true, null, undefined, 'secondClass'];
    const expected = 'firstClass secondClass';
    const result = classie(arrayArg);
    expect(result).toBe(expected);
  });

  it('Ignores empty strings', () => {
    const arrayArg = ['firstClass', '', 'secondClass'];
    const expected = 'firstClass secondClass';
    const result = classie(arrayArg);
    expect(result).toBe(expected);
  });
});
