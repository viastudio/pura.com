/*
  Social
  <Social/>
*/

import React from 'react';
import request from 'superagent';
import { Link } from 'react-router';

var Social = React.createClass({
    getInitialState: function () {
        return { social: [] };
    },
    componentWillMount: function () {
        //TODO: env. detection
        var self = this;
        request
            .get('http://api.pura.natalie.boom/wp-json/rest-functions/v1/theme-options')
            .end(function (err, res) {
                var data = JSON.parse(res.text);
                var social = [{
                        title: 'Facebook',
                        icon: 'fa fa-facebook',
                        link: data.data.theme_option_facebook_txt_input
                    },
                    {
                        title: 'YouTube',
                        icon: 'fa fa-youtube-play',
                        link: data.data.theme_option_youtube_txt_input
                    },
                    {
                        title: 'Google Plus',
                        icon: 'fa fa-google-plus',
                        link: data.data.theme_option_googleplus_txt_input
                    },
                    {
                        title: 'Twitter',
                        icon: 'fa fa-twitter',
                        link: data.data.theme_option_twitter_txt_input
                    },
                    {
                        title: 'Instagram',
                        icon: 'fa fa-instagram',
                        link: data.data.theme_option_instagram_txt_input
                    },
                    {
                        title: 'LinkedIn',
                        icon: 'fa fa-linkedin',
                        link: data.data.theme_option_linkedin_txt_input
                    }

                ];
                self.setState({ social: social});
            });
    },
    render: function () {
        var links = this.state.social.filter(function (item, i) {
            return item.link;
        });
        return (
            <ul>
                {
                    links.map(function (link) {
                        return <li key={link.title}>
                                    <Link to={link.link} target="_blank" rel="external">
                                        <i className={link.icon}></i>
                                        <span className="sr-only">{link.title}</span>
                                    </Link>
                                </li>
                    })
                }
            </ul>
        )
    }
});

export default Social;
