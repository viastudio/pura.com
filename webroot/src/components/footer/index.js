/*
  Footer
  <Footer/>
*/

import React from 'react';
import Navigation from '../elements/navigation';

var Footer = React.createClass({

    render: function () {
        return (
             <footer id="colophon" className="site-footer" role="contentinfo">
                <aside className="container">
                    Built by VIA Studio
                </aside>

                <Navigation navLocation="ancillary" />
            </footer>
        )
    }
});

export default Footer;
