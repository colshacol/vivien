export const VersionZeroRoute = (props, context, next) => {
  context.response.end('<html><body><h1>VERZION 0</h1></body></html>');
}

export const VersionOneRoute = (props, context, next) => {
  context.response.end('<html><body><h1>VERSION 1</h1></body></html>');
}