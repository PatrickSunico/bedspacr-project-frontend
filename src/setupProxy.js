const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
 app.use(
  "/api",
  createProxyMiddleware({
   target: "http://localhost:8000",
   headers: {
    Connection: "keep-alive",
   },
   followRedirects: true,
   changeOrigin: true,
  })
 );
};
