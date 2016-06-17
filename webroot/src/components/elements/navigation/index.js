/*
  Navigation
  <Navigation />
*/

import React from 'react';
import request from 'superagent';

var Navigation = React.createClass({
    getInitialState: function() {
        return { links: [] };
    },

    componentWillMount: function () {
        //TODO: env. detection
        var self = this;
        request
            .get('http://api.pura.natalie.boom/wp-json/wp-api-menus/v2/menu-locations/' + self.props.navLocation)
            .end(function(err, res) {
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
                            links.map(function(link) {
                                var childClass = link.children.length ? 'menu-item-has-children' : '';
                                return <li key={link.ID} className={childClass}><a href={link.url}>{link.title}</a></li>
                            })
                        }
                        </ul>
                    </nav>
        )
    }
});

export default Navigation;
