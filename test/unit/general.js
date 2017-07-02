import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import path from 'path'
import process from 'process'
import { allTheFiles } from '../helpers/filesToAssert'
import makeFilePath from '../helpers/makeFilePath'

describe('Assert basic copying works', function () {
  before(function (done) {
    helpers.run(path.join(process.cwd(), 'generators', 'app'))
      .inDir(path.join(__dirname, 'tmp'))
      .withPrompts({
        yarn: true
      })
      .on('end', done)
  })

  after(function () {
    helpers.run(path.join(process.cwd(), 'generators', 'app'))
      .inDir(path.join(__dirname, 'tmp'))
      .cleanTestDirectory()
  })

  it('Should copy properly all the files needed', function () {
    assert.file(allTheFiles.map(makeFilePath))
  })
})
