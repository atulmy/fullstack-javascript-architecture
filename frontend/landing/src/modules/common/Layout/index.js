// Imports
import React from 'react'
import Head from 'next/head'

// App Imports
import { URL_LANDING } from 'setup/config/env'
import params from 'setup/config/params'
import Header from 'modules/common/header'

// Component
const Layout = ({ children }) => {
  return (
    <div>
      {/* Meta tags */}
      <Head>
        <title>{ params.site.title }</title>
        <meta name={'description'} content={params.site.description} />
        <meta name={'keywords'} content={params.site.keywords} />
        <meta name={'author'} content={params.site.author} />
        <meta name={'copyright'} content={params.site.copyright} />
        <meta name={'application-name'} content={params.site.applicationName} />

        <meta name={'og:title'} content={params.site.title} />
        <meta name={'og:description'} content={params.site.description} />
        <meta name={'og:url'} content={params.site.url} />
        <meta name={'og:image'} content={`${ URL_LANDING }/images/${ params.site.image }`} />
        <meta name={'og:site_name'} content={params.site.applicationName} />
        <meta name={'og:type'} content={'website'} />
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}
      <main>
        { children }
      </main>
    </div>
  )
}

export default Layout
