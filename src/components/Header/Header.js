import './Header.scss';
// import arrow from '../../assets/images/arrow-blue.svg'
import { NavLink } from 'react-router-dom';

function Header({text, arrow}) {
    return (
        <header className="header">  
            <NavLink to='/language'><img alt='arrow' className="header__arrow" src={arrow}/>
            <h3 className='header__text'>{text}</h3>
            </NavLink>
        </header>
    )
}

export default Header;