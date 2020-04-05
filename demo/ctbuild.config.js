const path = require('path');

module.exports = {
  getConfig({ curModule }) {
    curModule.resolve.alias = {
      react: path.join(__dirname, 'node_modules/react'),
      'react-dom': path.join(__dirname, 'node_modules/react-dom'),
    };

    // curModule.resolve.alias = {
    //   '@ctsj/router': path.resolve(__dirname, 'src/ctsj-router'),
    // };
  },
};
