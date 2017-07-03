'use strict'

const Generator = require('yeoman-generator')
const clipboardy = require('clipboardy')

class OdinSCSS extends Generator {
  welcome () {
    this.log('Hi, welcome to OdinSCSS')
    this.log('Created with love by Miguel Palau')
  }

  prompts () {
    return this.prompt([
      {
        type: 'confirm',
        name: 'yarn',
        message: 'Should I install extra dependencies needed with Yarn?',
        default: true
      }, {
        type: 'input',
        name: 'basePath',
        message: 'Where do I install this? Use a dot (.) to install on this folder.',
        default: 'src/assets/styles'
      }, {
        type: 'confirm',
        name: 'deleteFolder',
        message: 'Delete the original styles folder?',
        default: true
      }
    ])
    .then(props => {
      this.options.yarn = props.yarn
      this.options.basePath = props.basePath
      this.options.deleteFolder = props.deleteFolder
    })
  }

  copyScss () {
    this.options.deleteFolder
      ? this.fs.delete(this.options.basePath)
      : this.log('Skipping deleting of base folder')
    this.fs.copy(
      this.templatePath('**/*'),
      this.destinationPath(this.options.basePath)
    )
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
