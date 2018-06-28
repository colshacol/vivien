import warning from 'warning'

export const Router = async (props, context, next) => {
  // handleInvalidNext(next)

  return <If condition={context.vivien.matchPath(props.prefix)}>{next}</If>
}

// const handleInvalidNext = (next) => {
//   const nonRouteNext = next.some((handler) => {
//     if (handler) {
//       return !['Route', 'Router'].includes(handler.self.name)
//     } else {
//       return false
//     }
//   })

//   warning(!nonRouteNext, 'Router -> Non <Route /> next found.')
// }
