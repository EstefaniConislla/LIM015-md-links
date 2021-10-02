const api = require('../src/api.js')

// describe('mdLinks', () => {
//   it('should...', () => {
//     console.log('FIX ME!')
//   })
// })

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

describe('findDirectory', () => {
  it('Comprueba que la ruta sea de un directorio', () => {
    const path = 'C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src'
    expect(api.findDirectory(path)).toBeTruthy()
  })
})

describe('readFileAndDirectory', () => {
  it('Comprueba que el archivo sea md', () => {
    const path = '\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File\\File1\\example.txt'
    expect(api.readFileAndDirectory(path)).toBeFalsy()
  })
})

describe('extractTheLinks', () => {
  it('Devuelve un array vacío si NO hay links', () => {
    const path = ['C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File\\File4\\example3.md']
    expect(api.extractTheLinks(path)).toEqual([])
  })
  it('Devuelve en un array de objetos el href, text y file de los links', () => {
    const path = ['C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File\\File2\\example2.md']
    expect(api.extractTheLinks(path)).toEqual([
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: '\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File\\File2\\example2.md'
      },
      {
        href: 'https://www.google.com/colores',
        text: 'Colores - link roto',
        file: '\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File\\File2\\example2.md'
      }
    ])
  })
})
