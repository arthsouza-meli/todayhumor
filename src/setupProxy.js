const { createProxyMiddleware } = require('http-proxy-middleware');

const apiProxy = createProxyMiddleware('/api', { 
  target: 'https://api.worldmoodtoday.com',
  changeOrigin: true,
  secure: true,
  rejectUnauthorized: false,
});

module.exports = function(app) {
  app.use(apiProxy);
}
