/*
  Blog
  <Blog/>
*/
import React from 'react';
import request from 'superagent';
import Loop from './loop';

var Blog = React.createClass({
 componentWillMount: function () {
    var self = this;
    // console.log(self);
     request
         .get('http://api.pura.joel.boom/wp-json/wp/v2/posts')
         .end(function(err, res) {
             var data = JSON.parse(res.text);

             self.setState({ component: <Loop data={ data } bodyClass="blog" /> });
         });
 },

 render: function () {
    if (this.state) {
        return this.state.component;
    }
    return <div />
 }
});

export default Blog;