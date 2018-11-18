// Component Styles
const styles = theme => ({
  root: {
    marginTop: '10%',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3
  },

  container: {
    padding: theme.spacing.unit * 2,
    maxWidth: 400,
    margin: '0 auto',
    backgroundColor: 'white'
  },

  buttonsContainer: {
    textAlign: 'right',
    marginTop: theme.spacing.unit
  },

  heading: {
    marginBottom: theme.spacing.unit,
    textAlign: 'center'
  }
})

export default styles
