/*
  Blog
  <Blog/>
*/
import React from 'react';
import Loop from '../elements/loop';
import Api from '../../helpers/api';

var Blog = React.createClass({
    getInitialState: function () {
        return { data: [] };
    },
    componentWillMount: function () {
        var self = this;
        Api
            .Posts()
            .end(function (err, res) {
                var data = JSON.parse(res.text);

                self.setState({data: data});
            });
    },

    render: function () {
        return (
            <div className="container">
                <header className="page-header">
                    <h1 className="page-title">Archives</h1>
                </header>
                <Loop data={ this.state.data } bodyClass="blog" />
            </div>
        )
    }
});

export default Blog;
