export default {
  array: async (self, components) => {
    for (const comp of components) {
      if (typeof comp === 'object') {
        await self.render(comp)
      }
    }
  },

  function: async (self, component) => {
    return self.render(await component(self.context))
  },

  object: async (self, component) => {
    await component
    return self.render(
      await component.self(component.props, component.context, component.next)
    )
  }
}
