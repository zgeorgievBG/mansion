import {Link} from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <ul className='nav left'>
        <li>
          <Link className='home' to='/'>
           Home
          </Link>
        </li>
        <li>
          <Link className='home' to='/users'>
            Users
          </Link>
        </li>
      </ul>
      <ul className='nav right'>
        <li>
          <Link to='/register'>Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
