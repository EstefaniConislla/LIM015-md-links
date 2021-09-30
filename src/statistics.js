const commander = require('commander')

const program = new commander.Command()
program.version('2.0.0').description('Stadistics about markdown files')

// Defining valid options that the user can enter
program
  .option('-v, --validate', 'to validate the links inside of a markdown file')
  .option(
    '-s, --stats',
    'to show some basic stats about the links (total of links and unique ones'
  )
// End of valid options for my package

program.parse(process.argv)

// Funcion que obtiene
function selectOption () {
  const option = {}
  option.validate = program.validate
  option.stats = program.stats
  // console.log(option);
  return option
}

module.exports = { selectOption }
