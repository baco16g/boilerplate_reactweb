module.exports = {
  launch: {
    headless: process.env.HEADLESS !== 'false',
  },
  server: {
    command: "npm run build & serve ./dist -p 8888",
    port: 8888
  }
};