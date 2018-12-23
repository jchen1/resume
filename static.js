const { bundle } = require('./dist/static');
const fs = require('fs');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const _ = require('lodash');
const cheerio = require('cheerio');

try {
  const baseHTML = fs.readFileSync("./dist/index.html").toString();
  const $ = cheerio.load(baseHTML);

  const markup = ReactDOMServer.renderToStaticMarkup(React.createElement(bundle.Resume));

  $('link[href="css/resume.min.css"]').attr('href', 'dist/css/resume.min.css');
  $('script').remove();
  
  $('#resume').append(markup);

  fs.writeFileSync('./index.html', $.html());
} catch (e) {
  console.log(e);
}