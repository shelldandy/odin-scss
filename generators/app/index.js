'use strict'

const Generator = require('yeoman-generator')

class OdinSCSS extends Generator {
  copyScss () {
    this.fs.copy(
      this.templatePath('**/*'),
      this.destinationPath('src/assets/styles')
    )
  }
  sayGoodBye () {
    this.log('Time to part')
  }
}

module.exports = OdinSCSS
