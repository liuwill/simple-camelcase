'use strict'

function toUpperCamel(variable) {
  if (typeof variable !== 'string') {
    throw new Error('string only')
  }

  if (!variable) {
    return ''
  }

  var variableList = variable.toLowerCase().split('_')
  var targetList = []
  for (var i in variableList) {
    var str = variableList[i]

    if (!/[a-zA-Z]/.test(str)) {
      continue
    }

    var first = str.substr(0, 1).toUpperCase()
    var left = str.substr(1)

    targetList.push(first + left)
  }

  return targetList.join('')
}

function toLowerCamel(variable) {
  var str = toUpperCamel(variable)

  var first = str.substr(0, 1).toLowerCase()
  var left = str.substr(1)

  return first + left
}

module.exports = {
  toLowerCamel: toLowerCamel,
  toUpperCamel: toUpperCamel
}
