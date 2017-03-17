'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var storePrompt = require('../../shared/store-directory').storePrompt;
var modulesPrompt = require('../../shared/modules-directory').modulesDirectoryPrompt;
var saveStorePromptConfiguration = require('../../shared/store-directory').saveStorePromptConfiguration;
var saveModulesPromptConfiguration = require('../../shared/modules-directory').saveModulesPromptConfiguration;
var bindPrompts = require('../../shared/utils').bindPrompts;

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the pioneering ' + chalk.red('vuex') + ' generator!'
    ));

    var sharedPrompts = [
      storePrompt, modulesPrompt
    ];

    bindPrompts(sharedPrompts, this);

    var prompts = sharedPrompts.concat([]);

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
    const storeDirectory = this.config.get('storeDirectory');
    const modulesDirectory = this.config.get('modulesDirectory');
    console.log('directories: ', storeDirectory, modulesDirectory);
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
        this.destinationPath(path.join.apply(path, [storeDirectory].concat(file)))
      );
    }.bind(this));
    var emptyFile = '.gitkeep';
    this.fs.copy(
      this.templatePath(emptyFile),
      this.destinationPath(path.join(storeDirectory, modulesDirectory, emptyFile))
    );
  },

  install: function () {
    this.yarnInstall(['vuex', 'vuex-module-configuration-composer']);
  }
});
