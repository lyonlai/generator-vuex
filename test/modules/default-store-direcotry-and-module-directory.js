import test from 'ava';
import assert from 'yeoman-assert';
import {runModulesWithPrompts} from './_utils';

test('Generator: Store - when store directory and module directory are not specified, use default', () => {
  return runModulesWithPrompts({
    moduleName: 'a/b/c/d'
  }).then(() => {
    assert.file([
      'index.js',
      'actions.js',
      'getters.js',
      'mutation-types.js',
      'mutations.js',
      'state.js'
    ].map(file => `src/store/modules/a/b/c/d/${file}`));
  });
});
