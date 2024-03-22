import AppRouter from './components/AppRouter'
import Navbar from './components/UI/navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppRouter />
    </Router>
  )
}

export default App
