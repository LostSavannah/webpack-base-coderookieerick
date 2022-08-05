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
            {
                test: /\.m?js$/,
                exclude: '/node_modules/',
                use: {
                    loader: "babel-loader",
                    options:{
                        presets: ['@babel/preset-env']
                    }
                }
            }
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
        //No recuerdo
        new HtmlWebpackPlugin({
            title: "Test",
            template: "./src/index.html"
        }),
        //Importa css globales
        new MiniCssExtractPlugin({
            filename:'[name].[fullhash].css'
        }),
        //Copia rutas a la carpeta de distribución
        new CopyWebpackPlugin({
            patterns:[
                {from: "src/assets", to: "assets"},
            ]
        }),
    ],
}