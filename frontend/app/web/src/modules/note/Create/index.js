// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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
import { nullToEmptyString } from '../../../setup/helpers'
import { messageShow } from '../../common/api/actions'
import { create } from '../api/actions/mutation'
import Section from '../../common/Section'

// Component
class Create extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,

      note: ''
    }
  }

  save = async event => {
    event.preventDefault()

    const { create, messageShow, history } = this.props

    const { note } = this.state

    this.isLoadingToggle(true)

    try {
      const { data } = await create({ note })

      this.isLoadingToggle(false)

      messageShow(data.message)

      if(data.success) {
        history.push(routes.noteList.path)
      }
    } catch (error) {
      this.isLoadingToggle(false)

      messageShow('Some error occurred. Please try again.')
    }
  }

  onType = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  isLoadingToggle = isLoading => {
    this.setState({
      isLoading
    })
  }

  render() {
    const { classes } = this.props
    const { note, isLoading } = this.state

    return (
      <div>
        <Toolbar>
          <Link to={routes.noteList.path}>
            <IconButton className={classes.menuButton} color="inherit">
              <IconArrowBack />
            </IconButton>
          </Link>

          <Typography variant="h6" color="inherit" className={classes.grow}>
            Create Note
          </Typography>
        </Toolbar>

        <Section>
          <Paper className={classes.container}>
            <form onSubmit={this.save}>
              {/* Input - email */}
              <Grid item xs={12}>
                <TextField
                  name={'note'}
                  value={nullToEmptyString(note)}
                  onChange={this.onType}
                  label={'Note'}
                  placeholder={'Enter note'}
                  required={true}
                  margin={'dense'}
                  autoComplete={'off'}
                  multiline
                  rowsMax={20}
                  fullWidth
                  autoFocus
                />
              </Grid>

              {/* Button -  Save */}
              <Grid item xs={12} className={classes.buttonsContainer}>
                <Link to={routes.noteList.path}>
                  <IconButton
                    type={'submit'}
                    aria-label={'Close'}
                  >
                    <IconClose />
                  </IconButton>
                </Link>

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
        </Section>
      </div>
    )
  }
}

// Component Properties
Create.propTypes = {
  create: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

export default connect(null, { create, messageShow })(withStyles(styles)(Create))
