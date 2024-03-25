import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'
import { useContext } from 'react'
import { AuthContext } from '../context'

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const login = (event) => {
    event.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }

  return (
    <div style={{ marginTop: 40 }}>
      <h1>Login</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="enter login" />
        <MyInput type="password" placeholder="enter password" />
        <MyButton>login</MyButton>
      </form>
    </div>
  )
}

export default Login
