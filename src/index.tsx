import { createRoot } from 'react-dom/client'
import Slider from './components/Slider'
import { AppWrapper, AppTitle } from './styles/styles'
import { BASE_GRAY_OPACITY } from './variables'
import { slides } from './data'

const App = () => {
  return (
    <AppWrapper color={BASE_GRAY_OPACITY}>
      <AppTitle>
        Исторические даты
      </AppTitle>
      <Slider slides={slides} />
    </AppWrapper>
  )
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)