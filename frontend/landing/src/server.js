// Imports
import express from 'express'
import { render } from '@jaredpalmer/after'

// App Imports
import routes from './setup/routes'
import Document from './modules/common/Document'

// Server
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST)

const server = express()
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', async (req, res) => {
    try {
      const html = await render({
        req,
        res,
        document: Document,
        routes,
        assets,
        // Anything else you add here will be made available
        // within getInitialProps(ctx)
        // e.g a redux store...
        customThing: 'thing',
      })

      res.send(html)
    } catch (error) {
      await res.json(error)
    }
  })

export default server
