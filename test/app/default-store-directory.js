import test from 'ava';
import assert from 'yeoman-assert';
import {runStoreWithPrompt} from './_utils';

test('Generator: Store - when store directory and module directory are not specified, use default', () => {
  return runStoreWithPrompt({}).then(() => {
    assert.file([
      'index.js',
      'actions.js',
      'getters.js',
      'mutation-types.js',
      'mutations.js',
      'state.js'
    ].map(file => `src/store/${file}`));

    assert.file('src/store/modules/.gitkeep');
  });
});
