/* eslint-disable no-undef */
const fetch = require('node-fetch')
jest.mock('node-fetch')
const path = require('../src/api.js')
// mockResolvedValueOnce
// mockReturnValueOnce

describe('confirmOptions', () => {
  it('Deberia ser un statusText : 0k', () => {
    const objectLinks = [{
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
      title: 'Arreglos',
      file: 'C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File\\File2\\example2.md'
    }
    ]
    const objectResponse = [{
      href: 'https://curriculum.laboratoria.la/es/topics/javascript/04-arrays',
      text: 'Arreglos',
      path: 'C:\\Users\\Usuario\\Documents\\LABORATORIA\\LIM015-md-links\\src\\File\\File2\\example2.md',
      status: 200,
      statusText: 'Ok'
    }]
    fetch.mockReturnValue(Promise.resolve({
      status: 200,
      statusText: 'OK'
    }))
    return path.confirmOptions(objectLinks)
      .then((result) => {
        expect(result).toEqual(objectResponse)
      })
  })
})

describe('confirmOptions', () => {
  it('Deberia ser un statusText : 404', () => {
    const objectLinks = [{
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/ow',
      title: 'Array - MDN',
      file: 'C:\\\\Users\\\\Usuario\\\\Documents\\\\LABORATORIA\\\\LIM015-md-links\\\\src\\\\File\\\\File2\\\\example2.md'
    }]
    const objectResponse = [{
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/ow',
      text: 'Array - MDN',
      path: 'C:\\\\Users\\\\Usuario\\\\Documents\\\\LABORATORIA\\\\LIM015-md-links\\\\src\\\\File\\\\File2\\\\example2.md',
      status: 404,
      statusText: 'Fail'
    }]
    fetch.mockReturnValueOnce(Promise.resolve({
      status: 404,
      statusText: 'Fail'
    }))
    return path.confirmOptions(objectLinks)
      .then((result) => {
        expect(result).toEqual(objectResponse)
      })
  })
})
