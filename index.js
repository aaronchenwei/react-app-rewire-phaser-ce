const path = require('path');

const phaserModule = path.dirname(require.resolve('phaser-ce/package.json'));
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
const pixi = path.join(phaserModule, 'build/custom/pixi.js');
const p2 = path.join(phaserModule, 'build/custom/p2.js');

/* phaser-ce Webpack configuration */
const phaserCERewire = {
  alias: {
    pixi: pixi,
    p2: p2,
    'phaser-ce': phaser,
  },
  rules: [
    {
      test: /pixi\.js$/,
      use: [
        {
          loader: 'expose-loader',
          options: 'PIXI',
        },
      ],
    },
    {
      test: /phaser-split\.js$/,
      use: [
        {
          loader: 'imports-loader',
          options: 'pixi,p2',
        },
        {
          loader: 'expose-loader',
          options: 'Phaser',
        },
      ],
    },
    {
      test: /p2\.js$/,
      use: [
        {
          loader: 'expose-loader',
          options: 'p2',
        },
      ],
    },
  ],
};

function rewirePhaserCE(config, env) {
  /* Spread syntax */
  config.resolve.alias = { ...config.resolve.alias, ...phaserCERewire.alias };
  config.module.rules = [...config.module.rules, ...phaserCERewire.rules];

  return config;
}

module.exports = rewirePhaserCE;
