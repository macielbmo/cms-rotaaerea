import { RouterProvider } from 'react-router-dom'
import GlobalStyles from './assets/styles/global'
import { router } from './router'

function App (): JSX.Element {
  return (
    <>
        <GlobalStyles />
      <RouterProvider router={router} />
    </>
  )
}

export default App
