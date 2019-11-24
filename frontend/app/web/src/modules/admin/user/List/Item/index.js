// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// UI Imports
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

// App Imports
import { routeImageUser } from '../../../../../setup/routes'
import { messageShow } from '../../../../common/api/actions'

// Component
class Item extends PureComponent {
  render() {
    const { user } = this.props

    return (
      <TableRow key={user._id}>
        <TableCell>
          { user.image ? <img src={routeImageUser + user.image} alt={user.name} style={{ width: 50 }} /> : 'No Image' }
        </TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.name}</TableCell>
      </TableRow>
    )
  }
}

// Component Properties
Item.propTypes = {
  user: PropTypes.object.isRequired,
  messageShow: PropTypes.func.isRequired,
}

export default connect(null, { messageShow })(Item)
