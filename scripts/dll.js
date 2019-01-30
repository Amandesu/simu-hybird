
const webpack = require("webpack");
const config = require("../config/webpack.config.dll");
compiler = webpack(config);


compiler.run((err, stats) => {
    
    console.log(11)
})