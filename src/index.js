/* eslint-disable no-unused-vars */
const {
  resolvePathA,
  pathExists,
  extractTheLinks,
  confirmOptions
} = require('./api.js')

const mdLinks = (path, options = { validate: false }) => {
  return new Promise((resolve, reject) => {
    if (pathExists(path)) {
      const absoluteRoute = resolvePathA(path)
      const arrayLinks = extractTheLinks(absoluteRoute)
      if (arrayLinks.length > 0) {
        resolve(console.log(arrayLinks))
        // confirmOptions(arrayLinks).then(resolve)
      } else {
        //   const absoluteRoute = resolvePathA(path)
        //   const arrayMD = readFileAndDirectory(absoluteRoute)
        //   const arrayObj = extractTheLinks(arrayMD)
        //   // confirmOptions(arrayObj).then(resolve)
        reject(console.log('No hay Links'))
      }
    } else {
      reject(console.log('No existe la ruta'))
    }
  })
}

mdLinks(
  'C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File', { validate: false }
).then((res) => {
  console.log(res)
})

module.exports = { mdLinks }
