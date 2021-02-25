// Imports
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

// UI Imports
import Grid from '@material-ui/core/Grid/Grid'
import TextField from '@material-ui/core/TextField/TextField'
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import Typography from '@material-ui/core/Typography/Typography'
import Paper from '@material-ui/core/Paper/Paper'
import IconButton from '@material-ui/core/IconButton'
import IconCheck from '@material-ui/icons/Check'
import IconArrowBack from '@material-ui/icons/ArrowBack'
import IconClose from '@material-ui/icons/Close'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

// App Imports
import routes from '../../../setup/routes'
import { messageShow } from '../../common/api/actions'
import { create } from '../api/actions/mutation'
import Section from '../../common/Section'

// Component
const Create = ({ classes, history }) => {
  // state
  const [isSubmitting, isSubmittingToggle] = useState(false)
  const [note, setNote] = useState('')
  const dispatch = useDispatch()

  // on create
  const onCreate = async (event) => {
    event.preventDefault()

    isSubmittingToggle(true)

    try {
      const { data } = await create({ note })

      isSubmittingToggle(false)

      dispatch(messageShow(data.message))

      if (data.success) {
        history.push(routes.noteList.path)
      }
    } catch (error) {
      isSubmittingToggle(false)

      dispatch(messageShow('Some error occurred. Please try again.'))
    }
  }

  // on change
  const onChange = (event) => {
    setNote(event.target.value)
  }

  // render
  return (
    <div>
      <Toolbar>
        <Link to={routes.noteList.path}>
          <IconButton className={classes.menuButton} color='inherit'>
            <IconArrowBack />
          </IconButton>
        </Link>

        <Typography variant='h6' color='inherit' className={classes.grow}>
          Create Note
        </Typography>
      </Toolbar>

      <Section>
        <Paper className={classes.container}>
          <form onSubmit={onCreate}>
            {/* Input - email */}
            <Grid item xs={12}>
              <TextField
                name='note'
                value={note}
                onChange={onChange}
                label='Note'
                placeholder='Enter note'
                required={true}
                margin='dense'
                autoComplete='off'
                multiline
                rowsMax={20}
                fullWidth
                autoFocus
              />
            </Grid>

            {/* Button -  Save */}
            <Grid item xs={12} className={classes.buttonsContainer}>
              <Link to={routes.noteList.path}>
                <IconButton type='submit' aria-label='Close'>
                  <IconClose />
                </IconButton>
              </Link>

              <IconButton
                type='submit'
                aria-label='Save'
                color='primary'
                disabled={isSubmitting}>
                <IconCheck />
              </IconButton>
            </Grid>
          </form>
        </Paper>
      </Section>
    </div>
  )
}

// Component Properties
Create.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Create)
