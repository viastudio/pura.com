/**
 * Api helper
 */
import request from 'superagent';

var Api = (function (parent) {
    var self = parent = parent || {};
    var menus = '/wp-json/wp-api-menus/v2/menu-locations/';
    var pages = '/wp-json/rest-functions/v1/pages/';
    var posts = '/wp-json/wp/v2/posts/';
    var post = '/wp-json/rest-functions/v1/posts/';
    var frontPage = '/wp-json/rest-functions/v1/homepage';
    var themeOptions = '/wp-json/rest-functions/v1/theme-options';
    var blogInfo = '/wp-json/rest-functions/v1/bloginfo/';
    var sidebars = '/wp-json/wp-rest-api-sidebars/v1/sidebars/';
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

    self.Post = function (slug) {
        return request.get(self.url + post + slug)
    };

    self.Posts = function (page, per_page) {
        return request.get(self.url + posts + '?page=' + page + '&per_page=' + per_page);
    };

    self.ThemeOptions = () => {
        return request.get(self.url + themeOptions);
    };

    self.BlogInfo = () => {
        return request.get(self.url + blogInfo);
    };

    self.Sidebar = (slug) => {
        return request.get(self.url + sidebars + slug);
    };

    return self;
})(Api || {});

export default Api;
