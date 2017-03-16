import helpers from 'yeoman-test';

export function runGeneratorWithPrompts(generatorPath, prompts) {
  return helpers.run(generatorPath)
  .inTmpDir()
  .withPrompts(prompts)
  .toPromise();
}
