var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'eval',
  debug: true,

  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:3001',
      'webpack/hot/only-dev-server',
      './client/entry'
    ]
  },

  output: {
    publicPath: 'http://localhost:3001/public/',
    path: path.join(__dirname, 'public'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },
  resolveLoader: {
    modulesDirectories: ['node_modules', ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),

    new webpack.PrefetchPlugin('react'),
    new webpack.PrefetchPlugin('react/lib/ReactComponentBrowserEnvironment'),
    new webpack.optimize.CommonsChunkPlugin('common', 'common.bundle.js'),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/vertx/),
    new webpack.IgnorePlugin(/un~$/)
  ],
  resolve: {
    root: [path.join(__dirname, 'lib'), path.join(__dirname, 'client'), ],
    extensions: ['', '.js', '.jsx', '.css', '.json', '.styl'],
    alias: {
      'jeet': 'jeet/stylus/jeet/index',
      'rupture': 'rupture/rupture/index',
      'axis': 'axis/axis/index',
    }
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: '6to5-loader?experimental=true&runtime=true!imports-loader?to5Runtime=6to5/runtime.js!react-hot-loader'},
      { test: /6to5\/runtime\.js$/, loader: 'exports-loader?to5Runtime'},
      { test: /\.css$/, loaders: 'style-loader!css-loader'},
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader'},
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=images/[hash].[ext]' },
      { test: /\.woff2?$/,   loader: 'url-loader?limit=8192&mimetype=application/font-woff&name=fonts/[hash].[ext]' },
      { test: /\.ttf$/,    loader: 'file-loader?name=fonts/[hash].[ext]' },
      { test: /\.eot$/,    loader: 'file-loader?name=fonts/[hash].[ext]' },
      { test: /\.svg$/,    loader: 'file-loader?name=fonts/[hash].[ext]' },
      { test: /\.json$/, loader: 'json-loader' },
    ]
  },
  externals: {
    'jquery': 'jQuery'
  }
};
