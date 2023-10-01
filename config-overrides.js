const webpack = require('webpack'); 
module.exports = function override(config) { 
		const fallback = config.resolve.fallback || {}; 
		Object.assign(fallback, { 
    	"crypto": require.resolve("crypto-browserify"), 
      "stream": require.resolve("stream"), 
      "assert": require.resolve("assert"), 
      "http": require.resolve("stream-http"),  
      "os": require.resolve("os"), 
      "url": require.resolve("url"),
      "path": require.resolve("path"),
      "util": require.resolve("util"), 
      "fs": false,
      "querystring": require.resolve("querystring"),
      "net": require.resolve("net"),
      "zlib": false,
      "async_hooks": false,
      "express": false,
      }) 
   config.resolve.fallback = fallback; 
   config.plugins = (config.plugins || []).concat([ 
   	new webpack.ProvidePlugin({ 
    	process: 'process/browser', 
      Buffer: ['buffer', 'Buffer'] 
    }) 
   ]) 
   return config; }