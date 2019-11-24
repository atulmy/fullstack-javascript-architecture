// Imports
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

// UI Imports
import Fade from '@material-ui/core/Fade'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

// App Imports
import { messageShow } from '../../../common/api/actions'
import { getList } from '../../../user/api/actions/query'
import EmptyMessage from '../../../common/EmptyMessage'
import Loading from '../../../common/Loading'
import Section from '../../../common/Section'
import Item from './Item'

// Component
const List = ({ classes }) => {
  // state
  const [isRefreshing, isRefreshingToggle] = useState(false)
  const [users, setUsers] = useState([])
  const dispatch = useDispatch()

  // on component load
  useEffect(() => {
    refresh()
  }, [])

  // refresh
  const refresh = async () => {
    isRefreshingToggle(true)

    try {
      const { data } = await getList()

      if(data.success) {
        setUsers(data.data)
      } else {
        dispatch(messageShow(data.message))
      }
    } catch(error) {
      dispatch(messageShow('There was some error. Please try again.'))
    } finally {
      isRefreshingToggle(false)
    }
  }

  // render
  return (
    <div>
      {/* Actions */}
      <Toolbar className={classes.toolbar}>
        <Button onClick={refresh}>
          Refresh
        </Button>
      </Toolbar>

      {/* List */}
      <Section style={{ paddingTop: 0 }}>
        <Paper>
          {
            isRefreshing
              ? <Loading />
              : users.length > 0
                ? <Fade in={true}>
                    <Table className={classes.table}>
                      <TableHead>
                        <TableRow>
                          <TableCell>Image</TableCell>
                          <TableCell>Email</TableCell>
                          <TableCell>Name</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {
                          users.map(user => (
                            <Item
                              key={user._id}
                              user={user}
                            />
                          ))
                        }
                      </TableBody>
                    </Table>
                  </Fade>
                : <EmptyMessage message={'No users to show.'} />
          }
        </Paper>
      </Section>
    </div>
  )
}

// Component Properties
List.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(List)
