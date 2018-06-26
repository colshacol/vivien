import warning from 'warning'

export const Router = (props, context, next) => {
  handleInvalidNext(next)
  if (!context.vivien.matchPath(props.prefix)) return null

  return next
}

const handleInvalidNext = (next) => {
  const nonRouteNext = next.some((handler) => {
    return !['Route', 'Router'].includes(handler.self.name)
  })

  warning(!nonRouteNext, 'Router -> Non <Route /> next found.')
}
