var React = require('react');
var ReactDOM = require('react-dom');
var request = require('superagent');

var ReactRouter = require('react-router');
var Router  = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var createBrowserHistory = require('history/lib/createBrowserHistory');

import Header from './partials/header';
import Footer from './partials/footer';

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
        <Route path="/front-page" component={FrontPage} />
    </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
