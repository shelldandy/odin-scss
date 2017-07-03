import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import path from 'path'
import process from 'process'
import { allTheFiles } from '../helpers/filesToAssert'

describe('Assert basic copying works', function () {
  it('Should copy properly all the files needed', function () {
    helpers.run(path.join(process.cwd(), 'generators', 'app'))
      .withPrompts({
        yarn: false,
        deleteFolder: false,
        atomic: true,
        grid: true,
        vendorReset: true,
        basePath: '.'
      })
      .then(function () {
        assert.file(allTheFiles)
      })
  })

  it('Should copy the files in the specified directory', function () {
    helpers.run(path.join(process.cwd(), 'generators', 'app'))
      .withPrompts({
        yarn: false,
        deleteFolder: false,
        atomic: true,
        grid: true,
        vendorReset: true,
        basePath: 'some/deeply/nested/dir'
      })
      .then(function () {
        assert.file(allTheFiles)
      })
  })
})
