// Imports
import React from 'react'

// App Imports
import params from '../../../setup/config/params'

// Component
const Layout = ({ translate, children }) => (
  <React.Fragment>
    {children}

    <p>{translate.t('common.email.footer.message')}</p>

    <p>
      {translate.t('common.email.footer.thanks')}, <br />
      {params.site.name}
    </p>
  </React.Fragment>
)

export default Layout
