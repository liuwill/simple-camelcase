'use strict'

var chai = require('chai')

chai.should()
var expect = chai.expect

var simpleCamelcase = require('../')

describe('#simple camelcase', function () {
  describe('# to upper camel', function () {
    it('return upper case', function () {
      var str = 'will'
      var result = 'Will'

      expect(result).to.be.equal(simpleCamelcase.toUpperCamel(str))
    })

    it('return blank string', function () {
      expect(simpleCamelcase.toUpperCamel('')).to.be.equal('')
    })

    it('throw error with none', function () {
      expect(function () { simpleCamelcase.toUpperCamel({}) }).to.throw()
    })
  })

  describe('# to lower camel', function () {
    it('will return upper camel', function () {
      var str = 'Will'
      var result = 'will'

      expect(result).to.be.equal(simpleCamelcase.toLowerCamel(str))
    })

    it('return lower camel', function () {
      var str = 'User__nAme'
      var result = 'userName'

      expect(simpleCamelcase.toLowerCamel(str)).to.be.equal(result)
    })
  })
})
