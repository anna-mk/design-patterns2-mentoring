class Footer {
    constructor() {
        this.footer = element(by.css('.footer__container'));
        this.footerLinks = element.all(by.css('.footer__links'));
        this.copyright = element(by.css('.footer__copyright'));
    }
}

module.exports = Footer;