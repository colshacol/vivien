const BodyParser = (props, context, next) => {
  console.log('BodyParser--', next)
  return next
}

export default BodyParser