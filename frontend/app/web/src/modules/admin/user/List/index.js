// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

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
class List extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      users: []
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

  refresh = (isLoading = true) => async () => {
    const { getList, messageShow } = this.props

    this.isLoadingToggle(isLoading)

    try {
      const { data } = await getList()

      if(data.success) {
        this.setState({
          users: data.data
        })
      } else {
        messageShow(data.message)
      }
    } catch(error) {
      messageShow('There was some error. Please try again.')
    } finally {
      this.isLoadingToggle(false)
    }
  }

  render() {
    const { classes } = this.props
    const { isLoading, users } = this.state

    return (
      <div>
        {/* Actions */}
        <Toolbar className={classes.toolbar}>
          <Button onClick={this.refresh()}>
            Refresh
          </Button>
        </Toolbar>

        {/* List */}
        <Section style={{ paddingTop: 0 }}>
          <Paper>
            {
              isLoading
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
}

// Component Properties
List.propTypes = {
  classes: PropTypes.object.isRequired,
  getList: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
}

export default connect(null, { getList, messageShow })(withStyles(styles)(List))
