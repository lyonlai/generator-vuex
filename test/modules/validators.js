import test from 'ava';
import path from 'path';
import {modulesPath} from './_utils';
const validateModuleName = require(`${modulesPath}/validator`).validateModuleName;

test('validateModuleName should return error message on empty message', t => {
  [
    '',
    null,
    undefined
  ].forEach(input => t.is(validateModuleName(input), 'module name is required'));
});

test('validateModuleName should passeven string contains path separator', t => {
  const pathWithSeparator = ['a', 'b', 'c'].join(path.sep);

  t.true(validateModuleName(pathWithSeparator));
});

test('a valid path separated with dot will pass the test', t => {
  t.true(validateModuleName('i.am.a.valid.path'));
});

test('a valid path with no dot will still pass ', t => {
  t.true(validateModuleName('iAmAValidPath'));
});
