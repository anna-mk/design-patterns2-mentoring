const Header = require('./component/header');
const Footer = require('./component/footer');
const SearchForm = require('./component/searchForm');

// const ec = protractor.ExpectedConditions;

class BasePage {
    constructor() {
        this.header = new Header();
        this.footer = new Footer();
        this.searchForm = new SearchForm();
    }

    visit() {
        browser.get('https://www.epam.com/careers' + this.url);
        return browser.wait(ec.elementToBeClickable(this.header.logo), GLOBAL_TIMEOUT);
    }

    checkTitle(expectedTitle) {
        return browser.getTitle()
            .then((title) => title === expectedTitle);
    }

    logoShouldBeDisplayed() { return this.header.logo.isDisplayed();}
}

module.exports = BasePage;