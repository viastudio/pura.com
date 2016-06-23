import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Navigation, browserHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import request from 'superagent';
import Header from './components/header';
import Footer from './components/footer';
import FrontPage from './components/front_page';
import Blog from './components/blog';
import AbstractPage from './components/abstract_page';
import Api from './helpers/api';
import Helmet from "react-helmet";

/*
* App
*/
var App = React.createClass({
    getInitialState() {
        return {
            menu: false,
            bloginfo: []
        };
    },
    toggleMenu(e) {
        this.setState({
            menu: !this.state.menu
        });
    },
    componentDidMount() {
        var self = this;
        request
            .get(Api.url + '/wp-json/rest-functions/v1/bloginfo/')
            .end(function (err, res) {
                var data = JSON.parse(res.text);
                self.setState({ bloginfo: data.data});
            });
    },
    render: function () {
        return (
            <div id="page" className={this.state.menu ? 'menu-active' : ''} onChange={this.toggleMenu}>
                <Helmet
                    titleTemplate={this.state.bloginfo.name + " | %s"}
                />
                <Header menuTransform={this.toggleMenu} bloginfo={this.state.bloginfo} />
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
            <Route path="/:page_slug" component={AbstractPage} />
        </Route>
    </Router>
)

ReactDOM.render(routes, document.querySelector('.body-wrap'));
