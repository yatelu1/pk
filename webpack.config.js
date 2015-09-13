var path = require('path');
module.exports = {
    entry: "./js/entry.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'dist'),
        publicPath: './dist/'
    },
    //plugins: [new HtmlWebpackPlugin()],
    module: {
        loaders: [
            { test: /\.css$/,    loader: "style-loader!css-loader" },
            { test: /\.jpg|png$/,    loader: "url-loader?limit=10000&minetype=image/jpg" }
        ]
    }
};