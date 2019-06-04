const defaultConfig = require('./jest.config');

module.exports = {
  ...defaultConfig,
  testRegex: '(/e2e/.*(\\.|/)(test|spec))\\.(js?|jsx?|ts?|tsx?)$',
  preset: 'jest-puppeteer',

};
