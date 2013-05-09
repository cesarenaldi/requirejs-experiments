frameworks = ['mocha'];

files = [
  MOCHA,
  MOCHA_ADAPTER,
  'node_modules/chai/chai.js',
  REQUIRE,
  REQUIRE_ADAPTER,
  
  {pattern: 'src/**/*.js', included: false},
  {pattern: 'dist/*.js', included: false},
  {pattern: 'components/**/*.js', included: false},
  {pattern: 'test/**/*.spec.js', included: false},

  'test/runner.js'
];

browsers = [
	'Chrome'
];

plugins = [
	'karma-chrome-launcher',
	'karma-firefox-launcher',
	'karma-mocha'
];

autoWatch = true;