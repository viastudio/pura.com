/*
  IconList
  <IconList/>
*/

import React from 'react';
import { Link } from 'react-router';

var IconList = React.createClass({
    render: function () {
        var links = this.props.data.filter(function (item, i) {
            return item.link;
        });
        return (
            <ul className={this.props.ulClass}>
                {
                    links.map(function (link) {
                        return <li key={link.title}>
                                    <Link to={link.link} target="_blank" rel="external">
                                        <i className={link.icon}></i>
                                        <span> {link.title}</span>
                                    </Link>
                                </li>
                    })
                }
            </ul>
        )
    }
});

export default IconList;
