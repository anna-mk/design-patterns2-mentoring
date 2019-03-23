const PageFactory = require('../factory/pageFactory');

describe('EPAM Careers page', () => {

    let careersPage, jobsPage;

    beforeAll(() => {
        careersPage = PageFactory.getPage('CareersPage');
        jobsPage = PageFactory.getPage('JobsPage');
        careersPage.visit();
    });

    it('should have a title', (done) => {
        expect(careersPage.checkTitle('Explore Professional Growth Opportunities | EPAM Careers')).toBeTruthy();
        done();
    });

    it('should be loaded', (done) => {
        browser.wait(ec.visibilityOf(careersPage.header.logo))
            .then(() => browser.wait(ec.visibilityOf(careersPage.jobForm)))
            .then(() => {
                expect(careersPage.logoShouldBeDisplayed()).toBeTruthy();
                expect(careersPage.jobFormShouldBeDisplayed()).toBeTruthy();
            })
            .finally(done);
    });

    it('should allow to search available jobs', (done) => {
        careersPage.fillSearchForm('QA Automation Engineer');
            browser.wait(ec.visibilityOf(jobsPage.foundJobsLabel))
            .then(() => jobsPage.foundJobs.count())
            .then((count) => {
                if (count < 1) {
                    expect(jobsPage.foundJobsLabel.getText()).toBe(`Sorry, your search returned no results. Please try another combination.`);
                } else if (count === 1) {
                    expect(jobsPage.foundJobsLabel.getText()).toBe(`WE FOUND ${count} JOB OPENING RELATED TO "QA AUTOMATION ENGINEER"`);
                } else {
                    expect(jobsPage.foundJobsLabel.getText()).toBe(`WE FOUND ${count} JOB OPENINGS RELATED TO "QA AUTOMATION ENGINEER"`);
                }
            })
            .finally(done);
    });
});