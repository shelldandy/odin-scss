'use strict'
const Generator = require('yeoman-generator')
const clipboardy = require('clipboardy')
const {
  mustHaveFiles,
  gridFiles,
  atomicFiles,
  vendorReset
} = require('./filesToAssert')

class OdinSCSS extends Generator {
  welcome () {
    this.log('👋 Welcome to OdinSCSS 🐶')
    this.log('Created with love by Miguel Palau')
  }

  prompts () {
    return this.prompt([
      {
        type: 'input',
        name: 'basePath',
        message: 'Where do I install this? Use a dot (.) to install on this folder.',
        default: 'src/assets/styles'
      },
      {
        type: 'confirm',
        name: 'deleteFolder',
        message: 'Delete the original styles folder?',
        default: true
      },
      {
        type: 'confirm',
        name: 'grid',
        message: 'Do you need a grid?',
        default: true
      },
      {
        type: 'confirm',
        name: 'atomic',
        message: 'Would you need some atomic goodies?',
        default: true
      },
      {
        type: 'confirm',
        name: 'vendorReset',
        message: 'Do you need a reset?',
        default: true
      },
      {
        type: 'confirm',
        name: 'yarn',
        message: 'Should I install extra dependencies needed with Yarn?',
        default: true
      }
    ])
    .then(props => {
      this.options.yarn = props.yarn
      this.options.basePath = props.basePath
      this.options.deleteFolder = props.deleteFolder
      this.options.grid = props.grid
      this.options.atomic = props.atomic
      this.options.vendorReset = props.vendorReset
    })
  }

  deleteFiles () {
    return this.options.deleteFolder
      ? this.fs.delete(this.options.basePath)
      : this.log('Skipping deleting of base folder')
  }

  copyMustHaveFiles () {
    return mustHaveFiles.map(file => {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(this.options.basePath + '/' + file),
        {
          atomic: this.options.atomic,
          grid: this.options.grid,
          vendorReset: this.options.vendorReset
        }
      )
    })
  }

  copyGridFiles () {
    return this.options.grid
      ? gridFiles.map(file => {
        this.fs.copyTpl(
          this.templatePath(file),
          this.destinationPath(this.options.basePath + '/' + file),
          {
            atomic: this.options.atomic,
            grid: this.options.grid,
            vendorReset: this.options.vendorReset
          }
        )
      })
      : this.log('Skipping grid files')
  }

  copyAtomicFiles () {
    return this.options.atomic
      ? atomicFiles.map(file => {
        this.fs.copyTpl(
          this.templatePath(file),
          this.destinationPath(this.options.basePath + '/' + file),
          {
            atomic: this.options.atomic,
            grid: this.options.grid,
            vendorReset: this.options.vendorReset
          }
        )
      })
      : this.log('Skipping grid files')
  }

  copyVendorReset () {
    return this.options.vendorReset
      ? vendorReset.map(file => {
        this.fs.copyTpl(
          this.templatePath(file),
          this.destinationPath(this.options.basePath + '/' + file),
          {
            atomic: this.options.atomic,
            grid: this.options.grid,
            vendorReset: this.options.vendorReset
          }
        )
      })
      : this.log('Skipping grid files')
  }

  installDependencies () {
    this.options.yarn
      ? this.yarnInstall([
        'manila-mixins',
        'modularscale-sass'
      ])
      : this.log('Skipping yarn install')
  }

  copyPaths () {
    this.log('Now I\'m gonna copy the includePaths so you place them where they need to be')
    const includePaths = `
      './node_modules/modularscale-sass/stylesheets',
      './node_modules/manila-mixins/src'
    `
    clipboardy.writeSync(includePaths)
  }

  sayGoodBye () {
    this.log('Time to part')
    this.log('Remember to paste the includePaths for extra elegance')
    this.log('💅🦄🌈')
    this.log('Ok, now really bye!')
    this.log('😘')
  }
}

module.exports = OdinSCSS
