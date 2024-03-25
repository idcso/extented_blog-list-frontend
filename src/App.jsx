import AppRouter from './components/AppRouter'
import Navbar from './components/UI/navbar/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthContext } from './context'
import { useState, useEffect } from 'react'

const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
        setIsLoading,
      }}
    >
      <Router>
        <Navbar />
        <AppRouter />
      </Router>
    </AuthContext.Provider>
  )
}

export default App
