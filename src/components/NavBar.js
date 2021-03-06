import './NavBar.css';
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
      <div className='navBar'>
          
          <ul className="navList">
          <Link className='link' to='/' ><h1>Massimo</h1></Link>
          <li><NavLink to="category/remeras">Remeras</NavLink></li>
          <li><NavLink to="category/pantalones">Pantalones</NavLink></li>
          <li><NavLink to="category/buzos">Buzos</NavLink></li>
          <Link to='/cart' className='link'><li><CartWidget/></li></Link>
          </ul>
          </div>

          
    );
  }

export default NavBar;