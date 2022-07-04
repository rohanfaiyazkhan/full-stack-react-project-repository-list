// Get current unix time in seconds
export function getCurrentTimeStamp() {
  return Math.floor(Date.now() / 1000);
}

// Take a unix timestamp (in seconds) and return a date object
export function readUnixTimestamp(input: number) {
  const timestampInMilliseconds = input * 1000;
  const time = new Date(timestampInMilliseconds);

  return time;
}

// Wrapper for date formatting. Although implementation is simple, there is room for more complex date formatting if needed
export function formatDate(input: Date) {
  return input.toLocaleString('en-us');
}
