import helpers from 'yeoman-test';
import path from 'path';

const modulesPath = path.join(__dirname, '../../generators/modules');

export function runModulesWithPrompts(prompts) {
  return helpers.run(modulesPath)
  .inTmpDir()
  .withPrompts(prompts)
  .toPromise();
}
