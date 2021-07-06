const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const deps = require('../../package.json').dependencies

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`
      },
      shared: {
        react: {
          singleton: true,
          version: deps['react']
        },
        'react-dom': {
          singleton: true,
          version: deps['react-dom']
        },
        'react-router-dom': {
          singleton: true,
          version: deps['react-router-dom']
        },
        '@material-ui/core': {
          singleton: true,
          version: deps['@material-ui/core']
        },
        '@material-ui/icons': {
          singleton: true,
          version: deps['@material-ui/icons']
        }
      }
    }),
  ]
}
module.exports = merge(commonConfig, prodConfig)
