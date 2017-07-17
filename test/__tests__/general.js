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
    assert.fileContent('main/3-layout/_index.scss', '@import "grid";')
    assert.fileContent('main/3-layout/_index.scss', '@import "container";')
    assert.fileContent('main/3-layout/_index.scss', '@import "row";')
    assert.fileContent('main/3-layout/_index.scss', '@import "borders";')
    assert.fileContent('main/3-layout/_index.scss', '@import "display";')
    assert.fileContent('main/3-layout/_index.scss', '@import "flexbox";')
    assert.fileContent('main/3-layout/_index.scss', '@import "font-sizes";')
    assert.fileContent('main/3-layout/_index.scss', '@import "font-styles";')
    assert.fileContent('main/3-layout/_index.scss', '@import "margin";')
    assert.fileContent('main/3-layout/_index.scss', '@import "padding";')
    assert.fileContent('main/3-layout/_index.scss', '@import "position";')
    assert.fileContent('vendor.scss', '@import "vendor/reset";')
  })
})
