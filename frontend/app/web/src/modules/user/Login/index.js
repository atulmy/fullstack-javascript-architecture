// Imports
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'

// UI Import
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import IconCheck from '@material-ui/icons/Check'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

// App Imports
import { login } from '../api/actions/query'
import AuthCheck from '../../auth/AuthCheck'

// Component
const Login = ({ classes }) => {
  // state
  const [user, setUser] = useState({ email: '', password: '' })
  const { isLoading } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  // on login
  const onLogin = async event => {
    event.preventDefault()

    if(!isEmpty(user.email) && !isEmpty(user.password)) {
      dispatch(login(user))
    }
  }

  // on change
  const onChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.container}>
        <Typography
          variant='subtitle1'
          color='inherit'
          className={classes.heading}
        >
          Already have an account? Please login:
        </Typography>

        <form onSubmit={onLogin}>
          {/* Input - email */}
          <Grid item xs={12}>
            <TextField
              name='email'
              type='email'
              value={user.email}
              onChange={onChange}
              label='Email'
              placeholder='Enter email'
              required={true}
              margin='dense'
              autoComplete='off'
              fullWidth
              autoFocus
            />
          </Grid>

          {/* Input - password */}
          <Grid item xs={12}>
            <TextField
              name='password'
              type='password'
              value={user.password}
              onChange={onChange}
              label='Password'
              placeholder='Enter password'
              required={true}
              margin='dense'
              autoComplete='off'
              fullWidth
            />
          </Grid>

          {/* Button -  Save */}
          <Grid item xs={12} className={classes.buttonsContainer}>
            <IconButton
              type='submit'
              aria-label='Save'
              color='primary'
              disabled={isLoading}
            >
              <IconCheck />
            </IconButton>
          </Grid>
        </form>
      </Paper>

      {/* Auth Check */}
      <AuthCheck />
    </div>
  )
}

// Component Properties
Login.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Login)
