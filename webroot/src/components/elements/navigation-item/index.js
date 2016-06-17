/*
  NavigationItem
  <NavigationItem />
*/

import React from 'react';
import { Link } from 'react-router';

var NavigationItem = React.createClass({

    render: function () {
        return (
            <li key={this.props.ID}>
                <Link to={this.props.url}>{this.props.title}</Link>
            </li>
        )
    }
});

export default NavigationItem;
