import React from 'react/addons'
import Fluxxor from 'fluxxor'

var FluxMixin = Fluxxor.FluxMixin(React)

var HomeView = React.createClass({
  mixins: [FluxMixin],

  onClick() {
    this.getFlux().actions.testAction()
  },

  render() {
    return (
      <div className="homeView">
        <h1 onClick={this.onClick}>Hello DUDE</h1>
      </div>
    )
  }
})

export default HomeView
