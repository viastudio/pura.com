/*
  Page
  <Page/>
*/
import React from 'react';
import Helmet from 'react-helmet';

var Page = React.createClass({

    render: function () {
        var details = this.props.data;
        if (details.title === undefined) {
            details = details.data;
        }
        return (
            <article id={'post-' + details.id} className="container page">
                <Helmet title={details.title.rendered} />
                <header className="entry-header">
                    <h1 className="page-title">
                        {details.title.rendered}
                    </h1>
                </header>
                {details.featured_image &&
                    <div className="featured-image" dangerouslySetInnerHTML={{__html: details.featured_image}} />
                }

                <div className="entry-content" dangerouslySetInnerHTML={{__html: details.content.rendered}} />
            </article>
        )
    }
});

export default Page;
