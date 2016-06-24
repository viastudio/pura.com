/*
  Header
  <Header/>
*/

import React from 'react';
import Navigation from '../elements/navigation';
import { Link } from 'react-router';

var Header = React.createClass({
    render: function () {
        return (
            <header id="masthead" className="site-header" role="banner">
                <div className="container">
                    <nav className="menu-nav">
                        <button type="button" className="menu-button" href="#" onClick={this.props.menuTransform}><span className="sr-only">Open Menu</span><i className="fa fa-bars"></i></button>
                    </nav>
                    <div className="site-branding">
                        <h1 className="site-title"><Link to="/" rel="home">{this.props.bloginfo.name}</Link></h1>
                    </div>
                </div>
                <div className="nav-container">
                    <div className="container">
                        <div className="nav-controls">
                            <button type="button" className="menu-button menu-close" onClick={this.props.menuTransform} href="#"><span className="sr-only">Close Menu</span><i className="fa fa-times"></i></button>
                        </div>
                        <nav id="site-navigation" className="main-navigation" role="navigation">
                            <Navigation navId="menu-primary" navLocation="primary"/>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
});

export default Header;
