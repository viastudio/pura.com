/*
    AbstractPage - used to match pages in menu
    <AbstractPage />

*/
import React from 'react';
import request from 'superagent';
import Api from '../../helpers/api';
import Page from '../elements/page';

var AbstractPage = React.createClass({
    getInitialState: function () {
        return { component: <div /> };
    },
    componentWillMount: function () {
        var self = this;
        var page_slug = self.props.params.page_slug;
        request
            .get(Api.url + '/wp-json/rest-functions/v1/pages/' + page_slug)
            .end(function (err, res) {
                var data = JSON.parse(res.text);
                self.setState({ component: <Page data={ data } bodyClass="single-page" />});
            });
    },

    render: function () {
        return this.state.component;
    }
});

export default AbstractPage;