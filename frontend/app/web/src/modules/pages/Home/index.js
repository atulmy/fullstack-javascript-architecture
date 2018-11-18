// Imports
import React from 'react'
import { Link } from 'react-router-dom'

// UI Imports
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

// App Imports
import routes from '../../../setup/routes'
import Section from '../../common/Section'

// Component
const Home = () =>  (
  <Section>
    <Typography variant="h4">Home</Typography>

    <p>Cum bromium potus, omnes urbses imperium talis, regius particulaes.</p>

    <p>
      <Link to={routes.userSignup.path}>
        <Button variant="contained" color="primary">Signup</Button>
      </Link>

      <Link to={routes.userLogin.path}>
        <Button variant="outlined" color="primary" style={{ marginLeft: 10 }}>Login</Button>
      </Link>
    </p>
  </Section>
)

export default Home
