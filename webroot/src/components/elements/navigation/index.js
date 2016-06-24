/*
  Navigation
  <Navigation />
*/

import React from 'react';
import Api from '../../../helpers/api';
import request from 'superagent';
import NavigationItem from '../navigation-item';

var Navigation = React.createClass({
    getInitialState: function () {
        return { links: [] };
    },

    componentWillMount: function () {
        var self = this;
        Api.Menu(self.props.navLocation)
            .end(function (err, res) {
                var data = res.body;
                self.setState({ links: data });
        });
    },


    render: function () {
        var links = this.state.links;
        var location = this.props.navLocation;
        return (
                <ul id="menu-primary" className={location}>
                {
                    links.map(function (link) {
                        return <NavigationItem key={link.ID} url={link.url} title={link.title} children={link.children}/>
                    })
                }
                </ul>
        )
    }
});

export default Navigation;
