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
      'package.json',
      '.editorconfig',
      'webpack.config.dev.js',
      'webpack.config.prod.js',
      '.jshintrc'
    ])
  })
  it('creates app files & directories', function(){
    assert.file([
      'index.html'
    ])
    assert.file([
      'client/entry.jsx',
      'client/flux.js'
    ])
  })
})
