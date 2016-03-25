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
                console.log(data);
                // console.log(data);
                self.setState({ links: data });
            });
    },


    render: function () {
        var links = this.state.links;
        return (
            <nav>
                <ul>
                {
                    links.map(function(link) {
                        return <li key={link.ID}><a href={link.url}>{link.title}</a></li>
                    })
                }
                </ul>
            </nav>
        )
    }
});

export default PrimraryNav;
