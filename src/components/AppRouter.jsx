import { Routes, Route, Navigate } from 'react-router-dom'
import { privateRouter, publicRouter } from '../router'
import { useContext } from 'react'
import { AuthContext } from '../context'
import Loader from './UI/loader/Loader'

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext)

  if (isLoading) return <Loader />

  return (
    <div>
      {isAuth ? (
        <Routes>
          {privateRouter.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
          <Route path="*" element={<Navigate replace to="/posts" />} />
        </Routes>
      ) : (
        <Routes>
          {publicRouter.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
          <Route path="*" element={<Navigate replace to="/login" />} />
        </Routes>
      )}
    </div>
  )
}

export default AppRouter
