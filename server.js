'use strict';

let notJsFiles = ['.css', '.less', '.sass', '.ttf', '.woff', '.woff2'];

require('babel-core/register');
notJsFiles.forEach((ext) => require.extensions[ext] = () => {});
require('babel-polyfill');
require('server.jsx');
