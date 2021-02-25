// Imports
import React from 'react'
import Head from 'next/head'

// UI Imports
import Typography from '@material-ui/core/Typography'

// App Imports
import params from 'setup/config/params'
import Layout from 'modules/common/layout'
import Section from 'modules/common/section'

// Component
const Contact = () => (
  <Layout>
    <Section>
      {/* Meta tags */}
      <Head>
        <title>Contact</title>
      </Head>

      {/* Content */}
      <Typography variant='h4'>Contact</Typography>

      <p>Bromium potus, omnes urbses imperium talis, regius particulaes.</p>

      <address>
        {params.site.name}, <br />
        {params.site.contact.address}.<br />
        {params.site.contact.phone}
        <br />
        {params.site.contact.email}
      </address>
    </Section>
  </Layout>
)

export default Contact
