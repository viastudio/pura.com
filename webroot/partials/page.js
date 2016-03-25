/*
  Page
  <Page/>
*/
import React from 'react';

var Page = React.createClass({

 render: function () {
    var details = this.props.data;
    if (details) {

     return (
        <div>
         <h1 className="page-title">
            {details.title.rendered}
         </h1>
         <div className="entry-content" dangerouslySetInnerHTML={{__html: details.content.rendered}} />
        </div>
     )
    }

    return (
        <div />
    )
 }
});

export default Page;