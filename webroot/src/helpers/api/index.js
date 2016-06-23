/**
 * Api helper
 */
import request from 'superagent';

var Api = (function (parent) {
    var self = parent = parent || {};
    var menus = '/wp-json/wp-api-menus/v2/menu-locations/';
    var pages = '/wp-json/rest-functions/v1/pages/';
    var posts = '/wp-json/wp/v2/posts';

    (function (url) {
        self.url = 'http://api.pura.' + url.hostname.split('.').splice(1).join('.');
    })(window.location);

    self.Menu = function (location) {
        return (
            request.get(self.url + menus + location)
        )
    }
    self.Page = function (slug) {
        return (
            request.get(self.url + pages + slug)
        )
    }

    self.Posts = function () {
        return (
            request.get(self.url + posts)
        )
    }

    return self;
})(Api || {});

export default Api;
