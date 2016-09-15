import path from 'path';
import {Server} from 'http';
import Express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';

import Main from './src/index';


const
  app = new Express(),
  server = new Server(app),
  port = process.env.PORT || 3000,
  env = process.env.NODE_ENV || 'production';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(Express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {

  const markup = renderToString(<Main />);

  return res.render('index', {markup, footnote: 'Express Server'});
});

server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});