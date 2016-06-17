/*
   Loop
   <Loop/>
   */
import React from 'react';
import { Link } from 'react-router';

var Loop = React.createClass({

    render: function () {
        var posts = this.props.data;
        return (
            <div>
                {posts.map(function (post) {
                    function createExcerpt() {
                        return {__html: post.excerpt.rendered};
                    };
                    return <div key={post.title.rendered}>
                        <h2><Link to={'/blog/' + post.id}>{post.title.rendered}</Link></h2>
                        <div dangerouslySetInnerHTML={createExcerpt()} />
                    </div>
                })}
            </div>
        )
    }
});

export default Loop;
