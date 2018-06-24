import http from 'http'
import Koa from 'koa'
import Vivien from './Vivien'
import nanoid from 'nanoid'

export default (component, port, options) => {
  const server = http.createServer((request, response) => {
    new Vivien(component, {
      id: nanoid(),
      request,
      response
    })
  })
  
  server.listen(port, () => {
    console.log('Listening on port: ' + port)
  })
}
