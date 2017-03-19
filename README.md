# generator-vuex [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Generator to easily generate the vuex states/getters/mutations/actions and/or modules for complex vuex project.

Vuex modules is a lovely feature in Vuex compare to Redux. But setting up a namespaced module in vuex requires quite creating the scaffolding code of the module and hooking up with the store configuration. The aim of this module is to free you from the this repetitive work and boost your productivity.

Generator-vuex at the moment works with webpack configured Vue application.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-vuex using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-vuex
```

## Usage

### Vuex Store

Then setup your vuex store via the following command:

```bash
yo vuex
```

The generator will ask you the relative location of putting your store and place to store your modules. Fill in the questions you will have your Vuex store setup for you. One more thing needs to be done afterward is to import the generated store and put it in your Vue component like the example below.

```javascript
import Vue from 'vue'
import App from './App.vue'
import store from './store' // import the store

new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App },
});
```

Once that's finished, Vuex store has been setup with your Vue application.

### Vuex Modules

```bash
yo vuex:modules
```

Same as the previous generator, this sub generator will ask you the location of your store and modules directory. If you've done the setup in the previous command they will be pickup from the stored configuration so that you don't have to type again.

By Giving the name of the namespaced module you intended to create, you will have your module automatically created and loaded within your store. Save your time for manually importing the module and setting up the store configuration.

For example. When you specified the name of your nap=mespaced module as tabs/store/product, like you normally will do in mapState/mapGetters/mapActions, you will have the following set files in your {storeDirectory}/{moduleDirectory}/tabs/store/product

```
  index.js // module index combining state, getters, actions, mutations into default pojo
  actions.js // actions
  getters.js // getters
  mutations.js // mutations
  mutation-types.js // mutation-types, think of that as constants
  state.js // initial state
```

Each module comes with a default resetState action, which might come in handy when you are doing test or even application code when you need it.

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
