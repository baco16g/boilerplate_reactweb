module.exports = {
  rules: [
    {
      test: /\.(ts|tsx)$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }
  ]
}
