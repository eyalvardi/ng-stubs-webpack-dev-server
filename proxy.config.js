const {
  responseInterceptor,
  createProxyMiddleware,
  fixRequestBody,
  Options,
  RequestHandler,
  Filter
} = require("http-proxy-middleware");
const streamify = require('stream-array');
const HttpProxy = require('http-proxy');

console.log(`*********************************`);
console.log(`******   Proxy Config      ******`);
console.log(`*********************************`);

/*const proxy = new HttpProxy();

module.exports = (req, res, next) => {
  proxy.web(
    req,
    res,
    {
      target: 'http://localhost:4003/',
      buffer: streamify(req.rawBody),
    },
    next
  );
};*/

const PROXY_CONFIG = {
  "*": {
    secure: false,
    logLevel: "debug",
    bypass: function (req, res, proxyOptions) {
      console.log(`bypass ::: req body: ${ JSON.stringify(req.body) }`);
      req.url    =  "/stubs/a.json";
      req.method = "GET";
      req.headers["stubs-Header"] = "yes";
    },

    /*

    selfHandleResponse: true,
    onProxyRes: responseInterceptor(
        (responseBuffer, proxyRes, req, res) => {
        // log original request and proxied request info
        const exchange = `[DEBUG] ${req.method} ${req.path} -> ${proxyRes.req.protocol}//${proxyRes.req.host}${proxyRes.req.path} [${proxyRes.statusCode}]`;
        console.log(exchange); // [DEBUG] GET / -> http://www.example.com [200]

        // log complete response
        const response = responseBuffer.toString('utf8');
        console.log(response); // log response body

        return responseBuffer;
      }
    ),
*/

  }
}

module.exports = PROXY_CONFIG;



