/* eslint-disable no-undef */
const api = require('../src/api.js')
const { mdLinks } = require('../src/index.js')

describe('pathExists', () => {
  it('Deberia ser una función', () => {
    expect(typeof api.pathExists).toBe('function')
  })
})

describe('tobeAbsolute', () => {
  it('Comprueba que la ruta no es absoluta', () => {
    const path = 'README.md'
    expect(api.tobeAbsolute(path)).toBeFalsy()
  })
})

describe('findDirectory', () => {
  it('Deberia ser una función', () => {
    expect(typeof api.findDirectory).toBe('function')
  })
})

describe('resolvePathA', () => {
  it('Debería ser una función', () => {
    expect(typeof api.resolvePathA).toBe('function')
  })
  it('Debería retornar una ruta absoluta', () => {
    expect(api.resolvePathA('src\\File\\File2\\example2.md')).toBe('C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File\\File2\\example2.md')
  })
  it('Debería ser true para ruta absoluta', () => {
    expect(api.resolvePathA('\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File\\File2\\example2.md')).toBeTruthy()
  })
})

describe('readFileAndDirectory', () => {
  it('Debería ser una función', () => {
    expect(typeof api.readFileAndDirectory).toBe('function')
  })
  it('Debería mostrar todos los archivos md', () => {
    expect(readFileAndDirectory('File')).toEqual(['example2.md', 'example.md', 'example3.md'])
  })
})

describe('extractTheLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof api.extractTheLinks).toBe('function')
  })
  it('Devuelve en un array de objetos con el href, text y file de los links', () => {
    const path = ['C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File']
    expect(api.extractTheLinks(path)).toEqual([
      {
        href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
        title: 'Arreglos',
        file: 'C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File\\File2\\example2.md'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/ow',
        title: 'Array - MDN',
        file: 'C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File\\File2\\example2.md'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
        title: 'Array.prototype.sort() - MDN',
        file: 'C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File\\File2\\example2.md'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach',
        title: 'Array.prototype.forEach() - MDN',
        file: 'C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File\\File2\\example2.md'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
        title: 'Array.prototype.map() - MDN',
        file: 'C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File\\File2\\example2.md'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
        title: 'Array.prototype.filter() - MDN',
        file: 'C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File\\File2\\example2.md'
      },
      {
        href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reducep',
        title: 'Array.prototype.reduce() - MDN',
        file: 'C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File\\File2\\example2.md'
      },
      {
        href: 'https://nodejs.org/api/fs.html',
        title: 'File system - Documentación oficial (en inglés)',
        file: 'C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File\\File3\\example.md'
      },
      {
        href: 'https://nodejs.org/api/path.html',
        title: 'Path - Documentación oficial (en inglés)',
        file: 'C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File\\File3\\example.md'
      },
      {
        href: 'https://pages.github.com/',
        title: 'Sitio oficial de GitHub Pages',
        file: 'C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File\\File3\\example.md'
      }
    ])
  })
})

describe('confirmOptions', () => {
  it('Deberia ser una función', () => {
    expect(typeof api.confirmOptions).toBe('function')
  })
})

describe('mdLinks', () => {
  it('Deberia ser una función', () => {
    expect(typeof mdLinks).toBe('function')
  })
})
