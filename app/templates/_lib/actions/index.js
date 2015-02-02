import Constants from 'Constants'

export default {
  testAction: function(){
    console.log('Action Called')
    this.dispatch(Constants.ACTIONS.TEST_ACTION)
  }
}
