class SearchForm {
    constructor() {
        this.searchForm = element(by.css('.recruiting-search__form.has-filters.job-search__form'));
        this.jobID = element(by.css('.recruiting-search__input.js-autocomplete'));
        this.location = element(by.css('.select2-selection.select2-selection--single'));
        this.skills = element(by.css('.multi-select-filter.validation-focus-target,job-search__departments'));
        this.findButton = element(by.css('.recruiting-search__submit'));
    }
}

module.exports = SearchForm;