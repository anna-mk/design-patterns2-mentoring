const BasePage = require('./basePage');
const provider = require('./pageObjectProvider');

class JobsPage extends BasePage {
    constructor() {
        super();
        // this.url = '';
        this.foundJobsLabel = element(by.className("search-result__heading"));
        this.foundJobs = element.all(by.className("search-result__item"));
    }
}

module.exports = JobsPage;