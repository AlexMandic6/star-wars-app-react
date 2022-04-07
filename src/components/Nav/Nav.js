// import Link from '../Link/Link';
import './nav.css';
import { NavLink } from 'react-router-dom';

export default function Nav(props) {
    

    return (
        <nav className='mainnav'>
            <NavLink className="activeLink" to="/films" >Films</NavLink>
            <NavLink className="activeLink" to="/people" >People</NavLink>
            <NavLink className="activeLink" to="/planets" >Planets</NavLink>
        </nav>
    );
};
