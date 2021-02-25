// Imports
import React, { useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

// UI imports
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import 'nprogress/nprogress.css'
import 'pages/reset.css'

// App imports
import { isDevelopment } from 'setup/helpers'
import params from 'setup/config/params'
import { URL_WEB } from 'setup/config/env'
import { initGA, logPageView } from 'setup/analytics'
import theme from 'setup/theme'

// Top loading indicator
NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// App
export default function App({ Component, pageProps }) {
  // on mount
  useEffect(() => {
    if (!isDevelopment()) {
      // Google Analytics
      initGA()
      logPageView()
      Router.events.on('routeChangeComplete', logPageView)
    }

    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <meta name='theme-color' content='#f4db4a' />
        <meta name='msapplication-TileColor' content='#f4db4a' />
        <link
          rel='mask-icon'
          href={`${URL_WEB}/favicon/safari-pinned-tab.svg`}
          color='#f4db4a'
        />
        <link rel='manifest' href={`${URL_WEB}/site.webmanifest`} />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href={`${URL_WEB}/favicon/apple-touch-icon.png`}
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href={`${URL_WEB}/favicon/favicon-32x32.png`}
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href={`${URL_WEB}/favicon/favicon-16x16.png`}
        />
        <link
          rel='shortcut icon'
          type='image/x-icon'
          href={`${URL_WEB}/favicon/favicon.ico`}
        />

        <meta name='author' content={params.site.author} />
        <meta name='copyright' content={params.site.author} />
        <meta name='application-name' content={params.site.author} />

        <meta name='robots' content='All' />
        <meta name='robots' content='index, follow' />

        <meta name='og:site_name' content={params.site.author} />
        <meta name='og:type' content='website' />

        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap'
        />
      </Head>

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
