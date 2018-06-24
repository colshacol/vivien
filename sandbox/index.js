import prettyjson from 'prettyjson'
import circular from 'circular'

global.jsonLog = (json, options = {}) => {
  console.log(prettyjson.render(
    JSON.parse(JSON.stringify(json, circular())),
    options
  ))
}

require('./app')

// console.log('App getting ready.')

