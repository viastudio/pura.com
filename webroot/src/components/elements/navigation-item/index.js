/*
  NavigationItem
  <NavigationItem />
*/

import React from 'react';
import { Link } from 'react-router';

var NavigationItem = React.createClass({
    getInitialState: function () {
        return {
            children: [],
            url: '',
            title: ''
        };
    },

    buildChildren: (children) => {
        if (children.length) {
            return (
                <ul className="sub-menu">
                {
                    children.map(child => {
                        return <NavigationItem key={child.ID} url={child.url} title={child.title} children={child.children} />
                    })
                }
                </ul>
            );
        } else {
            return false;
        }
    },

    render: function () {
        return (
            <li key={this.props.ID}>
                <Link to={this.props.url}>{this.props.title}</Link>
                { this.buildChildren (this.props.children) }
            </li>
        )
    }
});

export default NavigationItem;
