module.exports = {
  // ... other webpack configurations
  module: {
    rules: [
      {
        test: /\.(pdf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'documents/'
            }
          }
        ]
      }
    ]
  }
};