/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/unbound-method */

expect.extend({
  toBeOpen(client: any, negate: boolean) {
    const identifier = $(client.identifier);
    identifier.waitForDisplayed({
      timeout: 50000,
      timeoutMsg: `${client.constructor.name} is not open`,
    });
    if (negate) {
      expect(identifier.isDisplayed()).toBeFalsy;
      return {
        message: () => `Page is open, but shouldn't`,
        pass: true,
      };
    } else {
      expect(identifier.isDisplayed()).toBeTruthy;
      return {
        message: () => `${client.className} is not open`,
        pass: true,
      };
    }
  },
});
