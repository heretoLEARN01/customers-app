const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('@module-federation/enhanced');
const deps = require('./package.json').dependencies;
const path = require('path');


module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devServer: { port: 3001 },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
//   mode: isProd ? 'production' : 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath,                    // important for deployed assets
    filename: '[name].[contenthash].js',
    clean: true,
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ }],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'customersApp',
      filename: 'remoteEntry.js',
      
      exposes: {
        './Customers': './src/Customers',
      },
      remotes: {
  hostApp: 'hostApp@http://localhost:3000/remoteEntry.js',
},
      shared: {
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        'react-dom': { singleton: true, eager: true, requiredVersion: deps['react-dom'] },
        // zustand: { singleton: true, eager: true },
      },
    }),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
};
