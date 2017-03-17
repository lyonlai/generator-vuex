import path from 'path';
import {runGeneratorWithPrompts} from '../_utils';

export const storePath = path.join(__dirname, '../../generators/app');

export function runStoreWithPrompt(prompts) {
  return runGeneratorWithPrompts(storePath, prompts);
}
