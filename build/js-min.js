const rollup = require('rollup');
const buble = require('rollup-plugin-buble');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');
//const uglify = require('rollup-plugin-uglify'); //TypeError: uglify is not a function
const { uglify } = require('rollup-plugin-uglify'); //https://github.com/TrySound/rollup-plugin-uglify/issues/45
const replace = require('rollup-plugin-replace');
const version = process.env.NODE_ENV === 'development' ? 'dev' : require('../piyamaskolla/tracking/package.json').version;

console.log('rolling version', version);

const buildCore = function (opts) {
  rollup
    .rollup({
      input: opts.input,
      plugins: (opts.plugins || []).concat([
        buble(),
        commonjs(),
        nodeResolve(),
        replace({
          __VERSION__: version,
          'process.env.SSR': false
        })
      ])
    })
    .then(function (bundle) {
      var dest = (opts.output || opts.input);

      console.log('rolling destination', dest);
      bundle.write({
        format: 'iife',
        name: 'website',
        file: dest,
        strict: false
      });
    })
    .catch(function (err) {
      console.error(err);
    });
};

const build = function () {
  buildCore({
    input: 'src/js/website.js',
    output: 'js/website.min.js',
    plugins: [uglify()]
  });
};

build();