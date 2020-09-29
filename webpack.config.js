const path = require("path");

const entry = "./src/index.js";

module.exports = {
  entry,
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "node",
  externals: [
    //   "fs-extra": "commonjs2 fs-extra",
    // },
    // externals: /^fs-.*/
    // externals: [
    function (context, request, callback) {
      if (entry !== request) {
        return callback(null, "commonjs " + request);
      }
      return callback();
    },
  ],
};
