'use strict'

const Generator = require('yeoman-generator')

class OdinSCSS extends Generator {
  copyScss () {
    this.log('You are pretty cool')
  }
  sayGoodBye () {
    this.log('Time to part')
  }
}

module.exports = OdinSCSS
