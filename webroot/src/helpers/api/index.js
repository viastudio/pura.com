/**
 * Api helper
 */

var Api = (function (parent) {
    var self = parent = parent || {};

    (function (url) {
        //TODO, eventually need to handle non-boom urls
        self.url = 'http://api.pura.' + url.hostname.split('.').splice(1).join('.');
    })(window.location);

    return self;
})(Api || {});

export default Api;
