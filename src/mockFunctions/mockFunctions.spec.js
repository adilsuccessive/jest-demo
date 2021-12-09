import sum from './mockFunction';
import video from './mockFn';

jest.mock('./mockFunction');
test('adds 3 + 2 to equal 1', () => {
  // sum is a mock function
  sum.mockImplementation((a, b) => (a - b));
  expect(sum(3, 2)).toBe(1);
});

test('plays video', () => {
  const spy = jest.spyOn(video, 'play')
    .mockImplementation(() => 'stopByMock');

  expect(video.play()).toBe('stopByMock');
  expect(video.stop()).toBe('stop');

  spy.mockRestore();
});
