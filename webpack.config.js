const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    ///Sets the mode to development
    mode: "development",
    //Confugu
    output:{
        clean: true,
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

    },
    plugins:[
        new HtmlWebpackPlugin({
            title: "Test",
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename:'[name].[fullhash].css'
        }),   
    ],
}