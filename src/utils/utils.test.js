import { formatTime } from './format';

describe('test formatting', () => {
  test.each([
    [0, '00:00:00'],
    [1000, '00:00:01'],
    [3_600_000, '01:00:00'],
  ])('%d ms to %s', (timestamp, expected) => {
    expect(formatTime(timestamp)).toBe(expected);
  });
});
