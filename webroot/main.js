var React = require('react');
var ReactDOM = require('react-dom')

var ReactRouter = require('react-router');
var Router  = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var createBrowserHistory = require('history/lib/createBrowserHistory');

/*
* Header
*/
var Header = React.createClass({

    render: function () {
        return (
            <header id="masthead" class="site-header" role="banner">
                <div class="container">
                    <nav class="menu-nav">
                        <button type="button" class="menu-button" href="#"><span class="sr-only">Open Menu</span><i class="fa fa-bars"></i></button>
                    </nav>
                    <div class="site-branding">
                        <h1 class="site-title"><a href="/" rel="home">api.pura.com</a></h1>
                    </div>
                </div>
            </header>
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
        <Route path="/" component={Header} />
        <Route path="/foo" component={Foo} />

    </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));