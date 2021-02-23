/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
class Logger {
  info(message: string) {
    console.info(message);
  }

  error(message: string) {
    console.error(message);
  }

  logTestName(testName: string) {
    this.info(
      `\n===================== Test case: '${testName}' =====================`
    );
  }

  logTestEnd(result: boolean, title: string) {
    if (result) {
      this.info(`<<<<<<<< TEST '${title}' PASSED >>>>>>>>`);
    } else {
      browser.takeScreenshot();
      this.info(`>>>>>>>> TEST '${title}' FAILED <<<<<<<<`);
    }
  }

  logStep(stepName: string) {
    this.info(`[Step]: ${stepName}`);
  }
}

export default new Logger();
