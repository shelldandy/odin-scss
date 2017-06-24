'use strict'

const Generator = require('yeoman-generator')
const clipboardy = require('clipboardy')

class OdinSCSS extends Generator {
  constructor (args, opts) {
    super(args, opts)
    this.option('yarn')
  }

  welcome () {
    this.log('Hi, welcome to OdinSCSS')
    this.log('Created with love by Miguel Palau')
  }

  askForYarn () {
    return this.options.yarn
    ? true
    : this.prompt([{
      type: 'confirm',
      name: 'yarn',
      message: 'Should I install extra dependencies needed with Yarn?',
      default: true
    }])
    .then(props => {
      this.options.yarn = props.yarn
    })
  }

  copyScss () {
    this.fs.copy(
      this.templatePath('**/*'),
      this.destinationPath('src/assets/styles')
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
