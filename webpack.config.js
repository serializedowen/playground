const HtmlWebPackPlugin = require('html-webpack-plugin');


const htmlPlugin = new HtmlWebPackPlugin({
  });


console.log(htmlPlugin.filename)
module.exports = {
    entry: './src/app.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map',
    plugins: [htmlPlugin]
};