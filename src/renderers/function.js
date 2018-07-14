export const renderFunction = async (self, component) => {
  return self.render(await component(self.context))
}