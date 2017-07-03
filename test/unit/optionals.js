import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import path from 'path'
import process from 'process'
import {
  gridFiles,
  atomicFiles,
  vendorReset
} from '../helpers/filesToAssert'
import makeFilePath from '../helpers/makeFilePath'

const basePath = '.'

describe('Assert conditional files get copied or not', function () {
  before(function (done) {
    helpers.run(path.join(process.cwd(), 'generators', 'app'))
      .inDir(path.join(__dirname, 'tmp'))
      .withPrompts({
        yarn: false,
        deleteFolder: false,
        atomic: false,
        grid: false,
        vendorReset: false,
        basePath
      })
      .on('end', done)
  })

  after(function () {
    helpers.run(path.join(process.cwd(), 'generators', 'app'))
      .inDir(path.join(__dirname, 'tmp'))
      .cleanTestDirectory()
  })

  it('Should not copy grid files if not needed', function () {
    assert.noFile(gridFiles.map(makeFilePath, basePath))
  })

  it('Should not copy atomic files if not needed', function () {
    assert.noFile(atomicFiles.map(makeFilePath, basePath))
  })

  it('Should not copy vendor reset if not needed', function () {
    assert.noFile(vendorReset.map(makeFilePath, basePath))
    assert.fileContent('vendor.scss', '@import "vendor/reset";')
  })
})