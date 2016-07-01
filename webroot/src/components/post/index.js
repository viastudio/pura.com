/*
  Post
  <Post/>
*/
import React from 'react';
import Page from '../elements/page';
import Api from '../../helpers/api';
import Helmet from 'react-helmet';
import Sidebar from '../elements/sidebar';
import EntryMeta from '../elements/entry-meta';

var Post = React.createClass({
    getInitialState: function () {
        return {
            data: "",
            title: "",
            content: "",
            image: ""
        };
    },

    componentWillMount: function () {
        var self = this;
        Api
            .Post(self.props.params.slug)
            .end(function (err, res) {
                var data = res.body;
                self.setState({
                    data: data,
                    title: data.title.rendered,
                    content: data.content.rendered,
                    image: data.featured_image,
                    slug: data.slug,
                    date: data.date,
                    firstName: data.author_meta.first_name[0],
                    lastName: data.author_meta.last_name[0],
                    nickname: data.author_meta.nickname[0]
                });
            });
    },

    render: function () {
        return (
            <div id="content" className="container">
                <div id="primary">
                    <Helmet title={this.state.title} />
                    <header className="entry-header">
                        <h1 className="entry-title" dangerouslySetInnerHTML={{__html: this.state.title }} />
                        <EntryMeta date={this.state.date} slug={this.state.slug} firstName={this.state.firstName} lastName={this.state.lastName} nickname={this.state.nickname} />
                    </header>
                    {this.state.image &&
                        <div className="featured-image" dangerouslySetInnerHTML={{__html: this.state.image}} />
                    }

                    <div className="entry-content" dangerouslySetInnerHTML={{__html: this.state.content }} />
                </div>
                <Sidebar slug="post-sidebar" />
            </div>
        )

    }
});

export default Post;
