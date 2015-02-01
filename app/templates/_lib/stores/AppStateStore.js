var Fluxxor = require('fluxxor');
var Constants = require('Constants');

var AppStateStore = Fluxxor.createStore({
  initialize: function (){
    this.testState = false;
    this.bindActions(
      Constants.ACTIONS.TEST_ACTION, this.toggleTestState
    );
  },

  toggleTestState: function(){
    this.testState = !this.testState;
    this.emit('change');
  },

  getState: function (){
    return {
      testState: this.testState
    };
  }
});

module.exports = AppStateStore;
