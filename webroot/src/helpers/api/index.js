/**
 * Api helper
 */
import request from 'superagent';

var Api = (function (parent) {
    var self = parent = parent || {};
    var menus = '/wp-json/wp-api-menus/v2/menu-locations/';
    var pages = '/wp-json/rest-functions/v1/pages/';
    var posts = '/wp-json/wp/v2/posts/';
    var frontPage = '/wp-json/rest-functions/v1/homepage';
    self.url = 'http://api.pura.' + window.location.hostname.split('.').splice(1).join('.');

    self.Menu = function (location) {
        return request.get(self.url + menus + location);
    };

    self.Page = function (slug) {
        return request.get(self.url + pages + slug);
    };

    self.FrontPage = () => {
        return request.get(self.url + frontPage);
    };

    self.Post = function (id) {
        return request.get(self.url + posts + id)
    };

    self.Posts = function () {
        return request.get(self.url + posts);
    };

    return self;
})(Api || {});

export default Api;
