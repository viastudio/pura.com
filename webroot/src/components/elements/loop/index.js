/*
   Loop
   <Loop/>
   */
import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

var Loop = React.createClass({

    render: function () {
        var posts = this.props.data;
        return (
            <div>
                <Helmet title="Blog" />
                {posts.map(function (post) {
                    function createExcerpt() {
                        return {__html: post.excerpt.rendered};
                    };
                    return (
                        <article id={'post-' + post.id} key={post.title.rendered} className="archive-article">
                            <header className="entry-header">
                                <h2 className="entry-title">
                                    <Link to={'/blog/' + post.id}>{post.title.rendered}</Link>
                                </h2>
                            </header>
                            <div className="entry-summary">
                                <div dangerouslySetInnerHTML={createExcerpt()} />
                            </div>
                        </article>
                    )
                })}
            </div>
        )
    }
});

export default Loop;
