var React = require('react/addons');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var Application = require('views/Application');
var Home = require('views/Home/Handler');



var routes = (
  <Route name="app" handler={Application} path="/">
    <DefaultRoute name="Home" handler={Home} />
  </Route>
);

module.exports = routes;
