// Imports
import React from 'react'
import PropTypes from 'prop-types'

// App Imports
import params from '../../../setup/config/params'

// Component
const Signup = ({ translate, to }) => (
  <React.Fragment>
    <p>
      {translate.t('common.email.head.greet')} {to},
    </p>

    <p>
      {translate.t('user.signup.email.message', { site: params.site.name })}
    </p>
  </React.Fragment>
)

// Component Properties
Signup.propTypes = {
  to: PropTypes.string.isRequired,
}

export default Signup
