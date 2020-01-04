module.exports = {
  launch: {
    headless: process.env.HEADLESS !== 'false',
  },
  server: {
    command: "npm run build & npm run serve",
    port: 8888
  }
};