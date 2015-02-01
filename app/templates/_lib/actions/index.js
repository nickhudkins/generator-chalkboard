var Constants = require('Constants');

module.exports = {
  testAction: function(){
    console.log('Action Called');
    this.dispatch(Constants.ACTIONS.TEST_ACTION);
  }
};
