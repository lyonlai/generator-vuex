'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var validator = require('./validator');
var storePrompt = require('../../shared/store-directory').storePrompt;
var modulesPrompt = require('../../shared/modules-directory').modulesDirectoryPrompt;
var saveStorePromptConfiguration = require('../../shared/store-directory').saveStorePromptConfiguration;
var saveModulesPromptConfiguration = require('../../shared/modules-directory').saveModulesPromptConfiguration;
var bindPrompts = require('../../shared/utils').bindPrompts;

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Time to create a new module, shall we?'
    ));

    var sharedPrompts = [
      storePrompt, modulesPrompt
    ];

    bindPrompts(sharedPrompts, this);

    var prompts = sharedPrompts.concat([{
      type: 'input',
      name: 'moduleName',
      message: 'Please specify your module name as you will do in mapGetters, e.g. ' +
        chalk.green('tabs/store/product') +
        ' will create the module for you in ' +
        chalk.green('modules/tabs/store/product'),
      default: '',
      validate: validator.validateModuleName
    }]);

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  configuring: function () {
    saveStorePromptConfiguration(this.props.storeDirectory, this.config);

    saveModulesPromptConfiguration(this.props.modulesDirectory, this.config);
  },

  writing: function () {
    const modulePaths = this.props.moduleName.split('/');
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
