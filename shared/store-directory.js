module.exports.storePrompt = {
  type: 'input',
  name: 'storeDirectory',
  message: 'Tell me which directory you store your vuex store configuration',
  default: 'src/store',
  when: function () {
    var storeDirectory = this.config.get('storeDirectory');

    return storeDirectory === null || storeDirectory === undefined;
  }
};

module.exports.saveStorePromptConfiguration = function (value, config) {
  if (value) {
    config.set('storeDirectory', value);
  }
};
