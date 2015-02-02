import React from 'react/addons'
import {RouteHandler} from 'react-router'

var Application = React.createClass({
  render() {
    return (
      <div className="application">
        <RouteHandler {...this.props} />
      </div>
    );
  }
});

export default Application
