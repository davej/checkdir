'use strict';
var fs = require('mz/fs');

module.exports = function checkdir(dir) {
  function isDirEmpty(files) {
    var noOfFiles = files.length;
    var empty = files.length === 0;

    return {
      empty: empty,
      exists: true,
      files: noOfFiles
    };
  }

  function dirDoesNotExist(err) {
    if (err.code !== 'ENOENT') throw err;

    return {
      empty: true,
      exists: false,
      files: 0
    };
  }

  return fs.readdir(dir).then(isDirEmpty).catch(dirDoesNotExist);
};
