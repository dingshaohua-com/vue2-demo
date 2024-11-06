const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // disable the host check on sandbox
  devServer: {
    allowedHosts: 'all',
  },
});
