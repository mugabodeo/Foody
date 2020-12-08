const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');  
  
module.exports = {  
   entry: './main.js',  
   output: {  
      path: path.join(__dirname, '/bundle'),  
      filename: 'index_bundle.js'  
   },  
   devServer: {  
      inline: true,  
      port: 8080  
   },  
   module: {  
      rules: [  
         {  
            test: /\.jsx?$/,  
            exclude: /node_modules/,  
        use: {  
              loader: "babel-loader",  
            }  
         }, 
         
         {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']   
         }  
      ]  
   },  
   plugins:[  
      new HtmlWebpackPlugin({  
         template: './src/index.html'  
      })  
   ]  
}  