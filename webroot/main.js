var React = require('react');
var ReactDOM = require('react-dom')
var request = require('superagent');

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
* FrontPage
*/
var FrontPage = React.createClass({
    componentDidMount: function () {
        request
            .get('http://api.pura.joel.boom/wp-json/wp/v2/pages/6')
            .end(function(err, res) {
                var data = JSON.parse(res.text);
                self.setState({ component: <Content data={ data } bodyClass="index" /> });
            });
    },

    render: function () {
        return (
            <p>
                FrontPages
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
        <Route path="/front-page" component={FrontPage} />
    </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
