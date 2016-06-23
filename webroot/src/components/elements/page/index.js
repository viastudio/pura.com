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
            <div>
                <Helmet title={details.title.rendered} />
                <h1 className="page-title">
                    {details.title.rendered}
                </h1>
                <div className="entry-content" dangerouslySetInnerHTML={{__html: details.content.rendered}} />
            </div>
        )
    }
});

export default Page;
