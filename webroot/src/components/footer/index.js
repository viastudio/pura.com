/*
  Footer
  <Footer/>
*/

import React from 'react';
import Navigation from '../elements/navigation';
import Social from '../elements/social';

var Footer = React.createClass({

    render: function () {
        return (
             <footer id="colophon" className="site-footer" role="contentinfo">
                <div className="container">
                    <aside className="via_tag">
                        Built by VIA Studio
                    </aside>

                    <Navigation navLocation="ancillary" />
                    <Social />
                </div>
            </footer>
        )
    }
});

export default Footer;
