export const renderObject = async (self, component) => {
  await component
  return this.render(
    await component.self(component.props, component.context, component.next)
  )
}