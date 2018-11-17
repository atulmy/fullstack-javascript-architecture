// UI Imports
import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import yellow from '@material-ui/core/colors/yellow'

export default createMuiTheme({
  palette: {
    primary: blue,
    secondary: yellow
  },
  typography: {
    useNextVariants: true
  }
})
