export function getTimeIn(value: number, unit: 'ms' | 'sec' | 'min' | 'hs' | 'ds'): number {
  const millisecondsPerUnit = {
    ms: 1,
    sec: 1000,
    min: 1000 * 60,
    hs: 1000 * 60 * 60,
    ds: 1000 * 60 * 60 * 24,
  }

  if (!Object.keys(millisecondsPerUnit).includes(unit)) {
    throw new Error('Invalid time unit. Provide one of: ms, sec, min, hs, ds.')
  }
  return value * millisecondsPerUnit[unit]
}
