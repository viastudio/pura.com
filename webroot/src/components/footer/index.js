/*
  Footer
  <Footer/>
*/

import React from 'react';
import Navigation from '../elements/navigation';
import IconList from '../elements/icon-list';
import request from 'superagent';
import Address from '../elements/address';
import Api from '../../helpers/api';

var Footer = React.createClass({
    getInitialState: function () {
        return {
            social: [],
            address: {},
            contact: []
        };
    },
    componentWillMount: function () {
        var self = this;
        request
            .get(Api.url + '/wp-json/rest-functions/v1/theme-options')
            .end(function (err, res) {
                var data = res.body;
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
                var contact = [{
                        icon: "fa fa-phone",
                        title: data.data.theme_option_phone_txt_input,
                        link: 'tel:' + data.data.theme_option_phone_txt_input
                    },
                    {
                        icon: "fa fa-envelope",
                        title: data.data.theme_option_email_txt_input,
                        link: 'mailto:' + data.data.theme_option_email_txt_input

                }];
                var address = {
                    street: data.data.theme_option_street_txt_input,
                    city: data.data.theme_option_city_txt_input,
                    state: data.data.theme_option_state_txt_input,
                    zip: data.data.theme_option_zip_txt_input
                };
                self.setState({
                    social: social,
                    address: address,
                    contact: contact
                });
            });
    },

    render: function () {
        return (
             <footer id="colophon" className="site-footer" role="contentinfo">
                <div className="container">
                    <aside className="via_tag">
                        Built by VIA Studio
                    </aside>

                    <Navigation navLocation="ancillary" />
                    <Address address={this.state.address} />
                    <IconList data={this.state.social} ulClass="social" />
                    <IconList data={this.state.contact} ulClass="contact" />
                </div>
            </footer>
        )
    }
});

export default Footer;
