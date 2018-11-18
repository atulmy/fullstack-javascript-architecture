// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// UI Imports
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core'
import styles from './styles'

// App Imports
import routes from '../../../setup/routes'
import { messageShow } from '../../common/api/actions'
import { list } from '../api/actions/query'
import { remove } from '../api/actions/mutation'
import Section from '../../common/Section'
import Loading from '../../common/Loading'
import EmptyMessage from '../../common/EmptyMessage'
import Item from './Item'

// Component
class List extends PureComponent {

  componentDidMount() {
    this.refresh()
  }

  refresh = () => {
    const { list } = this.props

    list()
  }

  onDelete = (noteId) => async () => {
    let check = window.confirm('Are you sure you want to delete this note?')

    if(check) {
      const { remove, list, messageShow } = this.props

      try {
        const { data } = await remove({ noteId })

        messageShow(data.message)

        if(data.success) {
          list()
        }
      } catch (error) {
        messageShow('Some error occurred. Please try again.')
      }
    }
  }

  render() {
    const { notes: { isLoading, list }, classes } = this.props

    return (
      <div>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Notes
          </Typography>

          <Link to={routes.noteCreate.path}>
            <Button color="inherit">Create</Button>
          </Link>
        </Toolbar>

        <Section>
          {
            isLoading
              ? <Loading />
              : list.length === 0
                ? <EmptyMessage message={'You have not added any notes yet.'} />
                : list.map(note =>
                    <Item
                      key={note._id}
                      note={note}
                      onDelete={this.onDelete}
                    />
                  )
          }
        </Section>
      </div>
    )
  }
}

// Component Properties
List.propTypes = {
  notes: PropTypes.object.isRequired,
  list: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
}

// Component State
function listState(state) {
  return {
    notes: state.notes
  }
}

export default connect(listState, { list, remove, messageShow })(withStyles(styles)(List))
