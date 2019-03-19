class Header {
    constructor() {
        this.logo = element(by.css('.header__logo'));
        this.header = element(by.css('.header-ui'));
        this.headerLinks = element.all(by.css('.top-navigation__item'));
        this.searchIcon = element(by.css('.header-search__button.header__icon'));
    }
}

module.exports = Header;