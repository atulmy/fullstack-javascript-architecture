// Imports
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

// UI Imports
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import Button from '@material-ui/core/Button/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

// App Imports
import routes from '../../../../setup/routes'
import { getDashboardCount } from '../../../user/api/actions/query'
import { messageShow } from '../../../common/api/actions'
import Section from '../../../common/Section'
import Loading from '../../../common/Loading'

// Component
const Dashboard = ({ classes }) => {
  // state
  const [isRefreshing, isRefreshingToggle] = useState(false)
  const [counts, setCounts] = useState({
    users: 0,
    notes: 0,
  })
  const dispatch = useDispatch()

  // on component load
  useEffect(() => {
    refresh()()
  }, [])

  // refresh
  const refresh = () => async () => {
    isRefreshingToggle(true)

    try {
      const counts = await getDashboardCount()

      if (counts.data && counts.data.success) {
        setCounts(counts.data.data)
      }
    } catch (error) {
      dispatch(messageShow('There was some error. Please try again.'))
    } finally {
      isRefreshingToggle(false)
    }
  }

  // render
  return (
    <div>
      <Toolbar>
        <Typography variant='h6' color='inherit' className={classes.grow}>
          Dashboard
        </Typography>

        <Button onClick={refresh()}>Refresh</Button>
      </Toolbar>

      <Section>
        {isRefreshing ? (
          <Loading />
        ) : (
          <Grid container spacing={2}>
            <Grid item>
              <Link to={routes.adminUserList.path}>
                <Card>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color='textSecondary'
                      gutterBottom>
                      Users Count
                    </Typography>
                    <Typography variant='h5' component='h2'>
                      {counts.users}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>

            <Grid item>
              <Card>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color='textSecondary'
                    gutterBottom>
                    Notes Count
                  </Typography>
                  <Typography variant='h5' component='h2'>
                    {counts.notes}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}
      </Section>
    </div>
  )
}

// Component Properties
Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Dashboard)
