// App Imports
import params from '../../setup/config/params'

// Language middleware
export default async function (request, response, next) {
  let header = request.headers.language

  if (header && header !== null) {
    request.language = header
  } else {
    request.language = params.common.language.default
  }

  next()
}
