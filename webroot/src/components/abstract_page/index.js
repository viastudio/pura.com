/*
    AbstractPage - used to match pages in menu
    <AbstractPage />

*/
import React from 'react';
import Api from '../../helpers/api';
import Page from '../elements/page';

var AbstractPage = React.createClass({
    getInitialState: function () {
        return { component: <div /> };
    },
    componentWillMount: function () {
        var self = this;
        var page_slug = self.props.params.page_slug;
        Api
            .Page(page_slug)
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
