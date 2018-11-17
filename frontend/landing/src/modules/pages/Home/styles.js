// Component Styles
const styles = theme => ({
  hero: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginRight: theme.spacing.unit * 4,
  },

  iconMobileApp: {
    fontSize: 16,
    marginRight: theme.spacing.unit
  },

  iconWebApp: {
    fontSize: 16,
    marginLeft: theme.spacing.unit
  }
})

export default styles
