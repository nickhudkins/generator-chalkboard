var React = require('react/addons');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);

var HomeView = React.createClass({
  mixins: [FluxMixin],

  onClick: function(){
    this.getFlux().actions.testAction();
  },

  render: function(){
    return (
      <div className="homeView">
        <h1 onClick={this.onClick}>Hello World</h1>
      </div>
    );
  }
});

module.exports = HomeView;
