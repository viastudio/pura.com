/*
  Address
  <Address/>
*/

import React from 'react';
import { Link } from 'react-router';

var Address = React.createClass({
    render: function () {
        return (
            <ul>
                <li>{this.props.address.street}</li>
                <li>{this.props.address.city}, {this.props.address.state} {this.props.address.zip}</li>
            </ul>
        )
    }
});

export default Address;
