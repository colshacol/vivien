import VivienServer from './VivienServer'

export default class Vivien {
  constructor(Component, context) {
    context.vivien = this
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

    if (typeof component.self === 'function') {
      this.render(
        component.self(component.props, component.context, component.next)
      )
    }
  }

  static listen = (...args) => VivienServer(...args)
}
