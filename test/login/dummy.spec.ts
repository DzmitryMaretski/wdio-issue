import Logger from '@core/Logger';
import { HomePage } from '@pages';

describe('Log in', () => {
  it('User can log in with valid credentials', () => {
    Logger.logStep('Expecting the Home Page to be opened');
    HomePage.isOpen();
  });
});
