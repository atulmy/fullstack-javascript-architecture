// Imports
import React from 'react'
import Link from 'next/link'

// UI Imports
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles/index'
import styles from './styles'

// App Imports
import routes from 'setup/routes'
import Section from 'modules/common/section'

// Component
const NotFound = ({ classes }) => (
  <Section>
    <Typography variant={'h5'} gutterBottom>
      Its a 404
    </Typography>

    <Typography variant={'subtitle1'} gutterBottom>
      The page you are looking for does not exists or has been removed.
    </Typography>

    <Link href={routes.pagesHome.path}>
      <Button variant={'contained'} color={'primary'} className={classes.button}>
        Back to Home
      </Button>
    </Link>
  </Section>
)

export default withStyles(styles)(NotFound)

