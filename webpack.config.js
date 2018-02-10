'use strict';

const path = require('path');

module.exports = [
    {
        entry: './app.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        }
    }
], (err, stats) => {
    if (err) {
    // err is webpack issues
    console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }
      return;
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
    // stats.hasErrors is compilation issues
      console.error(info.errors);
    }

    if (stats.hasWarnings()) {
      console.warn(info.warnings);
    }

    // Done processing
};
