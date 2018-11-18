// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

// UI Imports
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

// App Imports
import Section from '../../common/Section'

// Component
class List extends PureComponent {
  render() {
    const { classes } = this.props

    return (
      <Section>
        <Typography variant="h4">Notes List</Typography>

        <p>Cum bromium potus, omnes urbses imperium talis, regius particulaes.</p>
      </Section>
    )
  }
}


// Component Properties
List.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(List)
