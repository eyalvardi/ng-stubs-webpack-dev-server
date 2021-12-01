const bodyParser = require('body-parser');

console.log(`\n*********************************`);
console.log(`******   Webpack Config     ******`);
console.log(`*********************************\n`);


module.exports = {
  devServer: {
    onBeforeSetupMiddleware: function (devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }
      devServer.app.use(bodyParser.json()); // support json encoded bodies
    },
  },
};
