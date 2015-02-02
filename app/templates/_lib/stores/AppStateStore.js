import Fluxxor from 'fluxxor'
import Constants from 'Constants'

var AppStateStore = Fluxxor.createStore({

  initialize() {
    this.testState = false
    this.bindActions(
      Constants.ACTIONS.TEST_ACTION, this.toggleTestState
    )
  },

  toggleTestState() {
    this.testState = !this.testState
    this.emit('change')
  },

  getState() {
    return {
      testState: this.testState
    };
  }
});

export default AppStateStore
