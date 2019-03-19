const GLOBAL_TIMEOUT = 60000;

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec/*.js'],
    capabilities: {
        browserName: 'chrome'
    },

    onPrepare: function () {
        browser.waitForAngularEnabled(false);
        global.GLOBAL_TIMEOUT = GLOBAL_TIMEOUT;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = GLOBAL_TIMEOUT;
        global.ec = protractor.ExpectedConditions;
        browser.manage().window().maximize();
    }
};