import { MantineProvider } from '@mantine/core'
import { Home } from './pages/Home'

export const App = (): JSX.Element => {
  return (
    <MantineProvider withCssVariables>
      <Home />
    </MantineProvider>
  )
}
