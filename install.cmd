cmd /C npm install --save-dev html-loader html-webpack-plugin
cmd /C npm install --save-dev webpack-dev-server
cmd /C npm install -D css-loader style-loader
cmd /C npm install -D mini-css-extract-plugin
cmd /C npm install -D file-loader
cmd /C npm install -D copy-webpack-plugin

::Prod
cmd /C npm install -D css-minimizer-webpack-plugin terser-webpack-plugin
cmd /C npm install -D babel-loader @babel/core
cmd /C npm install -D @babel/preset-env
