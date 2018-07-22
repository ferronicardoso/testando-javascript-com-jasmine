module.exports = function(config) {
  config.set({
    basePath: '',
    plugins: [
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter')
    ],
    coverageReporter: {
      dir : 'reports/coverage/',
      type : 'html',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'text', subdir: '.', file: 'text.txt' } 
    ]},
    client: {
      clearContext: false,
      jasmine: {
        random: false
      }
    },
    frameworks: ['jasmine'],
    files: [
      'node_modules/angular/angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'js/**/*.js',
      'spec/**/*.js'
    ],
    exclude: [
      
    ],
    preprocessors: {
      'js/**/*.js': ['coverage'],
    },
    reporters: ['progress', 'coverage', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}