/*
   Loop
   <Loop/>
   */
import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import EntryMeta from '../entry-meta';

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
                                    <Link to={'/blog/' + post.slug}>{post.title.rendered}</Link>
                                </h2>
                                <EntryMeta date={post.date} slug={post.slug} firstName={post.author_meta.first_name[0]} lastName={post.author_meta.last_name[0]} nickname={post.author_meta.nickname[0]} />
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
