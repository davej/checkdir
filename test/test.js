'use strict';

var chai = require('chai');
var fs = require('fs');
var chaiAsPromised = require('chai-as-promised');
var rimraf = require('rimraf');
var path = require('path');
var checkdir = require('../');

chai.use(chaiAsPromised);
chai.should();

describe('non-empty dirs', function () {
  it('should work', function () {
    return checkdir('./test').should.eventually.deep.equal({
      empty: false,
      exists: true,
      files: 1
    });
  });
});

describe('dirs that don\'t exist', function () {
  it('should work', function () {
    return checkdir('./foo').should.eventually.deep.equal({
      empty: true,
      exists: false,
      files: 0
    });
  });
});

describe('empty dirs', function () {
  var dirPath = './test/bar';

  before(function () {
    return fs.mkdirSync(dirPath);
  });
  it('should work', function () {
    return checkdir(dirPath).should.eventually.deep.equal({
      empty: true,
      exists: true,
      files: 0
    });
  });
  after(function (done) {
    return rimraf(dirPath, done);
  });
});

describe('dir with dotfile', function () {
  var dirPath = './test/bar';

  before(function () {
    fs.mkdirSync(dirPath);
    return fs.writeFileSync(path.join(dirPath, '.dotfile.txt'), 'Hello', 'utf8');
  });
  it('should work', function () {
    return checkdir(dirPath, { ignoreDotFiles: true }).should.eventually.deep.equal({
      empty: true,
      exists: true,
      files: 0
    });
  });
  after(function (done) {
    return rimraf(dirPath, done);
  });
});

describe('files', function () {
  it('should throw', function () {
    return checkdir('./test/test.js').should.be.rejected;
  });
});
