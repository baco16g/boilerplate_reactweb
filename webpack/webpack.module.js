module.exports = {
  rules: [{
      test: /\.(ts|tsx)$/,
      use: 'ts-loader',
      exclude: /node_modules|\.d\.ts$/,
    },
    {
      enforce: "pre",
      test: /\.js$/,
      loader: "source-map-loader"
    }
  ]
}