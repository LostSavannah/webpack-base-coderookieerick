const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    ///Sets the mode to development
    mode: "production",
    //Confugu
    output:{
        clean: true,
        filename: "main.[contenthash].js"
    },
    module:{
        rules:[
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options:{
                    sources: false
                },
            },
            {
                test: /\.css$/i,
                exclude: /style.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader'
            },
            {
                test: /style.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
        ],
    },
    optimization:{
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: "Test",
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename:'[name].[fullhash].css'
        }),
        new CopyWebpackPlugin({
            patterns:[
                {from: "src/assets", to: "assets"},
            ]
        }),
    ],
}