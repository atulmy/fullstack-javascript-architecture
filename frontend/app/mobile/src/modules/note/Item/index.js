// Imports
import React from 'react'
import PropTypes from 'prop-types'
import {View, TouchableOpacity} from 'react-native'
import moment from 'moment'

// UI Imports
import {grey2} from '../../../ui/common/colors'
import Typography from '../../../ui/Typography'
import styles from './styles'

// App Imports
import params from '../../../setup/config/params'

// Component
const Item = ({onSelect, item: {_id, note, createdAt}}) => (
  <TouchableOpacity onPress={onSelect({_id})}>
    <View style={styles.container}>
      <Typography size='h4' numberOfLines={2}>
        {note}
      </Typography>

      <Typography size='h6' color={grey2} style={styles.date}>
        {moment(createdAt).format(params.common.formats.dateTime)}
      </Typography>
    </View>
  </TouchableOpacity>
)

// Component Properties
Item.propTypes = {
  item: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default Item
