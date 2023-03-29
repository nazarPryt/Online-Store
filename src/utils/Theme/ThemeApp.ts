import { PaletteMode } from '@mui/material'
import { amber, deepOrange, grey } from '@mui/material/colors'

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: '#4f4a4a',
            paper: '#545252',
          },
          text: {
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
})
