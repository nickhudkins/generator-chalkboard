var React = require('react/addons');

var ReactRouter = require('react-router');
var RouteHandler = ReactRouter.RouteHandler;

var Application = React.createClass({
  render: function(){
    return (
      <div className="application">
        <RouteHandler {...this.props} />
      </div>
    );
  }
});

module.exports = Application;
