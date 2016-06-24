/*
  Blog
  <Blog/>
*/
import React from 'react';
import Loop from '../elements/loop';
import Api from '../../helpers/api';

var Blog = React.createClass({
    getInitialState: function () {
        return {
            data: [],
            page: 1,
            postsPerPage: 10,
            morePosts: true
        };
    },
    componentWillMount: function () {
        let self = this;
        Api
            .Posts(self.state.page, this.state.postsPerPage)
            .end(function (err, res) {
                var data = res.body;
                self.setState({data: data});
            });
    },
    loadMore: function () {
        let self = this;
        self.state.page ++;
        Api.Posts(self.state.page, this.state.postsPerPage)
            .end(function (err, response) {
                var allPosts = self.state.data.concat(response.body);
                self.setState({
                    data: allPosts
                });
            });
    },

    render: function () {
        return (
            <div className="container">
                <header className="page-header">
                    <h1 className="page-title">Archives</h1>
                </header>
                <Loop data={ this.state.data } bodyClass="blog" />
                <button className="btn btn-primary" onClick={ this.loadMore }>Load More</button>
            </div>
        )
    }
});

export default Blog;
