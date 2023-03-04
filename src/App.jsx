import './App.css'
import { Outlet } from 'react-router-dom'
import { TestProvider } from './context/TestContext'

function App() {

  return (
      <TestProvider>
        <div className="App">
          <Outlet />
        </div>
      </TestProvider>
    
  )
}

export default App
