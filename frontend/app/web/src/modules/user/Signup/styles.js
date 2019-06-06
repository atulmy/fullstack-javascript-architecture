// Component Styles
const styles = theme => ({
  root: {
    marginTop: '10%',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3)
  },

  container: {
    padding: theme.spacing(2),
    maxWidth: 400,
    margin: '0 auto',
    backgroundColor: 'white'
  },

  buttonsContainer: {
    textAlign: 'right',
    marginTop: theme.spacing()
  },

  heading: {
    marginBottom: theme.spacing(),
    textAlign: 'center'
  }
})

export default styles
