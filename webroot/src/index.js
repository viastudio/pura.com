var React = require('react');
var ReactDOM = require('react-dom');
var request = require('superagent');

var ReactRouter = require('react-router');
var Router  = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Navigation = ReactRouter.Navigation;
var createBrowserHistory = require('history/lib/createBrowserHistory');

import Header from './components/header';
import Footer from './components/footer';
import FrontPage from './components/front_page';
import Blog from './components/blog';

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
* Routes
*/
var routes = (
    <Router history={createBrowserHistory()}>
        <Route path="/" component={App}>
            <IndexRoute component={FrontPage} />
            <Route path="/blog" component={Blog} />
        </Route>
    </Router>
)

ReactDOM.render(routes, document.querySelector('#main'));
