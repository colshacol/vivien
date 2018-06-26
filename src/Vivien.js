import VivienServer from './VivienServer'
import { Signale } from 'signale'

global.log = new Signale({})

export default class Vivien {
  constructor(Component, context) {
    console.log('\n')
    log.start(`STARTING REQUEST HANDLER`)
    context.vivien = this
    context.matchedPath = ''
    context.unmatchedPath = ''
    context.path = context.request.url
    context.unmatchedPath = context.path
    this.context = context
    this.render(<Component />)
  }

  create = (self, props = {}, ...next) => {
    return {
      context: this.context,
      self,
      props,
      next
    }
  }

  render = (component) => {
    if (!component) return null

    if (Array.isArray(component)) {
      return component.forEach(this.render)
    }

    // log.debug(component.self.name)
    if (typeof component.self === 'function') {
      this.render(
        component.self(component.props, component.context, component.next)
      )
    }
  }

  matchPath = (path) => {
    const { matchedPath, unmatchedPath } = this.context

    if (this.context.unmatchedPath.startsWith(path)) {
      log.success(`MATCHED PATH: "${path}" in "${this.context.unmatchedPath}"`)
      this.context.matchedPath = `${matchedPath}${path}`
      this.context.unmatchedPath = unmatchedPath.substr(path.length)
      log.info(`NEW MATCHED PATH: "${this.context.matchedPath}"`)
      log.info(`NEW UNMATCHED PATH: "${this.context.unmatchedPath}"`)
      return true
    }

    return false
  }

  static listen = (...args) => VivienServer(...args)
}
