import { Link } from 'react-router-dom'
import MyButton from '../button/MyButton'
import { useContext } from 'react'
import { AuthContext } from '../../../context'
import classes from './Navbar.module.css'

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className={classes.navbar}>
      <MyButton onClick={logout}>logout</MyButton>
      <div className={classes.navbar__links}>
        <Link className={classes.navbar__link} to="/about">
          about
        </Link>
        <Link className={classes.navbar__link} to="/posts">
          posts
        </Link>
      </div>
    </div>
  )
}

export default Navbar
