import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import path from 'path'
import {
  gridFiles,
  atomicFiles,
  vendorReset
} from '../src/app/filesToAssert'
import makeFilePath from '../helpers/makeFilePath'

const basePath = '.'

describe('Assert conditional files get copied or not', function () {
  beforeEach(function () {
    return helpers.run(path.join(__dirname, '../src/app'))
      .withPrompts({
        yarn: false,
        deleteFolder: false,
        atomic: false,
        grid: false,
        vendorReset: false,
        basePath
      }).toPromise()
  })

  it('Should not copy grid files if not needed', function () {
    assert.noFile(gridFiles.map(makeFilePath, basePath))
    assert.noFileContent('main/3-layout/_index.scss', '@import "grid";')
    assert.noFileContent('main/3-layout/_index.scss', '@import "container";')
    assert.noFileContent('main/3-layout/_index.scss', '@import "row";')
  })

  it('Should not copy atomic files if not needed', function () {
    assert.noFile(atomicFiles.map(makeFilePath, basePath))
    assert.noFileContent('main/3-layout/_index.scss', '@import "borders";')
    assert.noFileContent('main/3-layout/_index.scss', '@import "display";')
    assert.noFileContent('main/3-layout/_index.scss', '@import "flexbox";')
    assert.noFileContent('main/3-layout/_index.scss', '@import "font-sizes";')
    assert.noFileContent('main/3-layout/_index.scss', '@import "font-styles";')
    assert.noFileContent('main/3-layout/_index.scss', '@import "margin";')
    assert.noFileContent('main/3-layout/_index.scss', '@import "padding";')
    assert.noFileContent('main/3-layout/_index.scss', '@import "position";')
  })

  it('Should not copy vendor reset if not needed', function () {
    assert.noFile(vendorReset.map(makeFilePath, basePath))
    assert.noFileContent('vendor.scss', '@import "vendor/reset";')
  })
})
