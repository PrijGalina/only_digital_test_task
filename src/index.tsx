import { createRoot } from 'react-dom/client'

const App = () => {
  return (
    <div className="app">App</div>
  )
}

const root = createRoot(document.getElementById('root')!)
root.render(<App />)