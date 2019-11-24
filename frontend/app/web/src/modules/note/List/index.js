// Imports
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
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
import { list as getList } from '../api/actions/query'
import { remove } from '../api/actions/mutation'
import Section from '../../common/Section'
import Loading from '../../common/Loading'
import EmptyMessage from '../../common/EmptyMessage'
import Item from './Item'

// Component
const List = ({ classes }) => {
  // state
  const { isLoading, list } = useSelector(state => state.notes)
  const dispatch = useDispatch()

  // on component load
  useEffect(() => {
    refresh()
  }, [])

  // refresh
  const refresh = () => {
    dispatch(getList())
  }

  const onDelete = noteId => async () => {
    let check = window.confirm('Are you sure you want to delete this note?')

    if(check) {
      try {
        const { data } = await remove({ noteId })

        dispatch(messageShow(data.message))

        if(data.success) {
          refresh()
        }
      } catch (error) {
        dispatch(messageShow('Some error occurred. Please try again.'))
      }
    }
  }

  // render
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
                onDelete={onDelete}
              />
            )
        }
      </Section>
    </div>
  )
}

// Component Properties
List.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(List)
