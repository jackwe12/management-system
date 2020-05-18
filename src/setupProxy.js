const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    //把localhost:3000/stu =>localhost:8413/stu
    '/stu',
    createProxyMiddleware({
      target: 'http://localhost:8413',
      changeOrigin: true,
      pathRewrite: {
        "^/stu": "/stu"
      }
    })
  );
};