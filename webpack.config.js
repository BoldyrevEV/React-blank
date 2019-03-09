// Импорт webpack.
const webpack = require('webpack');

// Импорт path.
const path = require('path');

module.exports = {
    entry: { // Установили точку входа
        app: './App.jsx',
    },
    context: `${__dirname}/src/components`, // Путь до входного файла
    output: { // Установили точку выхода
        path: path.resolve(__dirname, './dist'), // Путь до точки выхода
        filename: 'index.js', // Имя файла сборки
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                  { loader: "style-loader" },
                  { loader: "css-loader" }
                ]
            },
        ]
    },
    resolve: {        
        extensions: ['.js', '.jsx'],
    },

}