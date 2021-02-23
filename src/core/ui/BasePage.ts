import '@typings/customAssertions';
import Logger from '@core/Logger';

export class BasePage {
  isOpen() {
    expect(this).toBeOpen();
    Logger.info(`The ${this.constructor.name} page is open`);
  }
}
