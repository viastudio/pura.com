import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';
import { Router, Route, IndexRoute, Navigation, browserHistory } from 'react-router';
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
            <div id="page">
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
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={FrontPage} />
            <Route path="/blog" component={Blog} />
        </Route>
    </Router>
)

ReactDOM.render(routes, document.querySelector('.body-wrap'));
