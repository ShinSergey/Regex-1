import Validator from '../Validator';

test('should return true', () => {
  expect(Validator.validateUsername('Sergey')).toEqual(true);
});
