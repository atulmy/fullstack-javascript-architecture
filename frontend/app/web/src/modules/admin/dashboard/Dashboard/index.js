// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// UI Imports
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import Button from '@material-ui/core/Button/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

// App Imports
import routes from '../../../../setup/routes'
import { getCount as getUserCount } from '../../../user/api/actions/query'
import { messageShow } from '../../../common/api/actions'
import Section from '../../../common/Section'
import Loading from '../../../common/Loading'

// Component
class Dashboard extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      userCount: 0,
      notesCount: 0
    }
  }

  componentDidMount() {
    this.refresh()()
  }

  isLoadingToggle = isLoading => {
    this.setState({
      isLoading
    })
  }

  refresh = () => async () => {
    const { getUserCount, messageShow } = this.props

    this.isLoadingToggle(true)

    try {
      // User
      const userCount = await getUserCount()

      if(userCount.data && userCount.data.success) {
        this.setState({
          userCount: userCount.data.data
        })
      }
    } catch(error) {
      messageShow('There was some error. Please try again.')
    } finally {
      this.isLoadingToggle(false)
    }
  }

  render() {
    const { classes } = this.props
    const { isLoading, userCount } = this.state

    return (
      <div>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Dashboard
          </Typography>

          <Button onClick={this.refresh()}>
            Refresh
          </Button>
        </Toolbar>

        <Section>
          {
            isLoading
              ? <Loading />
              : <Grid container spacing={16}>
                  <Grid item>
                    <Card>
                      <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                          Users Count
                        </Typography>
                        <Typography variant="h5" component="h2">
                          { userCount }
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Link to={routes.adminUserList.path}>
                          <Button size="small">View List</Button>
                        </Link>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>
          }
        </Section>
      </div>
    )
  }
}

// Component Properties
Dashboard.propTypes = {
  getUserCount: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

export default connect(null, { getUserCount, messageShow })(withStyles(styles)(Dashboard))
