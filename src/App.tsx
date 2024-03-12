import { ThemeProvider } from 'styled-components'
import { Button } from "./components/button";
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary"/>
      <Button variant="secondary"/>
      <Button variant="dark"/>
      <Button variant="sucsses"/>
      <Button variant="danger"/>
      <Button />
    </ThemeProvider>
  )
  
}