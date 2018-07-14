export const renderArray = async (self, components) => {
  for (const comp of components) {
    if (typeof comp === 'object') {
      await this.render(comp)
    }
  }
}