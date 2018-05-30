# react-app-rewire-phaser-ce

[![NPM](https://img.shields.io/npm/v/react-app-rewire-phaser-ce.svg)](https://www.npmjs.com/package/react-app-rewire-phaser-ce)

Enable [phaser-ce](https://github.com/photonstorm/phaser-ce) in a [react-app-rewired](https://github.com/timarney/react-app-rewired) application.

### How to Use

```javascript
const rewirePhaserCE = require('react-app-rewire-phaser-ce');

module.exports = function override(config, env) {
  config = rewirePhaserCE(config, env);
  return config;
};

```
