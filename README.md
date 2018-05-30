# react-app-rewire-phaser-ce

[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]

Enable [phaser-ce](https://github.com/photonstorm/phaser-ce) in a [react-app-rewired](https://github.com/timarney/react-app-rewired) application.

### How to Use

```javascript
const rewirePhaserCE = require('react-app-rewire-phaser-ce');

module.exports = function override(config, env) {
  config = rewirePhaserCE(config, env);
  return config;
};

```
