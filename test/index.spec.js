/* eslint-disable no-undef */
const api = require('../src/index.js')
const fetch = require('node-fetch')
jest.mock('node-fetch')

describe('mdLinks', () => {
  it('Deberia ser una función', () => {
    expect(typeof api.mdLinks).toBe('function')
  })
  it('Si es option false deberia retornar un array de objeto', () => {
    const objectLinks = [{
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
      title: 'Array.prototype.map() - MDN',
      file: 'C:\\\\Users\\\\Usuario\\\\Documents\\\\LABORATORIA\\\\LIM015-md-links\\\\src\\\\File\\\\File2\\\\example2.md'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
      title: 'Array.prototype.filter() - MDN',
      file: 'C:\\\\Users\\\\Usuario\\\\Documents\\\\LABORATORIA\\\\LIM015-md-links\\\\src\\\\File\\\\File2\\\\example2.md'
    }]
    return api.mdLinks('C:\\\\Users\\\\Usuario\\\\Documents\\\\LABORATORIA\\\\LIM015-md-links\\\\src\\\\File\\\\File2\\\\example2.md', { active: false }).then((result) => {
      expect(result).toEqual(objectLinks)
    })
  })

  it('comprobacion con opcion --validate', () => {
    const expectArray = [{
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
      text: 'Array.prototype.sort() - MDN',
      path: 'C:\\\\Users\\\\Usuario\\\\Documents\\\\LABORATORIA\\\\LIM015-md-links\\\\src\\\\File\\\\File2\\\\example2.md',
      status: 200,
      statusText: 'Ok'
    },
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach',
      text: 'Array.prototype.forEach() - MDN',
      path: 'C:\\\\Users\\\\Usuario\\\\Documents\\\\LABORATORIA\\\\LIM015-md-links\\\\src\\\\File\\\\File2\\\\example2.md',
      status: 200,
      statusText: 'Ok'
    }]

    fetch.mockReturnValue(Promise.resolve({
      status: 200
    }))
    return api.mdLinks('C:\\\\Users\\\\Usuario\\\\Documents\\\\LABORATORIA\\\\LIM015-md-links\\\\src\\\\File\\\\File2\\\\example2.md', { op1: '--validate', active: true, countOptions: 1 }).then((result) => {
      expect(result).toEqual(expectArray)
    })
  })
  it('comprobacion con opcion --stats', () => {
    const expectObject = {
      Total: 7,
      Unique: 7
    }
    return api.mdLinks('C:\\\\Users\\\\Usuario\\\\Documents\\\\LABORATORIA\\\\LIM015-md-links\\\\src\\\\File\\\\File2\\\\example2.md', { op1: '--stats', active: true, countOptions: 1 }).then((result) => {
      expect(result).toEqual(expectObject)
    })
  })
  it('comprobacion con opciones --stats --validate', () => {
    const expectObject = {
      Total: 7,
      Unique: 7,
      Broken: 0
    }
    fetch.mockReturnValue(Promise.resolve({
      status: 200
    }))
    return api.mdLinks('C:\\\\Users\\\\Usuario\\\\Documents\\\\LABORATORIA\\\\LIM015-md-links\\\\src\\\\File\\\\File2\\\\example2.md', { op1: '--stats', op2: '--validate', active: true, countOptions: 2 }).then((result) => {
      expect(result).toEqual(expectObject)
    })
  })
  it('comprobacion con opciones --validate  --stats', () => {
    const expectObject = {
      Total: 7,
      Unique: 7,
      Broken: 1
    }
    fetch.mockReturnValueOnce(Promise.resolve({
      status: 404
    }))
    return api.mdLinks('C:\\\\Users\\\\Usuario\\\\Documents\\\\LABORATORIA\\\\LIM015-md-links\\\\src\\\\File\\\\File2\\\\example2.md', { op1: '--validate', op2: '--stats', active: true, countOptions: 2 }).then((result) => {
      expect(result).toEqual(expectObject)
    })
  })
})
