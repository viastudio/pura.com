/*
  Loop
  <Loop/>
*/
import React from 'react';

var Loop = React.createClass({

 render: function () {
    var posts = this.props.data;
        return (
            <div>
                {posts.map(function(post) {
                    function createExcerpt() { return {__html: post.excerpt.rendered}; };
                    return <div key={post.title.rendered}>
                                <h2><a href={'/blog/' + post.id}>{post.title.rendered}</a></h2>
                                <div dangerouslySetInnerHTML={createExcerpt()} />
                            </div>
                })}
            </div>
        )

    }
});

export default Loop;
