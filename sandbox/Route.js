const Route = (props, context, next) => {
  if (props.path !== context.request.url) return null;
  if (props.method && props.method.toUpperCase() !== context.request.method) return null;
  return props.component(props, context, next)
}

export default Route