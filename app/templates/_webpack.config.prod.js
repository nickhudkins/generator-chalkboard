var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    app: './client/entry',
  },
  output: {
    publicPath: '/public/',
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
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new ExtractTextPlugin('[name].css'),

    // resolve bower pacakages
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ),

    new webpack.PrefetchPlugin('react'),
    new webpack.PrefetchPlugin('react/lib/ReactComponentBrowserEnvironment'),

    // optimize
    new webpack.optimize.CommonsChunkPlugin('common', 'common.bundle.js'),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),

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
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.styl$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader') },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192&name=images/[hash].[ext]' },
      { test: /\.woff$/,   loader: 'url-loader?limit=8192&mimetype=application/font-woff&name=fonts/[hash].[ext]' },
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
