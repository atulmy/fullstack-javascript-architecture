// Imports
import { Server } from 'http'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// UI Imports
import { createGenerateClassName } from '@material-ui/core/styles'
import { SheetsRegistry } from 'jss'
import { JssProvider } from 'react-jss'

// App Imports
import { LANDING_URL, NODE_ENV, GA_TRACKING_ID } from '../config/env'
import params from '../config/params'
import routes from '../routes'
import App from '../client/App'
import view from './view'

export default function (app) {
  console.info('SETUP - Load routes..')

  // Match any Route
  app.get('*', (request, response) => {

    // HTTP status code
    let status = 200

    const matches = Object.values(routes).reduce((matches, route) => {
      const match = matchPath(request.url, typeof route.path === 'function' ? route.path() : route.path, route)

      if (match && match.isExact) {
        matches.push({
          route,
          match
        })
      }
      return matches
    }, [])

    // No such route, send 404 status
    if (matches.length === 0) {
      status = 404
    }

    const sheetsRegistry = new SheetsRegistry()
    const generateClassName = createGenerateClassName()

    const html = renderToString(
      <StaticRouter context={{}} location={request.url}>
        <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
          <App/>
        </JssProvider>
      </StaticRouter>
    )

    // Get styles
    const css = sheetsRegistry.toString()

    // Get Meta header tags
    const meta = Helmet.renderStatic()

    const markup = view({ LANDING_URL, NODE_ENV, GA_TRACKING_ID }, params, { meta, html, css })

    // Finally send generated HTML with initial data to the project
    return response.status(status).send(markup)
  })
}
