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
        request
            .get(Api.url + '/wp-json/wp-api-menus/v2/menu-locations/' + self.props.navLocation)
            .end(function (err, res) {
                var data = JSON.parse(res.text);
                self.setState({ links: data });
            });
    },


    render: function () {
        var links = this.state.links;
        var location = this.props.navLocation;
        return (
                    <nav role="navigation" className={location}>
                        <ul id="menu-primary" className="menu">
                        {
                            links.map(function (link) {
                                return <NavigationItem key={link.ID} url={link.url} title={link.title} />
                            })
                        }
                        </ul>
                    </nav>
        )
    }
});

export default Navigation;
