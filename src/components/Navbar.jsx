
import logo from '../assets/img/logo.png';

const Navbar = () => {


  return (
      <div className='header'>

        <img className="logo" src={logo} alt="logo" />

        <nav >
          <ul className="menu">
            <li>HOME</li>
            <li>PRODUCTS</li>
            <li>BLOG</li>
            <li>CONTACT</li>
          </ul>
        </nav>
        
      </div>
      
  );
};

export default Navbar;
