const BasePage = require('./basePage');
const provider = require('./pageObjectProvider');

class CareersPage extends BasePage {
    constructor() {
        super();
        this.url = '';

        this.jobForm = element.all(by.className("recruiting-search__form job-search__form")).get(0);
        this.jobID = element(by.id("new_form_job_search_1445745853_copy-keyword"));
        this.location = element(by.className("select2-selection__rendered"));
        this.locationList = element(by.css(".select2-results__options.open"));
        this.allLocations = element(by.css(".select2-results__option"));
        this.skills = element.all(by.css("div.selected-params")).get(0);
        this.skillsList = element(by.className("multi-select-dropdown"));
        this.skillQA = element(by.cssContainingText('.checkbox-custom-label', "Software Test Engineering"));
        this.findButton = element.all(by.className("recruiting-search__submit")).get(0);
    }

    jobFormShouldBeDisplayed() {
        return this.jobForm.isDisplayed();
    }

    fillSearchForm(jobName) {
        this.jobID.sendKeys(jobName)
            .then(() => this.location.click())
            .then(() => browser.wait(ec.visibilityOf(this.locationList)))
            .then(() => this.allLocations.click())
            .then(() => this.skills.click())
            .then(() => browser.wait(ec.visibilityOf(this.skillsList)))
            .then(() => this.skillQA.click())
            .then(() => this.findButton.click())
            .then(() => provider.getPageObjects('job'))
    }
}

module.exports = CareersPage;