module.exports.modulesDirectoryPrompt = {
  type: 'input',
  name: 'modulesDirectory',
  message: 'Tell me which directory you want to store your vuex modules',
  default: 'modules',
  when: function () {
    var modulesDirectory = this.config.get('modulesDirectory');
    return modulesDirectory === null || modulesDirectory === undefined;
  }
};

module.exports.saveModulesPromptConfiguration = function (value, config) {
  if (value) {
    config.set('modulesDirectory', value);
  }
};
