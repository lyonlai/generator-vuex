'use strict';
import test from 'ava';
import path from 'path';
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';

test.before(() => {
  return helpers.run(path.join(__dirname, '../generators/app'))
    .withPrompts({someAnswer: true})
    .toPromise();
});

test('application should create file', () => {
  assert.file([
    'dummyfile.txt'
  ]);
});
