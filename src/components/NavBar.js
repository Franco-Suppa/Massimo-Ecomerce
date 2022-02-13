import './NavBar.css';
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
      <div className='navBar'>
          <Link to='/' ><h1>Massimo</h1></Link>
          <ul className="navList">
          <li><NavLink to="category/remeras">Remeras</NavLink></li>
          <li><NavLink to="category/pantalones">Pantalones</NavLink></li>
          <li><NavLink to="category/buzos">Buzos</NavLink></li>
          <li><CartWidget/></li>
          </ul>
          
          </div>
    );
  }

export default NavBar;