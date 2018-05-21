# react-app-rewire-phaser-ce

<p>
  <a href="https://www.npmjs.com/package/react-app-rewire-phaser-ce">
    <img alt="npm" src="https://img.shields.io/npm/v/react-app-rewire-phaser-ce.svg?style=flat-square" />
  </a>
</p>

### How to Use

```javascript
const rewirePhaserCE = require('react-app-rewire-phaser-ce');

module.exports = function override(config, env) {
  config = rewirePhaserCE(config, env);
  return config;
};

```
