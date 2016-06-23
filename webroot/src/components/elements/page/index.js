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
            <article id={'post-' + details.ID} className="container page">
                <Helmet title={details.title.rendered} />
                <header class="entry-header">
                    <h1 className="page-title">
                        {details.title.rendered}
                    </h1>
                </header>
                <div className="entry-content" dangerouslySetInnerHTML={{__html: details.content.rendered}} />
            </article>
        )
    }
});

export default Page;
