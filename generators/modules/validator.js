module.exports.validateModuleName = function (input) {
  var notEmpty = input && input.length > 0;

  if (!notEmpty) {
    return 'module name is required';
  }

  return true;
};
