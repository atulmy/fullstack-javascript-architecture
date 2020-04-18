// Imports
import React from 'react'
import { Helmet } from 'react-helmet'

// UI Imports
import Typography from '@material-ui/core/Typography'

// App Imports
import params from '../../../setup/config/params'
import Layout from '../../common/Layout'
import Section from '../../common/Section'

// Component
const Contact = () => (
  <Layout>
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
        { params.site.contact.address }.<br/>
        { params.site.contact.phone }<br/>
        { params.site.contact.email }
      </address>
    </Section>
  </Layout>
)

export default Contact
