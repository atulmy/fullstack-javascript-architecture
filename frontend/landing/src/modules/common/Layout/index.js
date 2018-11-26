// Imports
import React, { PureComponent } from 'react'
import { Helmet } from 'react-helmet'
import { withRouter } from 'react-router-dom'

// App Imports
import { WEB_URL } from '../../../setup/config/env'
import params from '../../../setup/config/params'
import Header from '../Header'

// Component
class Layout extends PureComponent {
  render() {
    const { children } = this.props

    return (
      <div>
        {/* Meta tags */}
        <Helmet>
          <title>{ params.site.title }</title>
          <meta name={'description'} content={params.site.description} />
          <meta name={'keywords'} content={params.site.keywords} />
          <meta name={'author'} content={params.site.author} />
          <meta name={'copyright'} content={params.site.copyright} />
          <meta name={'application-name'} content={params.site.applicationName} />

          <meta name={'og:title'} content={params.site.title} />
          <meta name={'og:description'} content={params.site.description} />
          <meta name={'og:url'} content={params.site.url} />
          <meta name={'og:image'} content={`${ WEB_URL }/images/${ params.site.image }`} />
          <meta name={'og:site_name'} content={params.site.applicationName} />
          <meta name={'og:type'} content={'website'} />
        </Helmet>

        {/* Header */}
        <Header />

        {/* Body */}
        <main>
          { children }
        </main>
      </div>
    )
  }
}

export default withRouter(Layout)
