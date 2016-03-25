var React = require('react');
var ReactDOM = require('react-dom')

var ReactRouter = require('react-router');
var Router  = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var createBrowserHistory = require('history/lib/createBrowserHistory');


/*
* App
*/
var App = React.createClass({

    render: function () {
        return (
            <div className="page">
                <Header />
                <Footer />
            </div>
        )
    }
});

/*
* Header
*/
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

/*
* Footer
*/
var Footer = React.createClass({

    render: function () {
        return (
             <footer id="colophon" className="site-footer" role="contentinfo">
                <div className="container">
                    Built by VIA Studio
                </div>
            </footer>
        )
    }
});

/*
* Foo
*/
var Foo = React.createClass({

    render: function () {
        return (
            <p>
                Bar
            </p>
        )
    }
});

/*
* Routes
*/
var routes = (
    <Router history={createBrowserHistory()}>
        <Route path="/" component={App} />
        <Route path="/foo" component={Foo} />

    </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
