import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Navigation, browserHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import request from 'superagent';
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
                <ReactCSSTransitionGroup
                    component="main"
                    className="page-wrap"
                    transitionName="main"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                >
                    {React.cloneElement(this.props.children, {
                        key: location.pathname
                    })}
                </ReactCSSTransitionGroup>
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
