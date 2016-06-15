/*
  PrimraryNav
  <PrimraryNav/>
*/

import React from 'react';
import request from 'superagent';

var PrimraryNav = React.createClass({
    getInitialState: function() {
        return { links: [] };
    },

    componentWillMount: function () {
        var self = this;
        request
            .get('http://api.pura.joel.boom/wp-json/wp-api-menus/v2/menu-locations/primary')
            .end(function(err, res) {
                var data = JSON.parse(res.text);
                self.setState({ links: data });
            });
    },


    render: function () {
        var links = this.state.links;
        return (
            <div className="nav-container">
                <div className="container">
                    <nav id="site-navigation" className="main-navigation" role="navigation">
                        <div className="menu-primary-container">
                            <ul id="menu-primary" className="menu">
                            {
                                links.map(function(link) {
                                    var childClass = link.children.length ? 'menu-item-has-children' : '';
                                    return <li key={link.ID} className={childClass}><a href={link.url}>{link.title}</a></li>
                                })
                            }
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
});

export default PrimraryNav;
