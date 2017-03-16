import test from 'ava';
import assert from 'yeoman-assert';
import {runStoreWithPrompt} from './_utils';

test('Generator: Store - modules should create modules within specified directory', () => {
  return runStoreWithPrompt({
    storeDirectory: 'client/store',
    modulesDirectory: 'my-modules'
  }).then(() => {
    assert.file([
      'index.js',
      'actions.js',
      'getters.js',
      'mutation-types.js',
      'mutations.js',
      'state.js'
    ].map(file => `client/store/${file}`));

    assert.file('client/store/my-modules/.gitkeep');
  });
});
