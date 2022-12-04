import './Header.scss';
import arrow from '../../assets/images/arrow-blue.svg'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="header">  
            <NavLink to='/intro'><img className="header__arrow" src={arrow}/></NavLink>
        </header>
    )
}

export default Header;