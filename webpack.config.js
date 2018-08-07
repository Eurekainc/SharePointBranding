const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    newsWebPart: './src/News.ts',
    //combinedDataLoader: './src/combinedDataLoader.ts',
    Rotator: './src/Rotator.ts',
    highAchievers: './src/HighAchievers.ts',
    champion: './src/Champion.ts',
    announcements: './src/Announcements.ts',
    stock: './src/Stock.ts',
    rssfeed: './src/RssFeed.ts',
    links: './src/Links.ts'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]    
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[Name].js',
    path: path.resolve(__dirname, 'Build/SiteAssets/HomePage/GreifCustom')
  }
};

