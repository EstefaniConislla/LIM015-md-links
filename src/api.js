/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
const path = require('path')
const fs = require('fs')
const fetch = require('node-fetch')
const marked = require('marked')
// const route = process.argv[2]

// To convert the path to absolute
const tobeAbsolute = (route) => path.isAbsolute(route)
// console.log(tobeAbsolute(route))
// To validate is path is absolute and return if it is relative
const resolvePathA = (route) =>
  path.isAbsolute(route) ? route : path.resolve(route)

// To access the file if it exists BOOLEAN
function pathExists (route) {
  return fs.existsSync(route)
}
// console.log(pathExists('README.md'))

// To detec if path is a file or not BOOLEAN
function findDirectory (route) {
  return fs.statSync(route).isDirectory()
}

// To read and find file and directory
const readFileAndDirectory = (route) => {
  let newArray = []
  if (findDirectory(route)) {
    const arrayDirectory = fs.readdirSync(route)
    arrayDirectory.forEach((file) => {
      const joinArray = path.join(route, '/', file)
      // console.log(joinArray)
      if (findDirectory(joinArray)) {
        newArray = newArray.concat(readFileAndDirectory(joinArray))
      } else if (path.extname(joinArray) === '.md') {
        newArray.push(joinArray)
      }
    })
  } else if (path.extname(route) === '.md') {
    newArray.push(resolvePathA(route))
  }

  return newArray
}
// console.log(readFileAndDirectory('C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File'))
// console.log(readFileAndDirectory('C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File\\File4'))

const lookFile = (route) => fs.readFileSync(route).toString()

// To extract the links
const extractTheLinks = (route) => {
  const arrayObj = []
  const renderer = new marked.Renderer() // to cacth the information to pass html
  readFileAndDirectory(route).forEach((file) => {
    renderer.link = (href, title, text) => {
      arrayObj.push({
        href: href,
        title: text,
        file: file
      })
    }
    marked(lookFile(file), { renderer })
  })
  const filteredLinks = arrayObj.filter(url => url.href.slice(0, 4) === 'http')
  return filteredLinks
}

// const linksObject = extractTheLinks(
//   'C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File\\File2\\example2.md'
//   // 'C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File\\File3\\example.md'
//   // 'C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src'
//   // 'C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\README.md'
//   // console.log(readFileAndDirectory('C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File'))
// )
// console.log(linksObject)

// To validate the options
const confirmOptions = (links) => {
  return Promise.all(links.map((element) => {
    return fetch(element.href)
      .then((response) => {
        const objResponse = {
          href: element.href,
          text: element.title.substring(0, 50),
          path: element.file,
          status: response.status,
          statusText:
            response.status > 199 && response.status < 400 ? 'Ok' : 'Fail'
        }
        return objResponse
      })
      .catch((err) => {
        const objErr = {
          href: element.href,
          text: element.title.substring(0, 50),
          path: element.file,
          status: 'There was a problem with the Fetch request. ' + err,
          statusText: 'Fail'
        }
        return objErr
      })
  }))
}
// confirmOptions(linksObject)

module.exports = {
  tobeAbsolute,
  resolvePathA,
  pathExists,
  extractTheLinks,
  confirmOptions
}
