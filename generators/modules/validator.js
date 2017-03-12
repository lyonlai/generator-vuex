var path = require('path');

module.exports.validateModuleName = function (input) {
  var notEmpty = input && input.length > 0;

  if (!notEmpty) {
    return 'module name is required';
  }

  var containsSeparator = input.indexOf(path.sep) >= 0;

  if (containsSeparator) {
    return 'module name contains path separator: ' + path.sep;
  }

  return true;
};
