#!/usr/bin/env node
const api = require('./index.js')
const args = process.argv.slice(2)
const chalk = require('chalk')
const colors = require('colors')

const templateHelp = `
    ${chalk.greenBright('HELP')} 
    **********************************************************************************************************************************
      ${colors.cyan.bold('You can use the following options:')}
      ${colors.yellow('--stats')} It is used to obtain the total number of links and those that are not repeated (unique links).
      ${colors.green('--validate')} It is used to validate each link (if it is OK or FAIL, depending on the state) also obtain its href, text and file.
      ${colors.magenta('--stats --validate')} You can also enter both options and you will get as a result the total of links, unique and broken.
      In case you don't use any option, you just have to enter the $ {colors.cyan ('path')} and it will result in href, the text and the file of each link.
    **********************************************************************************************************************************
    `
const templateNull = `
    ${chalk.redBright('ENTER A ROUTE')}
    **********************************************************************************************************************************
    ${colors.yellow('Error --validate --stats')} TRY AGAIN!!
    **********************************************************************************************************************************
    `
const optionsLinks = (args) => {
  let message = ''
  if (args.length === 0) {
    message = templateNull
    console.log(message)
  } else if (args.length === 1) {
    if (args[0] === '--help') {
      message = templateHelp
      console.log(message)
    } else {
      api.mdLinks(args[0], { active: false })
        .then((arrayResponse) => {
          console.log(arrayResponse)
        })
    }
  } else if (args.length === 2) {
    api.mdLinks(args[0], {
      op1: args[1],
      active: true,
      countOptions: 1
    })
      .then((arrayResponse) => {
        console.log(arrayResponse)
      })
  } else if (args.length === 3) {
    api.mdLinks(args[0], {
      op1: args[1],
      op2: args[2],
      active: true,
      countOptions: 2
    }).then((arrayResponse) => {
      console.log(arrayResponse)
    })
  }
}

optionsLinks(args)
