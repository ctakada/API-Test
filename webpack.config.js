const path = require( 'path' );


const nodeExternals = require( 'webpack-node-externals' );
const NodemonPlugin = require( 'nodemon-webpack-plugin' );

module.exports = {
    mode: "production",
    target: 'node',
    entry: './index.js',

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    },

    externals: [nodeExternals()],

    module: {
        rules: [{
            test: /.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },

    plugins: [
        new NodemonPlugin(),
    ],
}