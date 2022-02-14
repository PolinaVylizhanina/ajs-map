import ErrorRepository from '../app';

test('Should return Unknown Error', () => {
  expect(new ErrorRepository().translate(5)).toBe('Unknown error');
});

test('Should return correct code', () => {
  expect(new ErrorRepository().translate(1)).toBe('Enter the correct email');
});
