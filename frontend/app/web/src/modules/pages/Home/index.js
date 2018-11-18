// Imports
import React from 'react'
import PropTypes from 'prop-types'

// UI Imports
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import Typography from '@material-ui/core/Typography/Typography'
import { withStyles } from '@material-ui/core/styles/index'
import styles from './styles'

// App Imports
import Section from '../../common/Section'
import { Link } from 'react-router-dom'
import routes from '../../../setup/routes'
import Button from '@material-ui/core/Button/Button'

// Component
const Home = ({ classes }) => (
  <div>
    <Toolbar>
      <Typography variant="h6" color="inherit" className={classes.grow}>
        Home
      </Typography>
    </Toolbar>

    <Section>
      <Typography paragraph>Bromium potus, omnes urbses imperium talis, regius particulaes.</Typography>

      <Typography>
        <Link to={routes.userSignup.path}>
          <Button variant="contained" color="primary">Signup</Button>
        </Link>

        <Link to={routes.userLogin.path}>
          <Button variant="outlined" color="primary" style={{ marginLeft: 10 }}>Login</Button>
        </Link>
      </Typography>
    </Section>
  </div>
)

// Component Properties
Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)

