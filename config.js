const { SpecReporter, StacktraceOption } = require('jasmine-spec-reporter');

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    onPrepare: () => {
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
              displayStacktrace: StacktraceOption.PRETTY
            }
        }));
    },
    // capabilities: {
    //     browserName: 'chrome',
    //     chromeOptions: {
    //       args: ['--headless', '--disable-gpu']
    //     }
    //   }
    multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }]
}
