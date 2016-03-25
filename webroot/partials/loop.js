/*
  Loop
  <Loop/>
*/
import React from 'react';

var Loop = React.createClass({

 render: function () {
    var posts = this.props.data;
    console.log(posts);
    if (posts) {

     return (
        <div>
         posts go here
        </div>
     )
    }

    return (
        <div />
    )
 }
});

export default Loop;