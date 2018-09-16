import Route from 'route-parser'

export default async (props, context, next) => {
  const methodMatches = matchMethod(props.method, context)
  const routeMatches = matchRoute(props.match, context)

  return (
    <If condition={methodMatches}>
      <If condition={routeMatches}>{next}</If>
    </If>
  )
}

const matchMethod = (requiredMethod, context) => {
  return requiredMethod
    ? requiredMethod.toLowerCase() === context.method.toLowerCase()
    : true
}

const matchRoute = (match, context) => {
  if (!match) return true

  const nextRoute = context.router.matched + match
  const prefixMatches = context.url.startsWith(nextRoute)

  const route = new Route(match)
  const routeMatches = route.match(nextRoute)

  // If the url starts with the current route (i.e '/foo/bar' startsWith '/foo')
  // or if the current route matches the url entirely, continue.
  if (prefixMatches || routeMatches) {
    context.router.matched = nextRoute
    return true
  }

  return false
}
