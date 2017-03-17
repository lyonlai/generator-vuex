# generator-vuex [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Generator to easily generate the vuex states/getters/mutations/actions and/or modules for complex vuex project.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-vuex using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-vuex
```

Then generate your vuex store:

```bash
yo vuex
```

After your Vuex store has been setup. One more thing to do at the moment is to import the generated store and put it in your Vue component.

Once that's finished, you can generate Vuex module easily.

```bash
yo vuex:modules
```

Give your the name of the namespaced module you intended to create, then you will have your module automatically loaded within your store. Say good bye to the complex module hook up. Just generate it then use it in your component straight away.

## License

MIT © [Yun Lai](https://github.com/lyonlai)


[npm-image]: https://badge.fury.io/js/generator-vuex.svg
[npm-url]: https://npmjs.org/package/generator-vuex
[travis-image]: https://travis-ci.org/lyonlai/generator-vuex.svg?branch=master
[travis-url]: https://travis-ci.org/lyonlai/generator-vuex
[daviddm-image]: https://david-dm.org/lyonlai/generator-vuex.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/lyonlai/generator-vuex
[coveralls-image]: https://coveralls.io/repos/lyonlai/generator-vuex/badge.svg
[coveralls-url]: https://coveralls.io/r/lyonlai/generator-vuex
