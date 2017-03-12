'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var validator = require('./validator');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Time to create a new module, shall we?'
    ));

    var prompts = [{
      type: 'input',
      name: 'storeDirectory',
      message: 'Tell me which directory you store your vuex store configuration',
      default: 'src/store',
      when: function () {
        var storeDirectory = this.config.get('storeDirectory');

        return storeDirectory === null || storeDirectory === undefined;
      }.bind(this)
    }, {
      type: 'input',
      name: 'modulesDirectory',
      message: 'Tell me which directory you want to store your vuex modules',
      default: 'modules',
      when: function () {
        var modulesDirectory = this.config.get('modulesDirectory');
        return modulesDirectory === null || modulesDirectory === undefined;
      }.bind(this)
    }, {
      type: 'input',
      name: 'moduleName',
      message: 'Please specify your module name, e.g. ' +
        chalk.yellow('tabs.store.product') +
        ' will create the module for you in ' +
        chalk.green('modules/tabs/store/product'),
      default: '',
      validate: validator.validateModuleName
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  configuring: function () {
    if (this.props.storeDirectory) {
      this.config.set('storeDirectory', this.props.storeDirectory);
    }

    if (this.props.modulesDirectory) {
      this.config.set('modulesDirectory', this.props.modulesDirectory);
    }
  },

  writing: function () {
    const modulePaths = this.props.moduleName.split('.');
    const storeDirectory = this.config.get('storeDirectory');
    const modulesDirectory = this.config.get('modulesDirectory');
    const directories = [storeDirectory, modulesDirectory].concat(modulePaths);

    [
      'index.js',
      'actions.js',
      'getters.js',
      'mutation-types.js',
      'mutations.js',
      'state.js'
    ].forEach(function (file) {
      this.fs.copy(
        this.templatePath(file),
        this.destinationPath(path.join.apply(path, directories.concat(file)))
      );
    }.bind(this));
  }
});
