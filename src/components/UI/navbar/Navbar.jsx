import { Link } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.navbar}>
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
