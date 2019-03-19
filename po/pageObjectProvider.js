let PAGE_OBJECT_MAP = {
    "careers": "./careersPage",
    "job": "./jobsPage"
};

module.exports.getPageObjects = function (pageName) {
    return require(PAGE_OBJECT_MAP[pageName]);
};