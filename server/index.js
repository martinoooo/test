/**
 * Created by meng on 2016/9/28.
 */
import express from 'express';
import path from 'path';
/*import bodyParser from 'body-parser';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

import users from './routes/users';*/

let app = express();
/*
app.use(bodyParser.json());

app.use('/api/users',users);

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler,{
  publicPath:webpackConfig.output.publicPath,
  noInfo:true
}));
app.use(webpackHotMiddleware(compiler));*/

app.get('/*',(req,res) => {
  //res.send('hello world!');
  res.sendFile(path.join(__dirname , './index.html' ));
});

app.listen(3000,() => console.log('running on localhost:3000'));