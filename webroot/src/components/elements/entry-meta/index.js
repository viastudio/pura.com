/*
  NavigationItem
  <NavigationItem />
*/

import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

var EntryMeta = React.createClass({
    getDefaultProps: function () {
        return {
            date: '',
            slug: '',
            firstName: '',
            lastName: '',
            nickname: ''
        };
    },

    render: function () {
        var author = this.props.nickname;
        if (this.props.firstName.length && this.props.lastName.length) {
            author = this.props.firstName + ' ' + this.props.lastName;
        }

        return (
            <div className="entry-meta">
                <span className="posted-on">
                    Posted on <time className="updated" datetime={this.props.date}><Link to={'/blog/' + this.props.slug}>{moment(this.props.date, moment.ISO_8601).format('MMMM DD, YYYY')}</Link></time>
                </span>
                <span className="byline"> by <span className="author vcard"><Link to={'/author/' + this.props.nickname}>{author}</Link></span>
                </span>
            </div>
        );
    }
});

export default EntryMeta;
