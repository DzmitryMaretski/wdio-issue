export {};
declare global {
  namespace ExpectWebdriverIO {
    interface Matchers<R, T> {
      toBeOpen(): R;
    }
  }
}
