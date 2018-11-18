// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

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
import { nullToEmptyString } from '../../../setup/helpers'
import routesUser from '../../../setup/routes/user'
import { messageShow } from '../../common/api/actions'
import { signup } from '../api/actions/mutation'
import AuthCheck from '../../auth/AuthCheck'

// Component
class Signup extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      name: 'User',
      email: 'user@example.com',
      password: '123456',
      passwordRepeat: '123456'
    }
  }

  login = async event => {
    event.preventDefault()

    const { signup, messageShow, history } = this.props
    const { name, email, password, passwordRepeat } = this.state

    try {
      const { data } = await signup({ name, email, password, passwordRepeat })

      messageShow(data.message)

      if(data.success) {
        history.push(routesUser.userLogin.path)
      }
    } catch (error) {
      messageShow('Some error occurred.')
    }
  }

  onType = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { classes, auth: { isLoading } } = this.props
    const { name, email, password, passwordRepeat } = this.state

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

          <form onSubmit={this.login}>
            {/* Input - name */}
            <Grid item xs={12}>
              <TextField
                name={'name'}
                value={nullToEmptyString(name)}
                onChange={this.onType}
                label={'Full name'}
                placeholder={'Enter full name'}
                required={true}
                margin={'dense'}
                autoComplete={'off'}
                fullWidth
                autoFocus
              />
            </Grid>

            {/* Input - email */}
            <Grid item xs={12}>
              <TextField
                name={'email'}
                type={'email'}
                value={nullToEmptyString(email)}
                onChange={this.onType}
                label={'Email'}
                placeholder={'Enter email'}
                required={true}
                margin={'dense'}
                autoComplete={'off'}
                fullWidth
              />
            </Grid>

            {/* Input - password */}
            <Grid item xs={12}>
              <TextField
                name={'password'}
                type={'password'}
                value={nullToEmptyString(password)}
                onChange={this.onType}
                label={'Password'}
                placeholder={'Enter password'}
                required={true}
                margin={'dense'}
                autoComplete={'off'}
                fullWidth
              />
            </Grid>

            {/* Input - password repeat */}
            <Grid item xs={12}>
              <TextField
                name={'passwordRepeat'}
                type={'password'}
                value={nullToEmptyString(passwordRepeat)}
                onChange={this.onType}
                label={'Repeat Password'}
                placeholder={'Enter password again'}
                required={true}
                margin={'dense'}
                autoComplete={'off'}
                fullWidth
              />
            </Grid>

            {/* Button -  Save */}
            <Grid item xs={12} className={classes.buttonsContainer}>
              <IconButton
                type={'submit'}
                aria-label={'Save'}
                color={'primary'}
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
}

// Component Properties
Signup.propTypes = {
  auth: PropTypes.object.isRequired,
  signup: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

// Component State
function signupState(state) {
  return {
    auth: state.auth
  }
}

export default connect(signupState, { signup, messageShow })(withStyles(styles)(Signup))
