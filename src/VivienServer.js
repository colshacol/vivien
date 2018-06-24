import http from 'http'
import Vivien from './Vivien'

export default (component, port, options) => {
  const server = http.createServer((request, response) => {
    new Vivien(component, {
      request,
      response
    })
  })

  server.listen(port, () => {
    console.log('Listening on port: ' + port)
  })
}
