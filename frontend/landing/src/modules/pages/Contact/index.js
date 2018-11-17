// Imports
import React from 'react'
import Helmet from 'react-helmet'

// UI Imports
import Typography from '@material-ui/core/Typography'

// App Imports
import { CONTACT_PHONE, CONTACT_EMAIL, CONTACT_ADDRESS } from '../../../setup/config/env'
import params from '../../../setup/config/params'
import Section from '../../common/Section'

// Component
const Contact = () => (
  <Section>
    {/* Meta tags */}
    <Helmet>
      <title>Contact</title>
    </Helmet>

    {/* Content */}
    <Typography variant="h4">Contact</Typography>

    <p>Bromium potus, omnes urbses imperium talis, regius particulaes.</p>

    <address>
      { params.site.name }, <br />
      { CONTACT_ADDRESS }.<br/>
      { CONTACT_PHONE }<br/>
      { CONTACT_EMAIL }
    </address>
  </Section>
)

export default Contact
