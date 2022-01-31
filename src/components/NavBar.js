import './NavBar.css';
import CartWidget from './CartWidget'

function NavBar() {
    return (
      <div className='navBar'>
          <ul className="navList">
          <h1>Massimo</h1>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Remeras</a></li>
          <li><a href="#">Pantalones</a></li>
          <li><CartWidget/></li>
          </ul>
          
          </div>
    );
  }

export default NavBar;