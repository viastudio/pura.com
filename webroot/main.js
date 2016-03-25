var React = require('react');
var ReactDOM = require('react-dom');
var request = require('superagent');

var ReactRouter = require('react-router');
var Router  = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Navigation = ReactRouter.Navigation;
var createBrowserHistory = require('history/lib/createBrowserHistory');

import Header from './partials/header';
import Footer from './partials/footer';
import FrontPage from './partials/front-page';

/*
* App
*/
var App = React.createClass({

    render: function () {
        return (
            <div className="page">
                <Header />
                <main>
                    {this.props.children}
                </main>
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
        <Route path="/" component={App}>
            <IndexRoute component={FrontPage} />
            <Route path="/foo" component={Foo}  />
        </Route>
    </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
