/*
  NavigationItem
  <NavigationItem />
*/

import React from 'react';

var NavigationItem = React.createClass({

    render: function () {
        return (
                <li key={this.props.ID}><a href={this.props.url}>{this.props.title}</a></li>
        )
    }
});

export default NavigationItem;
