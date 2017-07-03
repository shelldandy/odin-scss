import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import path from 'path'
import process from 'process'
import {
  mustHaveFiles,
  gridFiles,
  atomicFiles,
  vendorReset
} from '../helpers/filesToAssert'

describe('Assert conditional files get copied or not', function () {
  it('Should not copy grid files if not needed', function () {
    helpers.run(path.join(process.cwd(), 'generators', 'app'))
      .withPrompts({
        yarn: false,
        deleteFolder: false,
        atomic: true,
        grid: false,
        vendorReset: true,
        basePath: '.'
      })
      .then(function () {
        assert.file('caquita.sss')
        assert.noFile(gridFiles)
      })
  })

  it('Should not copy atomic files if not needed', function () {
    helpers.run(path.join(process.cwd(), 'generators', 'app'))
      .withPrompts({
        yarn: false,
        deleteFolder: false,
        atomic: false,
        grid: true,
        vendorReset: true,
        basePath: '.'
      })
      .then(function () {
        assert.file(mustHaveFiles)
        assert.noFile(atomicFiles)
      })
  })

  it('Should not copy vendor reset if not needed', function () {
    helpers.run(path.join(process.cwd(), 'generators', 'app'))
      .withPrompts({
        yarn: false,
        deleteFolder: false,
        atomic: true,
        grid: true,
        vendorReset: false,
        basePath: '.'
      })
      .then(function () {
        assert.file(mustHaveFiles)
        assert.noFile(vendorReset)
        assert.fileContent('vendor.scss',
          '@import "vendor/reset";'
        )
      })
  })
})
