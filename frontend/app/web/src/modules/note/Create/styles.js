// UI Imports
import grey from '@material-ui/core/colors/grey'

// Component Styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit,
    backgroundColor: grey[500]
  },

  menuButton: {
    marginLeft: -12
  },

  grow: {
    flexGrow: 1
  },

  container: {
    padding: theme.spacing.unit * 2
  },

  buttonsContainer: {
    textAlign: 'right',
    marginTop: theme.spacing.unit
  },

})

export default styles
