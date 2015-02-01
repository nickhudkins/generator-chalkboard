var Fluxxor = require('fluxxor');
var stores  = require('stores'),
    actions = require('actions');

module.exports = new Fluxxor.Flux(stores, actions);
