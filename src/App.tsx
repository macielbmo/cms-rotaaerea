import { RouterProvider } from 'react-router-dom'
import { router } from './router'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './assets/styles/global'
import dafaultTheme from './assets/styles/themes/default'

function App (): JSX.Element {
  return (
    <ThemeProvider theme={dafaultTheme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
