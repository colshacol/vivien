export const Route = (props, context, next) => {
  if (!methodMatches(props, context)) return null
  if (!context.vivien.matchPath(props.path)) return null

  return props.component(props, context, next)
}

const methodMatches = (props, context) => {
  const method = methodFromProps(props)
  const matches = method === context.request.method

  return matches
}

const methodFromProps = (props) => {
  return (
    (props.get && 'GET') ||
    (props.put && 'PUT') ||
    (props.post && 'POST') ||
    (props.delete && 'DELETE') ||
    'GET'
  )
}
