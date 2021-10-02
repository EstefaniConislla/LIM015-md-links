const api = require('../src/api.js')

const mdLinks = (path, options = {}) => {
  return new Promise((resolve, reject) => {
    if (api.pathExists(path)) {
      let arrayLinks = []
      if (!api.tobeAbsolute(path)) {
        path = api.resolvePathA(path)
      }
      arrayLinks = api.extractTheLinks(path)// aQui traemos los links de los archivos md
      if (options.active) {
        if (options.op1 === '--stats' && options.countOptions === 1) {
          const linksUnique = new Set(arrayLinks.map((arrayLinks) => arrayLinks.href))
          const objResult = {
            Total: arrayLinks.length,
            Unique: linksUnique.size
          }
          resolve(objResult)
        } else if (options.op1 === '--validate' && options.countOptions === 1) {
          api.confirmOptions(arrayLinks).then((result) => {
            arrayLinks = result
            resolve(arrayLinks)
          })// llamamos al fetch
        } else if (((options.op1 === '--stats' && options.op2 === '--validate') ||
        (options.op1 === '--validate' && options.op2 === '--stats')) && options.countOptions === 2) {
          api.confirmOptions(arrayLinks).then((result) => {
            arrayLinks = result
            const linksUnicos = new Set(arrayLinks.map((arrayLinks) => arrayLinks.href))
            const objResult = {
              Total: arrayLinks.length,
              Unique: linksUnicos.size,
              Broken: arrayLinks.filter(link => link.status > 400).length
            }
            resolve(objResult)
          })// llamamos al fetch
        }
      } else {
        resolve(arrayLinks)
      }
    } else {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('No existe la ruta =(')
    }
  })
}

module.exports = { mdLinks }
