const { createProxyMiddleware } = require('http-proxy-middleware');


const apiProxy = createProxyMiddleware('/api', { target: 'http://localhost:8080' });

module.exports = function(app) {
    app.use(apiProxy);
  }
  