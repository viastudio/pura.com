/*
  Post
  <Post/>
*/
import React from 'react';
import Page from '../elements/page';
import Api from '../../helpers/api';
import Helmet from 'react-helmet';

var Post = React.createClass({
    getInitialState: function () {
        return {
            data: "",
            title: "",
            content: ""
        }
    },

    componentWillMount: function () {
        var self = this;
        Api
            .Post(self.props.params.id)
            .end(function (err, res) {
                var data = res.body;
                self.setState({
                    data: data,
                    title: data.title.rendered,
                    content: data.content.rendered
                })
            });
    },

    render: function () {
        return (
            <div className="container">
                <Helmet title={this.state.title} />
                <header className="entry-header">
                    <h1 className="entry-title">{this.state.title}</h1>
                </header>
                <div className="entry-content" dangerouslySetInnerHTML={{__html: this.state.content }} />
            </div>
        )

    }
});

export default Post;
