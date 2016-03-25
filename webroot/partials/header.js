/*
  Header
  <Header/>
*/

import React from 'react';

var Header = React.createClass({

    render: function () {
        return (
            <header id="masthead" className="site-header" role="banner">
                <div className="container">
                    <nav className="menu-nav">
                        <button type="button" className="menu-button" href="#"><span className="sr-only">Open Menu</span><i className="fa fa-bars"></i></button>
                    </nav>
                    <div className="site-branding">
                        <h1 className="site-title"><a href="/" rel="home">api.pura.com</a></h1>
                    </div>
                </div>
            </header>
        )
    }
});

export default Header;
