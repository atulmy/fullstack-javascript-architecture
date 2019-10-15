// Imports
import React from 'react'
import { AfterRoot, AfterData } from '@jaredpalmer/after'
import { ServerStyleSheets } from '@material-ui/styles';

// App Imports
import { URL_LANDING } from '../../../setup/config/env'

// Component
class Document extends React.Component {

  static async getInitialProps({ assets, data, renderPage }) {

    const sheets = new ServerStyleSheets()
    const page = await renderPage(App => props => sheets.collect(<App {...props} />))
    const css = sheets.toString()
    return { assets, data, ...page, css }
  }

  render() {
    const { helmet, assets, data, css } = this.props

    // get attributes from React Helmet
    const htmlAttrs = helmet.htmlAttributes.toComponent()
    const bodyAttrs = helmet.bodyAttributes.toComponent()

    return (
      <html { ...htmlAttrs }>
        <head>
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta charSet='utf-8'/>
          <meta name='viewport' content='width=device-width, initial-scale=1' />

          <link rel="apple-touch-icon" sizes="180x180" href={`${ URL_LANDING }/images/favicon/apple-touch-icon.png`} />
          <link rel="icon" type="image/png" sizes="32x32" href={`${ URL_LANDING }/images/favicon/favicon-32x32.png`} />
          <link rel="icon" type="image/png" sizes="16x16" href={`${ URL_LANDING }/images/favicon/favicon-16x16.png`} />
          <link rel="shortcut icon" href={`${ URL_LANDING }/images/favicon/favicon.ico`} type="image/x-icon" />

          { helmet.title.toComponent() }
          { helmet.meta.toComponent() }
          { helmet.link.toComponent() }

          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
          <link rel='stylesheet' type='text/css' href={`${ URL_LANDING }/reset.css`} />
          { assets.client.css && <link rel="stylesheet" href={assets.client.css} /> }
          { css ? <style id='jss-ssr'>${css}</style> : '' }
        </head>
        <body {...bodyAttrs}>
          <AfterRoot/>

          <AfterData data={data}/>

          <script
            type='text/javascript'
            src={assets.client.js}
            defer
            crossOrigin='anonymous'
          />
        </body>
      </html>
    )
  }
}

export default Document
