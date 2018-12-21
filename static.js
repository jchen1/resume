const { bundle } = require('./dist/static');
const fs = require('fs');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const _ = require('lodash');

try {
  const baseHTML = fs.readFileSync("./dist/index.html").toString();
  const markup = ReactDOMServer.renderToStaticMarkup(React.createElement(bundle.Resume));

  const cssHTML = _.replace(
    baseHTML,
    "css/resume.min.css",
    "dist/css/resume.min.css");

  const noBundleHTML = _.replace(
    cssHTML,
    "\<script src=\"\.\/bundle\.js\"\>\<\/script\>",
    "");

  const staticHTML = _.replace(
    noBundleHTML,
    "\<div id=\"resume\"\>\</div\>",
    `<div id=\"resume\">${markup}</div>`);

  fs.writeFileSync('./index.html', staticHTML);
} catch (e) {
  console.log(e);
}