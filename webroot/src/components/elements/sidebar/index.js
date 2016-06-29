/*
  Sidebar
  <Sidebar />
*/

import React from 'react';
import Api from '../../../helpers/api';

var Sidebar = React.createClass({
    getInitialState: function () {
        return { widgets: [] };
    },

    componentWillMount: function () {
        var self = this;
        Api.Sidebar(self.props.slug)
            .end(function (err, res) {
                var data = res.body;
                self.setState({ widgets: data.widgets });
        });
    },


    render: function () {
        var widgets = this.state.widgets;
        if (!widgets > 0) {
            return null;
        }
        return (
                <aside id="secondary">
                {
                    widgets.map(function (widget) {
                        return <div className={widget.classname + " widget"} key={widget.id} id={widget.id} dangerouslySetInnerHTML={{__html: widget.rendered }} />
                    })
                }
                </aside>
        )
    }
});

export default Sidebar;
