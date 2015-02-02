import React from 'react/addons'
import {Route, DefaultRoute} from 'react-router'
import Application from 'views/Application'
import Home from 'views/Home/Handler'

var routes = (
  <Route name="app" handler={Application} path="/">
    <DefaultRoute name="Home" handler={Home} />
  </Route>
);

export default routes
