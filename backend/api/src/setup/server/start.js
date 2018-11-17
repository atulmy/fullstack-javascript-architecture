// Imports
import ip from 'ip'

// App Imports
import { PORT, NODE_ENV } from '../config/env'

// Start server
export default function (server) {
  console.info('SETUP - Starting server..')

  server.listen(PORT, (error) => {
    if (error) {
      console.error('ERROR - Unable to start server.')
    } else {
      console.info(`INFO - Server started on`)
      console.info(`  Local   http://localhost:${ PORT } [${ NODE_ENV }]`)
      console.info(`  Network http://${ ip.address() }:${ PORT } [${ NODE_ENV }] \n`)
    }
  })

  process.on('SIGTERM', function () {
    server.close(function () {
      console.log('Finished all requests. Server stopped.')
    })
  })
}
