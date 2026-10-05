import style from './Header.module.scss'
import {Images} from '../../Images.js'
import { NavLink } from 'react-router-dom'

export default function App() {
  return (
    <header>
      <nav>
        <NavLink to='/'><img src={Images.Logo} alt="" /></NavLink>
        <div className={style.block}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/AboutUs'>About Us</NavLink>
            <NavLink to='/Projects'>Projects</NavLink>
            <NavLink to='/Services'>Services</NavLink>
            <NavLink to='/News'>News</NavLink>
        </div>
        <NavLink className={style.button} to='/ContactUs'>Contact us</NavLink>
      </nav>
    </header>
  )
}