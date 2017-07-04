import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import path from 'path'
import { allTheFiles } from '../helpers/filesToAssert'
import makeFilePath from '../helpers/makeFilePath'

const basePath = '.'

describe('Assert basic copying works', function () {
  beforeEach(function () {
    return helpers.run(path.join(__dirname, '../../generators/app'))
      .withPrompts({
        yarn: false,
        deleteFolder: false,
        atomic: true,
        grid: true,
        vendorReset: true,
        basePath
      })
      .toPromise()
  })

  it('Should copy properly all the files needed', function () {
    assert.file(allTheFiles.map(makeFilePath, basePath))
  })
})
