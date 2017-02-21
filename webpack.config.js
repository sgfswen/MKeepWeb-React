const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const envNames = {
    prod: 'production',
    dex: 'development'
};
const isProduction = () => {
    return process.env.NODE_ENV === envNames.prod;
};

const outputJSFileName = isProduction() ? 'bundle-[hash].js' : 'bundle.js';
const outputCSSFileName = isProduction() ? 'styles-[hash].css' : 'styles.css';

const plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            BROWSER: JSON.stringify(true),
            NODE_ENV: JSON.stringify(process.env.NODE_ENV || envNames.dev)
        }
    }),
    new ExtractTextPlugin(outputCSSFileName)
];

module.exports = {
    entry: './src/client.jsx',
    output: {
        filename: outputJSFileName,
        path: `${__dirname}/public/assets/`
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(__dirname, 'src'),
            'node_modules'
        ]
    },
    plugins,
    // devServer: {
    //     contentBase: path.resolve(__dirname, './src'),  // New
    //     headers: {
    //         'Access-Control-Allow-Origin': '*'
    //     }
    // }
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: [
                    /node_modules/,
                    /public/
                ],
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }
        ]
    },
};
