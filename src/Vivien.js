// import finalhandler from 'finalhandler'
import Server from './VivienServer'
import kindOf from 'kind-of'

import renderers from './renderers'

const DEFAULT_ROUTER = {
  matched: ''
}

class Context {
  method: string
  url: string

  constructor(request, response, vivien) {
    this.vivien = () => vivien
    this.router = DEFAULT_ROUTER
    this.request = request
    this.response = response
    this.method = request.method
    this.url = request.url
  }

  header = (key, value) => {
    return value
      ? this.response.setHeader(key, value)
      : this.response.getHeader(key)
  }

  send = (data) => {
    return this.response.end(data)
  }

  render = async (component) => {
    const type = kindOf(component)
    const renderer = renderers[type]
    return renderer ? await renderer(this, component) : null
  }

  create = (self, props = {}, ...next) => {
    return {
      context: this,
      self,
      props,
      next
    }
  }
}

export default class Vivien {
  static start = Server

  constructor(request, response, Component) {
    const context = new Context(request, response, this)
    this.context = context
    context.render(<Component />)
  }
}
