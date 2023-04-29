const { createProxyMiddleware } = require('http-proxy-middleware');


const apiProxy = createProxyMiddleware('/api', { target: 'https://api.worldmoodtoday.com' });

module.exports = function(app) {
    app.use(apiProxy);
  }
  