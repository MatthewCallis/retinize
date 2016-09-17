/* eslint no-console: 0 */
const { rollup } = require('rollup');
const babel = require('rollup-plugin-babel');
const json = require('rollup-plugin-json');

rollup({
  entry: 'src/retinize.js',
  plugins: [
    json({
      exclude: ['node_modules/**'],
    }),
    babel({
      exclude: 'node_modules/**',
      // plugins: ['external-helpers'], // Only 1 class.
    }),
  ],
})
.then(bundle => (
  bundle.write({
    format: 'es',
    moduleName: 'Retinize',
    dest: 'dist/retinize.js',
  })
))
.then(() => {
  console.log('Bundle created');
})
.catch((e) => {
  console.log(e);
});
