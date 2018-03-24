const path = require('path');

// Constant with our paths
const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    JS: path.resolve(__dirname, 'src/js'),
};
module.exports = {
    entry: path.join(paths.JS, 'app.js'),
    mode:'development',
    output: {
        path: paths.DIST,
        filename: 'index.js'
    },

    devServer: {
        inline: true,
        noInfo: true,
        open: true,
        overlay: true,
        contentBase: paths.SRC,
        compress: true,
        port: 9000

    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react']
                }
            }

        ]
    }
};

