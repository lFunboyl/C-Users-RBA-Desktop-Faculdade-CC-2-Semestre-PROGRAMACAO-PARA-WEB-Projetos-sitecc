import React from "react";
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider }
  from '@material-ui/core'
/* cores */
import {
  orange,
  lightBlue,
  blue,
  deepOrange,
  purple,
  cyan,
  teal,
  indigo
} from "@material-ui/core/colors";
import CssBaseline from '@material-ui/core/CssBaseline';
import Rotas from './rotas'



function App() {

  const temaDark = true
  const tipoPaleta = temaDark ? 'dark' : 'light'
  const corPrimaria = temaDark ? indigo[400] : blue[500]
  const corSecundaria = temaDark ? teal[500] : lightBlue[500]

  //consulte as paletas de cores em https://www.materialpalette.com
  let theme = createMuiTheme(
    {
      palette: {
        type: tipoPaleta,
        primary: {
          main: corPrimaria
        },
        secondary: {
          main: corSecundaria
        }
      }
    })


  theme = responsiveFontSizes(theme)

  return (
    <MuiThemeProvider theme={theme} >
      <CssBaseline />
      <Rotas />
    </MuiThemeProvider>
  )
}

export default App;