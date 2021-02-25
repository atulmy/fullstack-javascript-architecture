// UI Imports
import grey from '@material-ui/core/colors/grey'

// Component Styles
const styles = (theme) => ({
  root: {
    padding: theme.spacing(),
    backgroundColor: grey[500],
  },

  menuButton: {
    marginLeft: -12,
  },

  grow: {
    flexGrow: 1,
  },

  container: {
    padding: theme.spacing(2),
  },

  buttonsContainer: {
    textAlign: 'right',
    marginTop: theme.spacing(),
  },
})

export default styles
