const Cors = (props, context, next) => {
  console.log('Cors--', next)
  return next
}

export default Cors