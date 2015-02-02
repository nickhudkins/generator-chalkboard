import React from 'react/addons'
import Router from 'react-router'
import flux from 'flux'
import routes from 'routes'

Router.run(routes, Router.HistoryLocation, function(Handler){
  React.render(<Handler flux={flux} />, document.body)
});
