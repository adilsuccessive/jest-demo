import asyncFunction from './asyncFunction';

it('should test asyncFunction', async () => {
  const response = await asyncFunction()
  expect(response).toBe('data');
});
