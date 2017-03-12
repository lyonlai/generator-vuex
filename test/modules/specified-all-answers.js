import test from 'ava';
import assert from 'yeoman-assert';
import {runModulesWithPrompts} from './_utils';

test('modules should create modules within specified directory', () => {
  return runModulesWithPrompts({
    storeDirectory: 'client/store',
    modulesDirectory: 'my-modules',
    moduleName: 'tabs.store.product'
  }).then(() => {
    assert.file([
      'index.js',
      'actions.js',
      'getters.js',
      'mutation-types.js',
      'mutations.js',
      'state.js'
    ].map(file => `client/store/my-modules/tabs/store/product/${file}`));
  });
});
