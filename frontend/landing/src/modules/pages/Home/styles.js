// Component Styles
const styles = theme => ({
  hero: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing(8)}px 0 ${theme.spacing(6)}px`,
  },
  heroButtons: {
    marginRight: theme.spacing(4),
  },

  iconMobileApp: {
    fontSize: 16,
    marginRight: theme.spacing()
  },

  iconWebApp: {
    fontSize: 16,
    marginLeft: theme.spacing()
  }
})

export default styles
