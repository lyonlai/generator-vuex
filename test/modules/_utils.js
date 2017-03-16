import path from 'path';
import {runGeneratorWithPrompts} from '../_utils';

export const modulesPath = path.join(__dirname, '../../generators/modules');

export function runModulesWithPrompts(prompts) {
  return runGeneratorWithPrompts(modulesPath, prompts);
}
