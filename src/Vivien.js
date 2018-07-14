import Server from './VivienServer'
import { Signale } from 'signale'

import { renderFunction } from './renderers'
import { renderObject } from './renderers'
import { renderArray } from './renderers'

const logger = new Signale({
  scope: 'vivian'
})

export default class Vivien {
  constructor(Component, context) {
    this.loggers.begin(context)
    context.vivien = this
    context.matchedPath = ''
    context.unmatchedPath = ''
    context.path = context.request.url
    context.unmatchedPath = context.path
    
    awaiting = false
    done = false
    history = []

    context.send = (...args) => {
      this.done = true
      context.response.send(...args)
    }

    context.end = (...args) => {
      this.done = true
      context.response.end(...args)
    }

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
    const self = this

    if (this.done || !component) {
      return null
    }

    this.history.push(component)

    if (typeof component === 'function') {
      return renderFunction(self, component)
    }

    if (Array.isArray(component)) return renderArray(self, component)
    if (typeof component === 'object') return renderObject(self, component)
  }

  matchPath = (path) => {
    if (this.context.unmatchedPath.startsWith(path)) {
      this.loggers.matchedPath(path)

      this.context.matchedPath = `${this.context.matchedPath}${path}`
      this.context.unmatchedPath = this.context.unmatchedPath.substr(
        path.length
      )

      this.loggers.newMatchedPath(path)
      this.loggers.newUnmatchedPath(path)
      return true
    }

    return false
  }

  static listen = (...args) => Server(...args)
  loggers = loggers(this)
}

const loggers = (self) => {
  return {
    begin(context) {
      logger.start(
        `Starting request handler: ${context.request.method.toUpperCase()} -> ${
          context.request.url
        }`
      )
    },
    matchedPath(path) {
      logger.info(`Matched path: "${path}" in "${self.context.unmatchedPath}"`)
    },
    newMatchedPath() {
      logger.info(`New matched path: "${self.context.matchedPath}"`)
    },
    newUnmatchedPath() {
      logger.info(`New unmatched path: "${self.context.unmatchedPath}"\n`)
    }
  }
}
