/*
  FrontPage
  <FrontPage/>
*/
import React from 'react';
import request from 'superagent';
import Page from '../elements/page';

var FrontPage = React.createClass({
    getInitialState: function() {
        return { component: <div /> };
    },

    componentWillMount: function () {
        var self = this;
        console.log(self);
        request
            .get('http://api.pura.joel.boom/wp-json/wp/v2/pages/6')
            .end(function(err, res) {
                var data = JSON.parse(res.text);

                self.setState({ component: <Page data={ data } bodyClass="index" /> });
            });
    },

    render: function () {
        return this.state.component;
    }
});

export default FrontPage;
