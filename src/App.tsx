import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { defaultTheme } from "./styles/themes/default";
 
export function App() {
  return (
    //<GlobalStyle>
    <ThemeProvider theme={defaultTheme}>
      < BrowserRouter>
      <Router />
      </BrowserRouter>
    </ThemeProvider>
   // </GlobalStyle>
  )
}
