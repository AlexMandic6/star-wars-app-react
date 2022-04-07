import './header.css';
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <header className="masthead">
            <h1>
                <Link className="company__link" to='/'>{ props.company }</Link>
            </h1>
            <Nav />
        </header>
    );
}