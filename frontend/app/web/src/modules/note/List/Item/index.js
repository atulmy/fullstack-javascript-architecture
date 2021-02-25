// Imports
import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

// UI Imports
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

// App Imports

// Component
const Item = ({ note: { _id, note, createdAt }, onDelete, classes }) => (
  <Card className={classes.root}>
    <CardContent className={classes.content}>
      <Typography className={classes.note}>{note}</Typography>

      <Typography color='textSecondary'>
        {moment(createdAt).format('YYYY-MM-DD hh:mm a')}
      </Typography>
    </CardContent>

    <CardActions>
      <Button size='small' onClick={onDelete(_id)}>
        Delete
      </Button>
    </CardActions>
  </Card>
)

// Component Properties
Item.propTypes = {
  note: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Item)
