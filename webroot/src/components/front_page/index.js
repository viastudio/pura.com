/*
  FrontPage
  <FrontPage/>
*/
import React from 'react';
import Page from '../elements/page';
import Api from '../../helpers/api';

var FrontPage = React.createClass({
    getInitialState: function () {
        return { component: <div /> };
    },

    componentWillMount: function () {
        let self = this;
        Api.FrontPage().end((err, res) => {
            var data = res.body;
            self.setState({ component: <Page data={ data.data } bodyClass="index" /> });
        });
    },

    render: function () {
        return this.state.component;
    }
});

export default FrontPage;
