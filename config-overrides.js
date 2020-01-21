const { override, fixBabelImports, addLessLoader } = require("customize-cra")

// overrider CRA webpack config
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#90cdf4" }, // update ANT UI theme here
  }),
)
