'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('chalkboard:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({
        appName: 'testApp'
      })
      .on('end', done)
  })

  it('creates config files', function () {
    assert.file([
      '.editorconfig',
      '.jshintrc',
      'package.json',
      'webpack.config.dev.js',
      'webpack.config.prod.js'
    ])
  })

  it('creates app files & directories', function(){
    assert.file([
      'index.html',
      'client/entry.jsx',
      'client/flux.js',
      'lib/Constants.js',
      'lib/actions/index.js',
      'lib/routes/index.jsx',
      'lib/stores/index.js',
      'lib/stores/AppStateStore.js',
      'lib/views/Application.jsx',
      'lib/views/Home/Handler.jsx'
    ])
  })


})
