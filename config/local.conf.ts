import { baseConfig as config, downloadDir } from './base.conf';

config.services.push('selenium-standalone');
config.baseUrl = 'https://www.google.com/';

config.capabilities = [
  {
    'browserName': 'chrome',
    'goog:chromeOptions': {
      args: [
        '--window-size=1920,1080',
        '--no-sandbox',
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--disable-extensions',
      ],
      prefs: {
        'directory_upgrade': true,
        'prompt_for_download': false,
        'download.default_directory': downloadDir,
      },
    },
  },
];

export { config };
