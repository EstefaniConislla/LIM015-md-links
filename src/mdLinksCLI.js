const api = require('../src/index.js')
const args = process.argv.slice(2)
const chalk = require('chalk')
const colors = require('colors')

const templateHelp = `
    ${chalk.blueBright('(◕‿‿◕｡)━━━━ ☆ ☆ ˚ஐ₊✧˳ஐ༚✧˚ஐ₊✧˳ஐ༚✧ ━━━ HELP ━━━ ˚(◕‿‿◕｡)')} 
    **********************************************************************************************************************************
      ${colors.cyan.bold('You can use the following options:')}
      ${colors.yellow('--stats')} It is used to obtain the total number of links and those that are not repeated (unique links).
      ${colors.green('--validate')} It is used to validate each link (if it is OK or FAIL, depending on the state) also obtain its href, text and file.
      ${colors.magenta('--stats --validate')} You can also enter both options and you will get as a result the total of links, unique and broken.
      ${colors.blue('--stats --validate --detail')} You can also add the command --detail and the result will be displayed in detail.
      In case you don't use any option, you just have to enter the $ {colors.cyan ('path')} and it will result in href, the text and the file of each link.
    **********************************************************************************************************************************
    `
const templateNull = `
    ${chalk.redBright('(◕‿‿◕｡)━━━━ ☆ ☆ ˚ஐ₊✧˳ஐ༚✧˚ஐ₊✧˳ஐ༚✧ ━━━ INGRESE UNA RUTA  ━━━ ˚(◕‿‿◕｡)')} 
    `
const validate = (args) => {
  let mensaje = ''
  if (args.length === 0) {
    mensaje = templateNull
    return mensaje
  } else if (args.length === 1) {
    if (args[0] === '--help') {
      mensaje = templateHelp
      return mensaje
    } else {
      api.mdLinks(args[0], { active: false })
        .then((arrayResponse) => {
          console.log(arrayResponse)
        })
    }
  } else if (args.length === 2) {
    api.mdLinks(args[0], {
      op: args[1],
      active: true,
      countOption: 1
    })
      .then((arrayResponse) => {
        console.log(arrayResponse)
      })
  } else if (args.length === 3) {
    api.mdLinks(args[0], {
      op: args[1],
      opc: args[2],
      active: true,
      countOption: 2
    }).then((arrayResponse) => {
      console.log(arrayResponse)
    })
  }
}

validate(args)
