// Imports
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

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
import routesUser from '../../../setup/routes/user'
import { messageShow } from '../../common/api/actions'
import { signup } from '../api/actions/mutation'
import AuthCheck from '../../auth/AuthCheck'

// Component
const Signup = ({ classes, history }) => {
  // state
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordRepeat: ''
  })
  const { isLoading } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  // on signup
  const onSignup = async event => {
    event.preventDefault()

    try {
      const { data } = await signup(user)

      dispatch(messageShow(data.message))

      if(data.success) {
        history.push(routesUser.userLogin.path)
      }
    } catch (error) {
      dispatch(messageShow('Some error occurred. Please try again.'))
    }
  }

  // on change
  const onChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  // render
  return (
    <div className={classes.root}>
      <Paper className={classes.container}>
        <Typography
          variant={'subtitle1'}
          color={'inherit'}
          className={classes.heading}
        >
          Don't have an account? Please signup:
        </Typography>

        <form onSubmit={onSignup}>
          {/* Input - name */}
          <Grid item xs={12}>
            <TextField
              name='name'
              value={user.name}
              onChange={onChange}
              label='Full name'
              placeholder='Enter full name'
              required={true}
              margin='dense'
              autoComplete='off'
              fullWidth
              autoFocus
            />
          </Grid>

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

          {/* Input - password repeat */}
          <Grid item xs={12}>
            <TextField
              name='passwordRepeat'
              type='password'
              value={user.passwordRepeat}
              onChange={onChange}
              label='Repeat Password'
              placeholder='Enter password again'
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
Signup.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Signup)
