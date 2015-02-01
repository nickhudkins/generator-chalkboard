'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the awesome' + chalk.red('Chalkboard') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'appName',
      message: 'Your project name',
      default: this.appname
    }];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {

      this.fs.copy(
        this.templatePath('_client'),
        this.destinationPath('client')
      );
      this.fs.copy(
        this.templatePath('_lib'),
        this.destinationPath('lib')
      );

      this.fs.copy(
        this.templatePath('index.html'),
        this.destinationPath('index.html')
      );

      var configFiles = ['_webpack.config.dev.js', '_webpack.config.prod.js'];
      var _this = this;
      configFiles.map(function(configFile){
        _this.fs.copy(
          _this.templatePath(configFile),
          _this.destinationPath(configFile.slice(1))
        );
      });

      this.template('_package.json', 'package.json', {name:this.appName});
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install'],
      bower: false
    });
  }
});
