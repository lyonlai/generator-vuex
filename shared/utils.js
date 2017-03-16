module.exports.bindPrompts = function (prompts, target) {
  prompts.forEach(function (prompt) {
    Object.keys(prompt).forEach(function (key) {
      if (typeof prompt[key] === 'function') {
        prompt[key] = prompt[key].bind(target);
      }
    });
  });
};
