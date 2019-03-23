const CareersPage = require('../po/careersPage');
const JobsPage = require('../po/jobsPage');

class PageFactory {
    static getPage(page) {
        switch (page) {
            case 'CareersPage': return new CareersPage();
            case 'JobsPage': return new JobsPage();
        }
    }
}

module.exports = PageFactory;