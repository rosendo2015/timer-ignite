import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button/Button'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="danger" />
      <Button variant="success" />
      <Button />
      <h1>Testo de teste</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A dicta
        dignissimos iure consequatur voluptas explicabo iusto, modi officiis
        exercitationem sint. Porro minima harum qui placeat doloribus, nobis
        molestias incidunt soluta.
      </p>
    </ThemeProvider>
  )
}
