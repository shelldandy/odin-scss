import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import path from 'path'
import process from 'process'
import { allTheFiles } from '../helpers/filesToAssert'
import makeFilePath from '../helpers/makeFilePath'

describe('Assert basic copying works', function () {
  it('Should copy properly all the files needed', function () {
    const basePath = '.'
    helpers.run(path.join(process.cwd(), 'generators', 'app'))
      .withPrompts({
        yarn: false,
        basePath,
        deleteFolder: false
      })
      .then(function () {
        assert.file(allTheFiles.map(makeFilePath, basePath))
      })
  })

  it('Should copy the files in the specified directory')

  it('Should remove ending slash if provided')
})
